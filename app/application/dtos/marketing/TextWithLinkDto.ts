export interface TextWithLinkDto {
  text?: string;
  link?: {
    text?: string;
    href?: string;
    target?: string;
  };
}
