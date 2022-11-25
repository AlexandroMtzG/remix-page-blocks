import { TextWithLinkDto } from "./TextWithLinkDto";

export interface HeroBlockDto {
  style: HeroBlockStyle | string;
  headline: string;
  subheadline: string;
  topText?: TextWithLinkDto;
  cta: {
    text: string;
    href: string;
    isPrimary: boolean;
    target?: string;
  }[];
  bottomText?: TextWithLinkDto;
}

export enum HeroBlockStyle {
  simple = "simple",
  centered = "centered",
}
