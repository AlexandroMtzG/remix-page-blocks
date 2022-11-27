export interface FeaturesBlockDto {
  style: FeaturesBlockStyle | string;
  headline: string;
  subheadline: string;
  topText?: string;
  columns: number;
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
  list = "list",
  cards = "cards",
}
