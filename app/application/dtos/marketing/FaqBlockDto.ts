export interface FaqBlockDto {
  style: FaqBlockStyle | string;
  items: {
    question: string;
    answer: string;
    link?: {
      text: string;
      href: string;
      target?: string;
    };
  }[];
}

export enum FaqBlockStyle {
  simple = "simple",
}
