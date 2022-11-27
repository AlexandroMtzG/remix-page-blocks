import { TestimonialDto } from "./TestimonialDto";

export interface TestimonialsBlockDto {
  style: TestimonialsBlockStyle | string;
  headline: string;
  subheadline: string;
  items: TestimonialDto[];
}

export enum TestimonialsBlockStyle {
  simple = "simple",
}
