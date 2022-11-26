import { useTranslation } from "react-i18next";
import { GalleryBlockDto } from "~/application/dtos/marketing/GalleryBlockDto";
import Carousel from "./Carousel";

export default function GalleryCarousel({ item }: { item: GalleryBlockDto }) {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden py-8">
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-5xl lg:px-8">
        <div>
          {item.topText && <h2 className="text-base font-semibold uppercase tracking-wider text-theme-600">{item.topText}</h2>}
          {item.headline && <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t(item.headline)}</p>}
          {item.subheadline && <p className="mx-auto mt-5 max-w-prose text-base text-gray-500">{t(item.subheadline)}</p>}
        </div>
        <div className="mx-auto">
          <Carousel images={item.images} />
        </div>
      </div>
    </div>
  );
}
