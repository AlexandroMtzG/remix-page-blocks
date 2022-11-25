import { FaqBlockDto } from "~/application/dtos/marketing/FaqBlockDto";
import FaqSimple from "./variants/faq/FaqSimple";

export default function Faq({ item }: { item: FaqBlockDto }) {
  return <>{item.style === "simple" && <FaqSimple item={item} />}</>;
}
