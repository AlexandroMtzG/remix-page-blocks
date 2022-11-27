import { Link } from "@remix-run/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { FaqBlockDto } from "~/application/dtos/marketing/FaqBlockDto";

export default function FaqSimple({ item }: { item: FaqBlockDto }) {
  const { t } = useTranslation();
  return (
    <section className="body-font text-gray-600 dark:text-gray-400">
      <div className="container mx-auto space-y-8 px-5 py-24 sm:space-y-12">
        {(item.headline || item.subheadline) && (
          <div className="space-y-5 text-center sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            {item.headline && (
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</h2>
            )}
            {item.subheadline && <p className="mx-auto max-w-2xl text-center text-xl text-gray-500">{t(item.subheadline)}</p>}
          </div>
        )}
        <div className="flex flex-wrap">
          {item.items.map((item, idx) => {
            return (
              <div key={idx} className="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 dark:border-gray-700 md:w-full lg:w-1/2">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900 dark:text-white sm:text-xl">{t(item.question)}</h2>
                <p className="mb-4 text-base leading-relaxed">{item.answer}</p>
                {item.link?.href && (
                  <Fragment>
                    {item.link.href.startsWith("http") ? (
                      <a href={item.link.href} target={item.link.target} className="inline-flex items-center text-theme-500">
                        {t(item.link.text)}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    ) : (
                      <Link to={item.link.href} className="inline-flex items-center text-theme-500">
                        {t(item.link.text)}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    )}
                  </Fragment>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
