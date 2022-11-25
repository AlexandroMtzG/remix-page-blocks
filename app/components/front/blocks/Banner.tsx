import { BannerBlockDto } from "~/application/dtos/marketing/BannerBlockDto";
import BannerTop from "./variants/banner/BannerTop";
import BannerBottom from "./variants/banner/BannerBottom";

export default function Banner({ item }: { item: BannerBlockDto }) {
  return (
    <>
      {item.style === "top" && <BannerTop item={item} />}
      {item.style === "bottom" && <BannerBottom item={item} />}
    </>
  );
}
