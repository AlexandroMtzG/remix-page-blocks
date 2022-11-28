import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { VideoBlockDto } from "~/application/dtos/marketing/VideoBlockDto";

export default function VideoSimple({ item }: { item: VideoBlockDto }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={clsx("mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8", (item.headline || item.subheadline) && "py-12 lg:py-24")}>
        <div className="space-y-8 sm:space-y-12">
          {(item.headline || item.subheadline) && (
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              {item.headline && <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t(item.headline)}</h2>}
              {item.subheadline && <p className="text-xl text-gray-500">{t(item.subheadline)}</p>}
            </div>
          )}
          <div className="aspect-w-16 aspect-h-5 mx-auto my-12 mt-10 max-w-2xl">
            <iframe
              src={item.src}
              title={item.headline}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
