import { Link } from "@remix-run/react";
import { HeroBlockDto } from "~/application/dtos/marketing/HeroBlockDto";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

export default function HeroDefault({ item }: { item: HeroBlockDto }) {
  const { t } = useTranslation();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
        <div className="mx-auto max-w-7xl text-center md:max-w-6xl">
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
          <h1 className="flex flex-col text-4xl font-extrabold sm:text-5xl md:text-5xl lg:text-7xl">
            {t(item.headline)}
            {/* <strong className="font-extrabold text-theme-700 sm:block">Increase Conversion.</strong> */}
          </h1>

          <p className="mx-auto mt-4 max-w-4xl sm:text-xl sm:leading-relaxed">{t(item.subheadline)}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {item.cta.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  {item.href.startsWith("http") ? (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.target}
                      className={clsx("btn-lg btn w-full sm:w-auto", item.isPrimary ? "btn-primary" : "btn-secondary")}
                    >
                      {t(item.text)}
                    </a>
                  ) : (
                    <Link key={idx} to={item.href} className={clsx("btn-lg btn w-full sm:w-auto", item.isPrimary ? "btn-primary" : "btn-secondary")}>
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
      </div>
    </section>
  );
}
