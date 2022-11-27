import { Link } from "@remix-run/react";
import clsx from "clsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { HeroBlockDto } from "~/application/dtos/marketing/HeroBlockDto";

export default function HeroWithImage({ item }: { item: HeroBlockDto }) {
  const { t } = useTranslation();
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <div className="mb-4">
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
          </div>
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</h1>
          <p className="mb-8 leading-relaxed">{t(item.subheadline)}</p>
          <div className="flex justify-center space-x-4">
            {item.cta.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  {item.href.startsWith("http") ? (
                    <a key={idx} href={item.href} target={item.target} className={clsx("btn lg:btn-lg", item.isPrimary ? "btn-primary" : "btn-secondary")}>
                      {t(item.text)}
                    </a>
                  ) : (
                    <Link key={idx} to={item.href} className={clsx("btn lg:btn-lg", item.isPrimary ? "btn-primary" : "btn-secondary")}>
                      {t(item.text)}
                    </Link>
                  )}
                </Fragment>
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
        <div className="dark:border-border-300 w-5/6 rounded-lg border-2 border-dashed border-gray-800 md:w-1/2 lg:w-full lg:max-w-lg">
          <img className="rounded object-cover object-center" alt="hero" src={item.image ?? "https://dummyimage.com/720x600"} />
        </div>
      </div>
    </section>
  );
}
