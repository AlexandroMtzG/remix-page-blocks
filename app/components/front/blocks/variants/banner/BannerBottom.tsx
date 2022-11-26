import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BannerBlockDto } from "~/application/dtos/marketing/BannerBlockDto";
import MegaphoneIcon from "~/components/ui/icons/MegaphoneIcon";
import XIcon from "~/components/ui/icons/XIcon";

export default function BannerBottom({ item }: { item: BannerBlockDto }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  return (
    <>
      {item && open && (
        <div className="fixed inset-x-0 bottom-0 z-30 pb-2 sm:pb-5">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-theme-600 p-2 shadow-lg sm:p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-theme-800 p-2">
                    <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <p className="ml-3 truncate font-medium text-white">{t(item.text)}</p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  {item.cta.map((cta) => {
                    return (
                      <a
                        key={cta.href}
                        href={cta.href}
                        target={cta.target}
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-theme-600 shadow-sm hover:bg-theme-50"
                      >
                        {t(cta.text)}
                      </a>
                    );
                  })}
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="-mr-1 flex rounded-md p-2 hover:bg-theme-500 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="sr-only">{t("shared.close")}</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
