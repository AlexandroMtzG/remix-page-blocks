import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { FeaturesBlockDto } from "~/application/dtos/marketing/FeaturesBlockDto";
import CheckIcon from "~/components/icons/CheckIcon";

export default function FeaturesCards({ item }: { item: FeaturesBlockDto }) {
  const { t } = useTranslation();
  return (
    <section className="body-font text-gray-600 dark:text-gray-400">
      <div className="container mx-auto space-y-8 px-5 py-24 sm:space-y-12">
        <div className="space-y-5 text-center sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <div className="space-y-1">
            {item.topText && <h2 className="text-sm font-semibold uppercase leading-8 text-gray-500">{t(item.topText)}</h2>}
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</h2>
          </div>
          <p className="mx-auto max-w-2xl text-center text-xl text-gray-500">{t(item.subheadline)}</p>
        </div>

        <div className="-m-4 flex flex-wrap">
          {item.items.map((feature, idx) => {
            return (
              <div
                key={idx}
                className={clsx(
                  "p-4",
                  item.columns === 1 && "md:w-full",
                  item.columns === 2 && "md:w-1/2",
                  item.columns === 3 && "md:w-1/3",
                  item.columns === 4 && "md:w-1/4",
                  item.columns === 5 && "md:w-1/5",
                  item.columns === 6 && "md:w-1/6",
                  item.columns === 7 && "md:w-1/7",
                  item.columns === 8 && "md:w-1/8"
                )}
              >
                <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                      {feature.img ? (
                        <>
                          {feature.img.startsWith("<svg") ? (
                            <div dangerouslySetInnerHTML={{ __html: feature.img.replace("<svg", `<svg class='${" h-4 w-4"}'`) ?? "" }} />
                          ) : (
                            <img className=" h-4 w-4" src={feature.img} alt={feature.name} />
                          )}
                        </>
                      ) : (
                        <CheckIcon className=" h-4 w-4" aria-hidden="true" />
                      )}
                    </div>
                    <h2 className="title-font text-lg font-medium text-gray-900 dark:text-white">{t(feature.name)}</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">{t(feature.description)}</p>
                    {feature.link?.href && (
                      <a href={feature.link?.href} className="mt-3 inline-flex items-center text-indigo-500">
                        {t(feature.link.text)}
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="ml-2 h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}