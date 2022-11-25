import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { FooterBlockDto } from "~/application/dtos/marketing/FooterBlockDto";
import Socials from "../socials/Socials";

export default function FooterSimple({ item }: { item: FooterBlockDto }) {
  const { t } = useTranslation();
  return (
    <div>
      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          {item.sections.map((section) => {
            return (
              <nav key={section.name} className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                {section.items.map((link) => {
                  return (
                    <div key={link.href} className="px-5 py-2">
                      {link.href.startsWith("http") ? (
                        <a href={link.href} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noreferrer">
                          {t(link.name)}
                        </a>
                      ) : (
                        <Link to={link.href} className="text-base text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          {t(link.name)}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>
            );
          })}
          <div className="mt-4 flex justify-center space-x-6">
            <Socials item={item.socials} />
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">{t("copyright")}</p>
          <p className="mt-4 text-center text-xs text-gray-400">
            <a href="https://saasrock.com/?ref=remix-page-blocks-footer" target="_blank" rel="noreferrer">
              Built with SaasRock.
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
