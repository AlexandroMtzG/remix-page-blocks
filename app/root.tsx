import { ActionFunction, LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import styles from "./tailwind.css";
import { useChangeLanguage } from "remix-i18next";
import { createUserSession, getUserInfo } from "./utils/session.server";
import { loadRootData, useRootData } from "./utils/data/useRootData";
import clsx from "clsx";
import FloatingLoader from "./components/transitions/FloatingLoader";
import ServerError from "./components/ui/ServerError";
import { useTranslation } from "react-i18next";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const handle = { i18n: "translations" };
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return loadRootData(request);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => data?.metatags ?? [];

function Document({ children, lang = "en", dir = "ltr" }: { children: React.ReactNode; lang?: string; dir?: string }) {
  const rootData = useRootData();

  return (
    <html
      lang={lang}
      dir={dir}
      key={rootData.userSession?.lng}
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
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();
  useChangeLanguage(locale);
  return (
    <Document lang={locale} dir={i18n.dir()}>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  return (
    <Document>
      <div className="mx-auto p-12 text-center">
        <ServerError />
      </div>
    </Document>
  );
}
