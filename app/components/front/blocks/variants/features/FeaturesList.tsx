import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { FeaturesBlockDto } from "~/application/dtos/marketing/FeaturesBlockDto";
import CheckIcon from "~/components/ui/icons/CheckIcon";

export default function FeaturesList({ item }: { item: FeaturesBlockDto }) {
  const { t } = useTranslation();
  return (
    <div id="features">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          {item.topText && <h2 className="text-base font-semibold uppercase tracking-wide text-theme-600">{t(item.topText)}</h2>}
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">{item.headline}</p>
          <p className="mt-4 text-lg text-gray-500">{item.subheadline}</p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className={clsx("space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8")}>
            {item.items.map((item) => (
              <div key={item.name} className="relative">
                <dt>
                  {item.img ? (
                    <>
                      {item.img.startsWith("<svg") ? (
                        <div dangerouslySetInnerHTML={{ __html: item.img.replace("<svg", `<svg class='${"absolute h-6 w-6 text-theme-500"}'`) ?? "" }} />
                      ) : (
                        <img className="absolute h-6 w-6 text-theme-500" src={item.img} alt={item.name} />
                      )}
                    </>
                  ) : (
                    <CheckIcon className="absolute h-6 w-6 text-theme-500" aria-hidden="true" />
                  )}
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900 dark:text-white">{item.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
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
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
