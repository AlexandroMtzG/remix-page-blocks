import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { FooterBlockDto } from "~/application/dtos/marketing/FooterBlockDto";
import Icon from "~/components/front/Icon";
import Socials from "../socials/Socials";

export default function FooterColumns({ item }: { item: FooterBlockDto }) {
  const { t } = useTranslation();
  return (
    <footer className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <div className="title-font flex items-center justify-center font-medium text-gray-900 dark:text-white md:justify-start">
            <Icon className="h-10" />
          </div>
          {item.text && <p className="mt-2 hidden text-sm text-gray-500 md:block">{t(item.text)}</p>}
          {item.socials && (
            <div className="mx-auto mt-2 flex justify-center space-x-2 md:justify-start">
              <Socials item={item.socials} />
            </div>
          )}
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          {item.sections.map((section, idx) => {
            return (
              <div key={idx} className="w-full px-4 md:w-1/2 lg:w-1/4">
                <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900 dark:text-white">{t(section.name)}</h2>
                <nav className="mb-10 list-none space-y-3">
                  {section.items.map((item, idx) => {
                    return (
                      <li key={idx}>
                        {item.href.startsWith("http") ? (
                          <a href={item.href} target={item.target} className="text-gray-600 hover:text-gray-800">
                            {t(item.name)}
                          </a>
                        ) : (
                          <Link to={item.href} className="text-gray-600 hover:text-gray-800">
                            {t(item.name)}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <div className="text-center text-sm text-gray-500 sm:text-left">
            {t("copyright")} —
            <a href="https://saasrock.com/?ref=remix-page-blocks-footer" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">
              Built with SaasRock.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
