import { TFunction } from "react-i18next";
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
  logoClouds: LogoCloudsBlockStyle.simple,
  video: VideoBlockStyle.simple,
  community: CommunityBlockStyle.simple,
  testimonials: TestimonialsBlockStyle.simple,
  features: FeaturesBlockStyle.list,
  newsletter: NewsletterBlockStyle.rightForm,
  faq: FaqBlockStyle.simple,
};

export function defaultLandingPage({ t }: { t: TFunction }) {
  const blocks: PageBlockDto[] = [
    // Banner
    {
      banner: {
        style: defaultStyles.banner,
        text: t("blocks.banner.text"),
        cta: [{ text: t("blocks.banner.cta.learnMore"), href: "https://saasrock.com/?ref=remix-page-blocks-banner" }],
      },
    },
    // Header
    {
      header: defaultHeader({ t }),
    },
    // Hero
    {
      hero: {
        style: defaultStyles.hero,
        headline: t("blocks.hero.headline"),
        subheadline: t("blocks.hero.subheadline"),
        image: "https://via.placeholder.com/720x600?text=Your%20Hero%20Image",
        cta: [
          {
            text: t("blocks.hero.cta.primary"),
            href: "https://github.com/AlexandroMtzG/remix-page-blocks",
            isPrimary: true,
          },
          {
            text: t("blocks.hero.cta.secondary"),
            href: "https://saasrock.com/?ref=remix-page-blocks-hero",
            isPrimary: false,
            target: "_blank",
          },
        ],
        topText: {
          text: t("blocks.hero.topText"),
        },
        bottomText: {
          link: {
            text: t("blocks.hero.bottomText"),
            href: "https://github.com/AlexandroMtzG",
            target: "_blank",
          },
        },
      },
    },
    // Logo Clouds
    {
      logoClouds: {
        style: defaultStyles.logoClouds,
        headline: t("blocks.logoClouds.headline"),
        logos: [
          {
            alt: "Remix",
            href: "https://remix.run/ref=saasrock.com",
            src: "https://saasrock.com/build/_assets/remix-4ESNCVZ5.png",
            srcDark: "https://saasrock.com/build/_assets/remix-dark-U2ASPSOI.png",
          },
          {
            alt: "Tailwind CSS",
            href: "https://tailwindcss.com/ref=saasrock.com",
            src: "https://saasrock.com/build/_assets/tailwindcss-G3OQBAVI.png",
          },
          {
            alt: "Prisma",
            href: "https://prisma.io/ref=saasrock.com",
            src: "https://saasrock.com/build/_assets/prisma-ATY77GXX.png",
            srcDark: "https://saasrock.com/build/_assets/prisma-dark-3FBYDJ4J.png",
          },
        ],
      },
    },
    // Gallery
    {
      gallery: {
        style: defaultStyles.gallery,
        topText: t("blocks.gallery.topText"),
        headline: t("blocks.gallery.headline"),
        subheadline: t("blocks.gallery.subheadline"),
        images: [
          {
            title: "Landing Page",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/hero-light.png",
          },
          {
            title: "Contact Page",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/contact.png",
          },
          {
            title: "Newsletter Page",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/newsletter.png",
          },
          {
            title: "Dark Mode",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/hero-dark.png",
          },
          {
            title: "Multi-Language",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/multi-language.png",
          },
          {
            title: "Multi-Theme",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/multi-theme.png",
          },
          {
            title: "Block Editor",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/block-editor.png",
          },
          {
            title: "Components",
            src: "https://yahooder.sirv.com/remixblocks/page-blocks/remix-page-blocks/components.png",
          },
        ],
      },
    },
    // Video #1
    {
      video: {
        style: defaultStyles.video,
        headline: t("blocks.video.headline"),
        subheadline: t("blocks.video.subheadline"),
        src: "https://www.loom.com/embed/eccf927d35cd4ad3b4a1d512257cea53",
      },
    },
    // Video #2
    {
      video: {
        style: defaultStyles.video,
        src: "https://www.loom.com/embed/443b9ffaaef2497fa1f94a51579e96f8",
      },
    },
    // Community
    {
      community: {
        style: defaultStyles.community,
        headline: "Community Section",
        subheadline: "List your community links and members.",
        type: "manual",
        members: [
          { user: "Michael Jackson", avatar_url: "https://avatars.githubusercontent.com/u/92839?v=4" },
          { user: "Alexandro Martinez", avatar_url: "https://avatars.githubusercontent.com/u/8606530?v=4" },
          { user: "Ryan Florence", avatar_url: "https://avatars.githubusercontent.com/u/100200?v=4" },
        ],
        cta: [
          {
            text: "Subscribe",
            href: "https://saasrock.com/?ref=remix-page-blocks-community",
          },
          {
            text: "Join Discord",
            href: "https://discord.gg/KMkjU2BFn9",
          },
          {
            text: "Youtube channel",
            href: "https://www.youtube.com/channel/UCdXy3FPDHxP-b7NhPspt6cQ",
          },
        ],
      },
    },
    // Testimonials
    {
      testimonials: {
        style: defaultStyles.testimonials,
        headline: "Don't take our word for it.",
        subheadline: ``,
        items: [
          {
            role: "Developer",
            company: "SaasRock",
            companyUrl: "https://saasrock.com/?ref=remix-page-blocks-testimonials",
            logoLightMode: "https://saasrock.com/build/_assets/logo-light-STK7BWWF.png",
            logoDarkMode: "https://saasrock.com/build/_assets/logo-dark-DBF6MLNQ.png",
            name: "Alexandro Martínez",
            personalWebsite: "https://alexandro.dev/?ref=remix-page-blocks-testimonials",
            avatar: "https://avatars.githubusercontent.com/u/8606530?v=4",
            quote: "I love Remix Page Blocks cuz I built it 😛.",
          },
          {
            role: "CEO",
            company: "Piloterr",
            companyUrl: "https://www.piloterr.com/?ref=remix-page-blocks",
            logoLightMode: "https://yahooder.sirv.com/saasrock/testimonials/piloterr-light.png",
            logoDarkMode: "https://yahooder.sirv.com/saasrock/testimonials/piloterr-dark.png",
            name: "Josselin Liebe",
            personalWebsite: "https://josselinlie.be/?ref=remix-page-blocks",
            avatar: "https://avatars.githubusercontent.com/u/15314417?v=4",
            quote: "You've already solved 90% of my problems with your project :)",
          },
        ],
      },
    },
    // Features #1
    {
      features: {
        style: FeaturesBlockStyle.cards,
        topText: t("blocks.features1.topText"),
        headline: t("blocks.features1.headline"),
        subheadline: t("blocks.features1.subheadline"),
        columns: 3,
        items: [
          { name: t("blocks.features1.items.editor.name"), description: t("blocks.features1.items.editor.description") },
          { name: t("blocks.features1.items.landing.name"), description: t("blocks.features1.items.landing.description") },
          { name: t("blocks.features1.items.contact.name"), description: t("blocks.features1.items.contact.description") },
          { name: t("blocks.features1.items.newsletter.name"), description: t("blocks.features1.items.newsletter.description") },
          { name: t("blocks.features1.items.dark-mode.name"), description: t("blocks.features1.items.dark-mode.description") },
          { name: t("blocks.features1.items.multi-language.name"), description: t("blocks.features1.items.multi-language.description") },
          { name: t("blocks.features1.items.multi-theme.name"), description: t("blocks.features1.items.multi-theme.description") },
        ],
      },
    },
    // Features #2
    {
      features: {
        style: FeaturesBlockStyle.list,
        topText: t("blocks.features2.topText"),
        headline: t("blocks.features2.headline"),
        subheadline: t("blocks.features2.subheadline"),
        columns: 2,
        items: [
          {
            name: "Remix",
            description: "Focused on web standards and modern web app UX, you’re simply going to build better websites.",
            link: { text: t("shared.readDocs"), href: "https://remix.run/docs/en/v1" },
          },
          {
            name: "React",
            description: "A JavaScript library for building user interfaces.",
            link: { text: t("shared.readDocs"), href: "https://reactjs.org/docs/getting-started.html" },
          },
          {
            name: "Tailwind CSS",
            description: "Rapidly build modern websites without ever leaving your HTML. The best utility-first CSS framework.",
            link: { text: t("shared.readDocs"), href: "https://tailwindcss.com/docs/utility-first" },
          },
          {
            name: "TypeScript",
            description: "Typed superset of JavaScript for writing better code.",
            link: { text: t("shared.readDocs"), href: "https://www.typescriptlang.org" },
          },
        ],
      },
    },
    // Newsletter
    {
      newsletter: {
        style: defaultStyles.newsletter,
        headline: t("blocks.newsletter.headline"),
        subheadline: t("blocks.newsletter.subheadline"),
      },
    },
    // Faq
    {
      faq: {
        style: defaultStyles.faq,
        headline: t("blocks.faq.headline"),
        subheadline: t("blocks.faq.subheadline"),
        items: [
          {
            question: "Question 1?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Question 2?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Question 3?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Question 4?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Question 5?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            question: "Question 6 with link?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            link: {
              text: "Visit my other boilerplates",
              href: "https://alexandromg.gumroad.com/?ref=remix-page-blocks-faq",
              target: "_blank",
            },
          },
        ],
      },
    },
    // Footer
    {
      footer: defaultFooter({ t }),
    },
  ];
  return blocks;
}
