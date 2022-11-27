import { NewsletterBlockDto } from "~/application/dtos/marketing/NewsletterBlockDto";
import NewsletterSimple from "./variants/newsletter/NewsletterSimple";
import NewsletterRightForm from "./variants/newsletter/NewsletterRightForm";

export default function Newsletter({ item }: { item: NewsletterBlockDto }) {
  return (
    <>
      {item.style === "simple" && <NewsletterSimple item={item} />}
      {item.style === "rightForm" && <NewsletterRightForm item={item} />}
    </>
  );
}
