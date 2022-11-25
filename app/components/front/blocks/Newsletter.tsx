import { NewsletterBlockDto } from "~/application/dtos/marketing/NewsletterBlockDto";
import NewsletterSimple from "./variants/newsletter/NewsletterSimple";
import NewsletterWithGraphic from "./variants/newsletter/NewsletterWithGraphic";

export default function Newsletter({ item }: { item: NewsletterBlockDto }) {
  return (
    <>
      {item.style === "simple" && <NewsletterSimple item={item} />}
      {item.style === "cardWithGraphic" && <NewsletterWithGraphic item={item} />}
    </>
  );
}
