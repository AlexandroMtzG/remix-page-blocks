import { TFunction } from "i18next";
import { BannerBlockStyle } from "~/application/dtos/marketing/BannerBlockDto";
import { CommunityBlockStyle } from "~/application/dtos/marketing/CommunityBlockDto";
import { FaqBlockStyle } from "~/application/dtos/marketing/FaqBlockDto";
import { FeaturesBlockStyle } from "~/application/dtos/marketing/FeaturesBlockDto";
import { FooterBlockStyle } from "~/application/dtos/marketing/FooterBlockDto";
import { GalleryBlockStyle } from "~/application/dtos/marketing/GalleryBlockDto";
import { HeaderBlockStyle } from "~/application/dtos/marketing/HeaderBlockDto";
import { HeroBlockStyle } from "~/application/dtos/marketing/HeroBlockDto";
import { LogoCloudsBlockStyle } from "~/application/dtos/marketing/LogoCloudsBlockDto";
import { NewsletterBlockStyle } from "~/application/dtos/marketing/NewsletterBlockDto";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import { TestimonialsBlockStyle } from "~/application/dtos/marketing/TestimonialsBlockDto";
import { VideoBlockStyle } from "~/application/dtos/marketing/VideoBlockDto";
import { defaultFooter } from "./defaultFooter";
import { defaultHeader } from "./defaultHeader";

const defaultStyles = {
  banner: BannerBlockStyle.top,
  header: HeaderBlockStyle.simple,
  footer: FooterBlockStyle.columns,
  hero: HeroBlockStyle.simple,
  gallery: GalleryBlockStyle.carousel,
  logoClouds: LogoCloudsBlockStyle.custom,
  video: VideoBlockStyle.simple,
  community: CommunityBlockStyle.simple,
  testimonials: TestimonialsBlockStyle.simple,
  features: FeaturesBlockStyle.list,
  newsletter: NewsletterBlockStyle.rightForm,
  faq: FaqBlockStyle.simple,
};

export function defaultLandingPage({ t }: { t: TFunction }) {
  const blocks: PageBlockDto[] = [
    {
      header: {
        style: "simple",
        withLogo: true,
        withSignInAndSignUp: false,
        withThemeSwitcher: true,
        withLanguageSwitcher: false,
        links: [
          {
            path: "/events",
            title: "blocks.header.events",
            id: "7050",
          },
          {
            path: "/contact",
            title: "Contact",
            id: "2844",
          },
          {
            path: "/about",
            title: "blocks.header.about",
            id: "6663",
          },
          {
            id: "1003",
            title: "blocks.header.community-guidelines",
            path: "/community-guidelines",
          },
        ],
      },
    },
    {
      hero: {
        style: "simple",
        headline: "Geeks && Drinks",
        subheadline:
          "Our goal is to create a safe and inclusive space for developers and geeks to share ideas, get inspired and build community. We do this by creating and hosting events that are both social and educational. ",
        image: "https://via.placeholder.com/720x600?text=Your%20Hero%20Image",
        topText: {
          text: "// a function for san antonio coders",
          link: {
            text: "",
            href: "/about",
          },
        },
        cta: [
          {
            text: "Join Mailing List",
            href: "#",
            isPrimary: true,
          },
          {
            text: "View Events",
            href: "#",
            isPrimary: false,
          },
        ],
        bottomText: {
          text: "",
          link: {
            text: "",
            href: "",
          },
        },
      },
    },
  ];
  return blocks;
}
