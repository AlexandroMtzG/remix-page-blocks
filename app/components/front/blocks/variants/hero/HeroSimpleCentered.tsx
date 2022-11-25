import { Link } from "@remix-run/react";
import clsx from "clsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { HeroBlockDto } from "~/application/dtos/marketing/HeroBlockDto";

export default function HeroSimpleCentered({ item }: { item: HeroBlockDto }) {
  const { t } = useTranslation();
  return (
    <div className="relative pb-16">
      <div className="isolate bg-white dark:bg-gray-900">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* {withHeader && <Header />} */}
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-16 pb-16">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
                    {item.topText && (
                      <span className="text-gray-600 dark:text-gray-400">
                        {t(item.topText.text ?? "")}{" "}
                        {item.topText.link && (
                          <Link to={item.topText.link?.href ?? ""} className="font-semibold text-theme-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {t(item.topText.link.text ?? "")} <span aria-hidden="true">&rarr;</span>
                          </Link>
                        )}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">{t(item.headline)}</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-center">{t(item.subheadline)}</p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    {item.cta.map((cta, idx) => {
                      return (
                        <Fragment key={idx}>
                          {cta.href.startsWith("http") ? (
                            <a
                              href={cta.href}
                              target={cta.target}
                              className={clsx(
                                cta.isPrimary
                                  ? "inline-block rounded-lg bg-theme-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-theme-600 hover:bg-theme-700 hover:ring-theme-700"
                                  : "inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:border-gray-800 dark:bg-gray-900 dark:text-theme-400 dark:hover:text-theme-500"
                              )}
                            >
                              {t(cta.text)}
                              <span className={clsx("ml-1", cta.isPrimary ? "text-theme-200" : "text-gray-900")} aria-hidden="true">
                                &rarr;
                              </span>
                            </a>
                          ) : (
                            <Link
                              to={cta.href}
                              className={clsx(
                                cta.isPrimary
                                  ? "inline-block rounded-lg bg-theme-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-theme-600 hover:bg-theme-700 hover:ring-theme-700"
                                  : "inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:border-gray-800 dark:bg-gray-900 dark:text-theme-400 dark:hover:text-theme-500"
                              )}
                            >
                              {t(cta.text)}
                              <span className={clsx("ml-1", cta.isPrimary ? "text-theme-200" : "text-gray-900")} aria-hidden="true">
                                &rarr;
                              </span>
                            </Link>
                          )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-8 space-y-3 text-center">
                  {item.bottomText && (
                    <span>
                      {t(item.bottomText.text ?? "")}{" "}
                      {item.bottomText.link?.href && (
                        <>
                          {item.bottomText.link.href.startsWith("http") ? (
                            <a
                              href={item.bottomText.link.href ?? ""}
                              target={item.bottomText.link.target}
                              className="border-b border-dashed border-accent-500 text-sm italic text-gray-500 hover:border-dotted dark:border-cyan-300"
                            >
                              {t(item.bottomText.link.text ?? "")}
                            </a>
                          ) : (
                            <Link
                              to={item.bottomText.link.href ?? ""}
                              className="border-b border-dashed border-accent-500 text-sm italic text-gray-500 hover:border-dotted dark:border-cyan-300"
                            >
                              {t(item.bottomText.link.text ?? "")}
                            </Link>
                          )}
                        </>
                      )}
                    </span>
                  )}
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
