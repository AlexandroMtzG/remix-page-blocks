import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { i18nHelper } from "~/locale/i18n.utils";
import ServerError from "~/components/ui/errors/ServerError";
import { Language } from "remix-i18next";
import { useLoaderData } from "@remix-run/react";
import WarningBanner from "~/components/ui/banners/WarningBanner";

type LoaderData = {
  title: string;
  i18n: Record<string, Language>;
  formUrl: string;
};
export let loader: LoaderFunction = async ({ request }) => {
  let { t, translations } = await i18nHelper(request);
  const data: LoaderData = {
    title: `${t("contact.headline")} | ${process.env.APP_NAME}`,
    i18n: translations,
    formUrl: process.env.CONTACT_FORMSPREE?.toString() ?? "",
  };
  return json(data);
};

export const meta: MetaFunction = ({ data }) => ({
  title: data?.title,
});

export default function ContactRoute() {
  const { t } = useTranslation();
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <div>
        <Header />
        <div className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:align-center sm:flex sm:flex-col">
              <div className="relative mx-auto w-full max-w-xl overflow-hidden py-12 px-2 sm:py-6">
                <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                  <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-black" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                  className="absolute right-full bottom-0 -translate-x-1/2 transform"
                  width="404"
                  height="404"
                  fill="none"
                  viewBox="0 0 404 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-black" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-slate-200 sm:text-4xl">{t("contact.headline")}</h1>
                  <p className="mt-4 text-lg leading-6 text-gray-500">{t("contact.subheadline")}</p>
                </div>
                <div className="mx-auto mt-12 max-w-xl">
                  {!data.formUrl ? (
                    <WarningBanner title="Warning" text="Set the CONTACT_FORMSPREE .env variable" />
                  ) : (
                    <form action={data.formUrl} method="POST" className="mt-9 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                          {t("contact.form.firstName")}
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                          {t("contact.form.lastName")}
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autoComplete="family-name"
                            className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                          {t("contact.form.email")}
                          <span className="ml-1 text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between">
                          <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                            {t("contact.form.organization")}
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="company"
                            id="company"
                            autoComplete="organization"
                            className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between">
                          <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                            {t("contact.form.jobTitle")}
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="jobTitle"
                            id="organization-title"
                            autoComplete="organization-title"
                            className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label htmlFor="comments" className="block text-sm font-medium text-gray-900 dark:text-slate-500">
                            {t("contact.form.message")}
                            <span className="ml-1 text-red-500">*</span>
                          </label>
                        </div>
                        <div className="mt-1">
                          <textarea
                            required
                            id="comments"
                            name="comments"
                            aria-describedby="comments_description"
                            rows={4}
                            className="relative block w-full appearance-none rounded-none rounded-b-sm border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 focus:z-10 focus:border-theme-300 focus:outline-none focus:ring-theme-300 dark:border-gray-600 dark:bg-gray-900 dark:text-slate-200 sm:text-sm"
                          ></textarea>
                        </div>
                      </div>

                      <div className="text-right sm:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-sm border border-transparent bg-theme-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-theme-600 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2"
                        >
                          {t("contact.send")}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return <ServerError error={error} />;
}
