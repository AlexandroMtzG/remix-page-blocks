import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { FeaturesBlockDto } from "~/application/dtos/marketing/FeaturesBlockDto";
import CheckIcon from "~/components/icons/CheckIcon";

export default function FeaturesGrid2x2({ item }: { item: FeaturesBlockDto }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-24">
        <div className="sm:text-center">
          {item.topText && <h2 className="text-lg font-semibold leading-8 text-theme-600">{t(item.topText)}</h2>}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">{t(item.subheadline)}</p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {item.items.map((item) => (
              <div key={item.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-theme-300 bg-theme-50 text-theme-500 dark:border-theme-700 dark:bg-theme-900 sm:shrink-0">
                  {item.img ? (
                    <>
                      {item.img.startsWith("<svg") ? (
                        <div dangerouslySetInnerHTML={{ __html: item.img.replace("<svg", `<svg class='${"h-8 w-8"}'`) ?? "" }} />
                      ) : (
                        <img className="h-8 w-8" src={item.img} alt={item.name} />
                      )}
                    </>
                  ) : (
                    <CheckIcon className="h-8 w-8" />
                  )}
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">{t(item.name)}</p>
                  <div className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {t(item.description)}{" "}
                    {item.link && item.link.text && (
                      <div>
                        {item.link.href.startsWith("http") ? (
                          <a
                            className="mt-2 inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 py-1 px-2 text-xs font-medium text-gray-600 no-underline hover:bg-gray-100 hover:text-accent-700 focus:z-10 focus:text-accent-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            href={item.link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {t(item.link.text)}
                          </a>
                        ) : (
                          <Link
                            className="mt-2 inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 py-1 px-2 text-xs font-medium text-gray-600 no-underline hover:bg-gray-100 hover:text-accent-700 focus:z-10 focus:text-accent-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            to={item.link.href}
                          >
                            {t(item.link.text)}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
