import { TestimonialDto } from "./TestimonialDto";

export interface TestimonialsBlockDto {
  style: TestimonialsBlockStyle | string;
  headline: string;
  subheadline: string;
  testimonials: TestimonialDto[];
}

export enum TestimonialsBlockStyle {
  simple = "simple",
  sideBySide = "sideBySide",
}
