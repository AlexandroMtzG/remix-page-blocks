import { GalleryBlockDto } from "~/application/dtos/marketing/GalleryBlockDto";
import GalleryCarousel from "./variants/gallery/GalleryCarousel";

export default function Gallery({ item }: { item: GalleryBlockDto }) {
  return <>{item.style === "carousel" && <GalleryCarousel item={item} />}</>;
}
