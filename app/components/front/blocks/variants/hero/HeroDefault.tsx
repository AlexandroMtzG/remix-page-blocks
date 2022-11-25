import { Link } from "@remix-run/react";
import { HeroBlockDto } from "~/application/dtos/marketing/HeroBlockDto";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function HeroDefault({ item }: { item: HeroBlockDto }) {
  const { t } = useTranslation();
  return (
    <div className="relative pb-16">
      <div className="relative overflow-hidden">
        <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-800" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="  absolute left-full -translate-y-3/4 -translate-x-1/4 transform text-gray-200 dark:text-gray-800 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>

        <div className="relative">
          <main className="mx-auto mt-8 max-w-7xl px-4 sm:mt-16 sm:px-6 lg:mt-16">
            <div>
              <div className="space-y-3 sm:text-center md:mx-auto md:max-w-6xl lg:col-span-6">
                {item.topText && (
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    {t(item.topText.text ?? "")}{" "}
                    {item.topText.link && (
                      <Link to={item.topText.link.href ?? ""} className="font-semibold text-theme-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {t(item.topText.link.text ?? "")} <span aria-hidden="true">&rarr;</span>
                      </Link>
                    )}
                  </span>
                )}
                <h1 className="flex flex-col text-4xl font-extrabold sm:text-5xl md:text-5xl lg:text-7xl">
                  <span>{t(item.headline)}</span>
                </h1>
                <div className="relative space-y-3 pb-10 text-lg leading-normal text-gray-500 sm:text-center md:text-2xl md:leading-9">
                  <p className="mx-auto max-w-4xl sm:text-xl">{t(item.subheadline)}</p>
                </div>

                <div className="mx-auto mt-2 justify-center sm:flex md:mt-2 lg:mx-0">
                  {item.cta.map((cta, idx) => {
                    return (
                      <div key={idx} className={clsx(idx === 0 ? "rounded-md shadow" : "mt-3 rounded-md shadow sm:mt-0 sm:ml-3")}>
                        {cta.href.startsWith("http") ? (
                          <a
                            href={cta.href}
                            target={cta.target}
                            className={clsx(
                              cta.isPrimary
                                ? "flex w-full items-center justify-center space-x-2 rounded-md border border-transparent bg-theme-500 px-5 py-3 text-base font-medium text-theme-50 hover:bg-theme-600 md:py-4 md:px-7 md:text-lg"
                                : "flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-base font-medium text-theme-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-theme-400 dark:hover:text-theme-500 md:py-4 md:px-7 md:text-lg"
                            )}
                          >
                            <div>{t(cta.text)}</div>
                          </a>
                        ) : (
                          <Link
                            to={cta.href}
                            className={clsx(
                              cta.isPrimary
                                ? "flex w-full items-center justify-center space-x-2 rounded-md border border-transparent bg-theme-500 px-5 py-3 text-base font-medium text-theme-50 hover:bg-theme-600 md:py-4 md:px-7 md:text-lg"
                                : "flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-3 text-base font-medium text-theme-600 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-theme-400 dark:hover:text-theme-500 md:py-4 md:px-7 md:text-lg"
                            )}
                          >
                            <div>{t(cta.text)}</div>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 space-y-3">
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
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
