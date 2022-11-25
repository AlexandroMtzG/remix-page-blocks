export interface BannerBlockDto {
  style: BannerBlockStyle | string;
  text: string;
  cta: {
    text: string;
    href: string;
    target?: string;
  }[];
}

export enum BannerBlockStyle {
  top = "top",
  bottom = "bottom",
}
