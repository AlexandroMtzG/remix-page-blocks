import type { AppLoadContext, EntryContext } from "@remix-run/node";

import isbot from "isbot";

import { resolve } from "node:path";
import { PassThrough } from "node:stream";
import { RemixServer } from "@remix-run/react";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { renderToPipeableStream } from "react-dom/server";

import Backend from "i18next-fs-backend";
import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { remixI18Next } from "./locale/v2/i18next.server";
import { i18nConfig } from "./locale/v2/i18n";

const ABORT_DELAY = 5_000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  const callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";

  // Internationalization (i18n).
  const i18nInstance = createInstance();
  const lng = await remixI18Next.getLocale(request);
  const ns = remixI18Next.getRouteNamespaces(remixContext);

  await i18nInstance
    .use(initReactI18next) // Tell our instance to use react-i18next.
    .use(Backend) // Setup backend.
    .init({
      ...i18nConfig, // Spread configuration.
      lng, // Locale detected above.
      ns, // Namespaces detected above.
      backend: {
        loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
      },
    });

  return new Promise((resolve, reject) => {
    let shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={i18nInstance}>
        <RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />
      </I18nextProvider>,
      {
        [callbackName]: () => {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.
          // Don't log errors encountered during initial shell rendering,
          // since they'll reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            // eslint-disable-next-line no-console
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
