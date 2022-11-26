import { useTranslation } from "react-i18next";
import { LogoCloudDto } from "~/application/dtos/marketing/LogoCloudsBlockDto";

export default function LogoCloudsSimpleWithHeading({ headline, items }: { headline?: string; items: LogoCloudDto[] }) {
  const { t } = useTranslation();
  return (
    <div className="bg-theme-100 py-8 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {headline && (
            <h2 className="mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-theme-900 dark:text-theme-50 lg:max-w-xl lg:text-left">
              {t(headline)}
            </h2>
          )}
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              {items.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {!item.srcDark ? (
                      <img className="h-12" src={item.src} alt={item.alt} />
                    ) : (
                      <>
                        <img className="h-12 dark:hidden" src={item.src} alt={item.alt} />
                        <img className="hidden h-12 dark:block" src={item.srcDark} alt={item.alt} />
                      </>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
