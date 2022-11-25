export interface GalleryBlockDto {
  style: GalleryBlockStyle | string;
  topText?: string;
  headline?: string;
  subheadline?: string;
  images: { title: string; src: string }[];
}

export enum GalleryBlockStyle {
  carousel = "carousel",
}
