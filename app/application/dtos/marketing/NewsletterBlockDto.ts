import { SocialsDto } from "./SocialsDto";

export interface NewsletterBlockDto {
  style: NewsletterBlockStyle | string;
  headline?: string;
  subheadline?: string;
  socials?: SocialsDto;
}

export enum NewsletterBlockStyle {
  simple = "simple",
  rightForm = "rightForm",
}
