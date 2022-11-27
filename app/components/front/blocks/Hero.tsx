import { HeroBlockDto } from "~/application/dtos/marketing/HeroBlockDto";
import HeroDefault from "./variants/hero/HeroDefault";
import HeroWithImage from "./variants/hero/HeroWithImage";

export default function Hero({ item }: { item: HeroBlockDto }) {
  return (
    <>
      {item.style === "simple" && <HeroDefault item={item} />}
      {item.style === "image" && <HeroWithImage item={item} />}
    </>
  );
}
