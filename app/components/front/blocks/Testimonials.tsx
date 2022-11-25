import { TestimonialsBlockDto } from "~/application/dtos/marketing/TestimonialsBlockDto";
import TestimonialsSideBySideOnBrand from "./variants/testimonials/TestimonialsSideBySideOnBrand";
import TestimonialsSimple from "./variants/testimonials/TestimonialsSimple";

export default function Testimonials({ item }: { item: TestimonialsBlockDto }) {
  return (
    <>
      {item.style === "simple" && <TestimonialsSimple item={item} />}
      {item.style === "sideBySide" && <TestimonialsSideBySideOnBrand item={item} />}
    </>
  );
}
