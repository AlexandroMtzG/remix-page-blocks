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
    <section className="body-font text-gray-600">
      <div className="container mx-auto space-y-8 px-5 py-24 sm:space-y-12">
        <div className="space-y-5 text-center sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          {item.headline && (
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</h2>
          )}
          {item.subheadline && <p className="mx-auto max-w-3xl text-center text-xl text-gray-500">{t(item.subheadline)}</p>}
          <div className="mt-3 text-sm text-gray-500">
            {t("newsletter.weCare")}{" "}
            <Link to="/privacy-policy" className="font-medium underline">
              {t("privacy.headline")}
            </Link>
          </div>
        </div>
        <fetcher.Form method="post" action="/newsletter" className="mx-auto flex w-full max-w-xl flex-col items-end space-y-4 px-8 sm:px-0">
          <div className="relative w-full flex-grow">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              {t("newsletter.form.email")} <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-theme-800"
            />
          </div>
          <div className="flex w-full items-center space-x-4">
            <div className="relative w-1/2 flex-grow">
              <label htmlFor="first_name" className="text-sm leading-7 text-gray-600">
                {t("newsletter.form.firstName")} <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-theme-800"
              />
            </div>
            <div className="relative w-1/2 flex-grow">
              <label htmlFor="last_name" className="text-sm leading-7 text-gray-600">
                {t("newsletter.form.lastName")} <span className="ml-1 text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:focus:ring-theme-800"
              />
            </div>
          </div>
          <div className="mt-3 flex w-full items-center justify-between space-x-2">
            <div className="text-gray-900 dark:text-white">
              {fetcher.data?.success ? <p>{fetcher.data.success}</p> : fetcher.data?.error ? <p>{fetcher.data.error}</p> : <div className="invisible">...</div>}
            </div>
            <button type="submit" className="btn-primary btn">
              {state === "submitting" ? t("newsletter.subscribing") + "..." : t("newsletter.subscribe")}
            </button>
          </div>
        </fetcher.Form>
      </div>
    </section>
  );
}
