import { useTranslation } from "react-i18next";
import { Link, useFetcher } from "@remix-run/react";
import { NewsletterBlockDto } from "~/application/dtos/marketing/NewsletterBlockDto";

export default function NewsletterRightForm({ item }: { item: NewsletterBlockDto }) {
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
    <section className="body-font text-gray-600 dark:text-gray-400">
      <div className="container mx-auto flex flex-wrap items-center px-5 py-24">
        <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
          {item.headline && <h1 className="title-font text-3xl font-medium text-gray-900 dark:text-white">{t(item.headline)}</h1>}
          {item.subheadline && <p className="mt-4 leading-relaxed">{t(item.subheadline)}</p>}
        </div>
        <fetcher.Form
          method="post"
          action="/newsletter"
          className="mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 dark:bg-gray-800 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6"
        >
          <h2 className="title-font mb-5 text-lg font-medium text-gray-900 dark:text-white">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              {t("newsletter.form.email")} <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full rounded border border-gray-300 bg-white bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-theme-800"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="first_name" className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              {t("newsletter.form.firstName")} <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              className="w-full rounded border border-gray-300 bg-white bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-theme-800"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="last_name" className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              {t("newsletter.form.lastName")} <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              className="w-full rounded border border-gray-300 bg-white bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-theme-500 focus:bg-transparent focus:ring-2 focus:ring-theme-200 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-theme-800"
            />
          </div>
          <button type="submit" className="btn-primary btn">
            {state === "submitting" ? t("newsletter.subscribing") + "..." : t("newsletter.subscribe")}
          </button>
          <div className="mt-3 text-center text-gray-900 dark:text-white">
            {fetcher.data?.success ? <p>{fetcher.data.success}</p> : fetcher.data?.error ? <p>{fetcher.data.error}</p> : <div className="invisible">...</div>}
          </div>
          <div className="mt-3 text-xs text-gray-500">
            {t("newsletter.weCare")}{" "}
            <Link to="/privacy-policy" className="font-medium underline">
              {t("privacy.headline")}
            </Link>
          </div>
        </fetcher.Form>
      </div>
    </section>
  );
}
