import { ActionFunction, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData } from "@remix-run/react";
import styles from "./styles/app.css";
import { useSetupTranslations } from "remix-i18next";
import { createUserSession, getUserInfo } from "./utils/session.server";
import { loadRootData, useRootData } from "./utils/data/useRootData";
import clsx from "clsx";
import Page404 from "./components/pages/Page404";
import FloatingLoader from "./components/transitions/FloatingLoader";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export let loader: LoaderFunction = async ({ request }) => {
  return loadRootData(request);
};

export const meta: MetaFunction = ({ data }) => ({
  ...data?.metaTags,
});

function Document({ children }: { children: React.ReactNode; title?: string }) {
  const rootData = useRootData();

  return (
    <html
      key={rootData.userSession?.lng}
      lang={rootData.userSession?.lng}
      className={clsx(rootData.userSession?.lightOrDarkMode === "dark" ? "dark bg-gray-900" : "", " bg-white")}
    >
      <head>
        <Meta />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Links />
      </head>

      <body className="max-h-full min-h-screen max-w-full bg-white text-gray-800 dark:bg-slate-900 dark:text-white">
        {children}

        {!rootData.debug && (
          <>
            <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
            <noscript>
              <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="privacy-friendly-simpleanalytics" referrerPolicy="no-referrer-when-downgrade" />
            </noscript>
          </>
        )}

        <LiveReload />
        <FloatingLoader />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const action: ActionFunction = async ({ request }) => {
  const userInfo = await getUserInfo(request);
  const form = await request.formData();
  const action = form.get("action");
  const redirect = form.get("redirect")?.toString();
  if (action === "toggleLightOrDarkMode") {
    const current = userInfo.lightOrDarkMode ?? "dark";
    const lightOrDarkMode = current === "dark" ? "light" : "dark";
    return createUserSession(
      {
        lng: userInfo.lng,
        lightOrDarkMode,
      },
      redirect
    );
  }
  if (action === "setLocale") {
    const lng = form.get("lng")?.toString() ?? "";
    return createUserSession(
      {
        lightOrDarkMode: userInfo?.lightOrDarkMode,
        lng,
      },
      redirect
    );
  }
};

export default function App() {
  let { lng } = useLoaderData<{ lng: string }>();
  useSetupTranslations(lng ?? "en");
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div>
        <h1>
          {caught.status === 404 ? (
            <Page404 />
          ) : (
            <div className="mx-auto p-12 text-center">
              {caught.status} {caught.statusText}
            </div>
          )}
        </h1>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  const data = useRootData();
  return (
    <Document title="Unexpected error">
      <div className="mx-auto p-12 text-center">
        <h1>
          Server error,{" "}
          <button type="button" onClick={() => window.location.reload()} className="underline">
            please try again
          </button>
          {data.debug && (
            <div className="flex flex-col space-y-1 text-left">
              <div>
                <span className="font-bold">Message:</span> {error.message}
              </div>
              <div>
                <span className="font-bold">Stack:</span> {error.stack}
              </div>
            </div>
          )}
        </h1>
      </div>
    </Document>
  );
}
