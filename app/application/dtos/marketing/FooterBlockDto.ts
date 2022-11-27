import { SocialsDto } from "./SocialsDto";

export interface FooterBlockDto {
  style: FooterBlockStyle | string;
  text?: string;
  sections: FooterSectionDto[];
  socials?: SocialsDto;
}

export interface FooterSectionDto {
  name: string;
  items: { name: string; href: string; target?: string }[];
}

export enum FooterBlockStyle {
  columns = "columns",
}
