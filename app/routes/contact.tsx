import Footer from "~/components/front/Footer";
import Header from "~/components/front/Header";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { i18nHelper } from "~/locale/i18n.utils";
import ServerError from "~/components/ui/ServerError";
import { Language } from "remix-i18next";
import { useLoaderData } from "@remix-run/react";
import WarningBanner from "~/components/ui/WarningBanner";

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
      <div className="relative">
        <Header />
        <div className="bg-white dark:bg-gray-900">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-slate-200 sm:text-4xl">{t("contact.headline")}</h1>
              <p className="mt-4 text-lg leading-6 text-gray-500">{t("contact.subheadline")}</p>
            </div>
            <div className="mx-auto mt-14 max-w-xl">
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
                        className="input-bordered input w-full bg-gray-50 dark:bg-gray-800"
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
                        className="input-bordered input w-full bg-gray-50 dark:bg-gray-800"
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
                        className="input-bordered input w-full bg-gray-50 dark:bg-gray-800"
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
                        className="input-bordered input w-full bg-gray-50 dark:bg-gray-800"
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
                        className="input-bordered input w-full bg-gray-50 dark:bg-gray-800"
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
                        rows={3}
                        className="textarea-bordered textarea w-full bg-gray-50 dark:bg-gray-800"
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-right sm:col-span-2">
                    <button type="submit" className="btn-primary btn">
                      {t("contact.send")}
                    </button>
                  </div>
                </form>
              )}
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
