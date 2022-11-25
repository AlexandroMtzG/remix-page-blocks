import { HeroBlockDto } from "~/application/dtos/marketing/HeroBlockDto";
import HeroDefault from "./variants/hero/HeroDefault";
import HeroSimpleCentered from "./variants/hero/HeroSimpleCentered";

export default function Hero({ item }: { item: HeroBlockDto }) {
  return (
    <>
      {item.style === "simple" && <HeroDefault item={item} />}
      {item.style === "centered" && <HeroSimpleCentered item={item} />}
    </>
  );
}
