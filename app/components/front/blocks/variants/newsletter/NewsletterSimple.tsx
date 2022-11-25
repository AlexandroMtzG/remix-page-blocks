import { useTranslation } from "react-i18next";
import { Link, useFetcher } from "@remix-run/react";
import { NewsletterBlockDto } from "~/application/dtos/marketing/NewsletterBlockDto";

export default function NewsletterSimple({ item }: { item: NewsletterBlockDto }) {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const state: "idle" | "success" | "error" | "submitting" = fetcher.submission
    ? "submitting"
    : fetcher.data?.subscription
    ? "success"
    : fetcher.data?.error
    ? "error"
    : "idle";
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:flex lg:items-center lg:py-32 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          {item.headline && <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</h2>}
          {item.subheadline && <p className="mt-3 max-w-3xl text-lg text-gray-500">{t(item.subheadline)}</p>}
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <fetcher.Form method="post" action="/newsletter" className="sm:flex">
            <label htmlFor="email" className="sr-only">
              {t("newsletter.form.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-theme-500 focus:ring-1 focus:ring-theme-500 sm:max-w-xs"
              placeholder={t("newsletter.form.email")}
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-theme-600 py-3 px-5 text-base font-medium text-white hover:bg-theme-700 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2"
              >
                {state === "submitting" ? t("newsletter.subscribing") + "..." : t("newsletter.subscribe")}
              </button>
            </div>
          </fetcher.Form>
          <p className="mt-3 text-sm text-gray-500">
            {t("newsletter.weCare")}{" "}
            <Link to="/privacy-policy" className="font-medium underline">
              {t("privacy.headline")}
            </Link>
          </p>
          <div className="mx-auto mt-2 text-center text-gray-900 dark:text-white">
            {fetcher.data?.success ? <p>{fetcher.data.success}</p> : fetcher.data?.error ? <p>{fetcher.data.error}</p> : <div className="invisible">...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
