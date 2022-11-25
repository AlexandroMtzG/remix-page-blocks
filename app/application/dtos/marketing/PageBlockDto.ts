import { BannerBlockDto } from "./BannerBlockDto";
import { CommunityBlockDto } from "./CommunityBlockDto";
import { FaqBlockDto } from "./FaqBlockDto";
import { FeaturesBlockDto } from "./FeaturesBlockDto";
import { FooterBlockDto } from "./FooterBlockDto";
import { GalleryBlockDto } from "./GalleryBlockDto";
import { HeaderBlockDto } from "./HeaderBlockDto";
import { HeroBlockDto } from "./HeroBlockDto";
import { LogoCloudsBlockDto } from "./LogoCloudsBlockDto";
import { NewsletterBlockDto } from "./NewsletterBlockDto";
import { TestimonialsBlockDto } from "./TestimonialsBlockDto";
import { VideoBlockDto } from "./VideoBlockDto";

export type PageBlockDto = {
  banner?: BannerBlockDto;
  header?: HeaderBlockDto;
  footer?: FooterBlockDto;
  hero?: HeroBlockDto;
  gallery?: GalleryBlockDto;
  logoClouds?: LogoCloudsBlockDto;
  video?: VideoBlockDto;
  community?: CommunityBlockDto;
  testimonials?: TestimonialsBlockDto;
  features?: FeaturesBlockDto;
  newsletter?: NewsletterBlockDto;
  faq?: FaqBlockDto;
};
