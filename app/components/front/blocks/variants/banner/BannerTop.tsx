import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BannerBlockDto } from "~/application/dtos/marketing/BannerBlockDto";
import MegaphoneIcon from "~/components/icons/MegaphoneIcon";
import XIcon from "~/components/icons/XIcon";

export default function BannerTop({ item }: { item: BannerBlockDto }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  return (
    <>
      {item && open && (
        <div className="alert border-theme-500 mx-auto rounded-none border-b-2 bg-gray-900 text-white shadow-lg">
          <div>
            <MegaphoneIcon className="current h-6 w-6 flex-shrink-0" />
            <div className={clsx("flex flex-grow", item.cta ? "justify-start" : "justify-center")}>
              <div className="flex items-baseline space-x-1 text-sm font-medium text-white sm:text-base">{t(item.text)}</div>
            </div>
          </div>
          <div>
            {item.cta && (
              <div className="mt-0 flex w-auto flex-shrink-0 space-x-2">
                {item.cta.map((cta) => {
                  return (
                    <a key={cta.text} href={cta.href} target={cta.target} className="btn-secondary btn-sm btn">
                      <span>{t(cta.text)}</span>
                    </a>
                  );
                })}
              </div>
            )}
            <div>
              <button onClick={() => setOpen(false)} className="btn-sm btn">
                <XIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
