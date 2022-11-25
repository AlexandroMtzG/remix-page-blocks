export interface FeaturesBlockDto {
  style: FeaturesBlockStyle | string;
  headline: string;
  subheadline: string;
  topText?: string;
  items: {
    name: string;
    description: string;
    img?: string;
    link?: {
      text: string;
      href: string;
    };
  }[];
}

export enum FeaturesBlockStyle {
  grid2x2 = "grid2x2",
  list = "list",
}
