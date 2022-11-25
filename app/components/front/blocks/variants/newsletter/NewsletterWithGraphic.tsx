import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useFetcher } from "@remix-run/react";
import Socials from "../socials/Socials";
import { NewsletterBlockDto } from "~/application/dtos/marketing/NewsletterBlockDto";

export default function NewsletterWithGraphic({ item }: { item: NewsletterBlockDto }) {
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
    <div className="py-12">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50 dark:bg-gray-800" />
          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-800" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-theme-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path className="text-theme-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                <path className="text-theme-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                {item.headline && <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{t(item.headline)}</h2>}
                {item.subheadline && <p className="mx-auto mt-6 max-w-2xl text-lg text-theme-200">{t(item.subheadline)}</p>}
              </div>
              <fetcher.Form method="post" action="/newsletter" className="mx-auto mt-9 grid grid-cols-1 gap-x-1 gap-y-4 sm:max-w-lg sm:grid-cols-2 sm:gap-x-4">
                <input name="action" type="hidden" value="subscribe" readOnly hidden />
                <input name="source" type="hidden" value="cta" readOnly hidden />
                <div>
                  <label htmlFor="first_name" className="sr-only">
                    {t("newsletter.form.firstName")}
                  </label>
                  <div className="mt-1">
                    <input
                      required
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-600"
                      placeholder={t("newsletter.form.firstName")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="first_name" className="sr-only">
                    {t("newsletter.form.lastName")}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-600"
                      placeholder={t("newsletter.form.lastName")}
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1 sm:col-span-2">
                  <label htmlFor="email" className="sr-only">
                    {t("newsletter.form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-600"
                    placeholder={t("newsletter.form.email")}
                  />
                </div>
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <button
                    type="submit"
                    className={clsx(
                      "block w-full rounded-md border border-transparent bg-theme-500 px-5 py-3 text-base font-medium text-white shadow focus:outline-none sm:px-10",
                      state === "submitting"
                        ? "cursor-not-allowed opacity-80"
                        : "hover:bg-theme-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-600"
                    )}
                  >
                    {state === "submitting" ? t("newsletter.subscribing") + "..." : t("newsletter.subscribe")}
                  </button>
                </div>
              </fetcher.Form>
              <div className="mx-auto mt-2 text-center text-white">
                {fetcher.data?.success ? (
                  <p>{fetcher.data.success}</p>
                ) : fetcher.data?.error ? (
                  <p className="text-red-200">{fetcher.data.error}</p>
                ) : (
                  <div></div>
                )}
              </div>

              <div className="mt-10 flex items-center justify-center space-x-4">
                <Socials item={item.socials} iconClassName="h-7 w-7 text-gray-100 hover:text-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
