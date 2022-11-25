export interface VideoBlockDto {
  style: VideoBlockStyle | string;
  headline?: string;
  subheadline?: string;
  src: string;
}

export enum VideoBlockStyle {
  simple = "simple",
}
