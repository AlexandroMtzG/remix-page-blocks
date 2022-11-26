import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { FooterBlockDto } from "~/application/dtos/marketing/FooterBlockDto";
import Icon from "~/components/front/Icon";
import Socials from "../socials/Socials";

export default function FooterColumns({ item }: { item: FooterBlockDto }) {
  const { t } = useTranslation();
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Icon className="h-10 w-auto" />
            {item.text && <p className="text-base text-gray-500">{t(item.text)}</p>}
            <div className="flex space-x-6">
              <Socials item={item.socials} />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            {item.sections.map((section, idx) => {
              return (
                <div key={idx} className={clsx(idx > 0 && "mt-0")}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{section.name}</h3>
                  <ul className="mt-4 space-y-4">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        {item.href.startsWith("http") ? (
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" target={item.target}>
                            {t(item.name)}
                          </a>
                        ) : (
                          <Link to={item.href} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            {t(item.name)}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-base text-gray-400 xl:text-center">{t("copyright")}</p>
          <p className="text-base text-gray-400 xl:text-center">
            <a href="https://saasrock.com/?ref=remix-page-blocks-footer" target="_blank" rel="noreferrer">
              Built with SaasRock.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
