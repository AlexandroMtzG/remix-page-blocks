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

const types = ["banner", "header", "footer", "hero", "gallery", "logoClouds", "video", "community", "testimonials", "features", "newsletter", "faq"];

function getType(item: PageBlockDto) {
  if (item.banner) {
    return "banner";
  } else if (item.header) {
    return "header";
  } else if (item.footer) {
    return "footer";
  } else if (item.hero) {
    return "hero";
  } else if (item.gallery) {
    return "gallery";
  } else if (item.logoClouds) {
    return "logoClouds";
  } else if (item.video) {
    return "video";
  } else if (item.community) {
    return "community";
  } else if (item.testimonials) {
    return "testimonials";
  } else if (item.features) {
    return "features";
  } else if (item.newsletter) {
    return "newsletter";
  } else if (item.faq) {
    return "faq";
  }
  return "";
}

function getTypeTitle(type: string) {
  switch (type) {
    case "banner":
      return "Banner";
    case "header":
      return "Header";
    case "footer":
      return "Footer";
    case "hero":
      return "Hero";
    case "gallery":
      return "Gallery";
    case "logoClouds":
      return "Logo Clouds";
    case "video":
      return "Video";
    case "community":
      return "Community";
    case "testimonials":
      return "Testimonials";
    case "features":
      return "Features";
    case "newsletter":
      return "Newsletter";
    case "faq":
      return "FAQ";
    default:
      return "";
  }
}

function downloadBlocks(blocks: PageBlockDto[]) {
  try {
    return JSON.stringify(blocks, null, "\t");
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    return "{}";
  }
}

const defaultBlocks: PageBlockDto = {
  banner: {
    style: BannerBlockStyle.top,
    text: "Banner",
    cta: [
      { text: "CTA 1", href: "#" },
      {
        text: "CTA 2",
        href: "#",
      },
    ],
  },
  header: {
    style: HeaderBlockStyle.simple,
    withLogo: true,
    withSignInAndSignUp: false,
    withThemeSwitcher: true,
    withLanguageSwitcher: true,
    links: [
      { path: "/", title: "blocks.header.product" },
      { path: "/contact", title: "blocks.header.contact" },
      { path: "/newsletter", title: "blocks.header.newsletter" },
    ],
  },
  footer: {
    style: FooterBlockStyle.columns,
    text: "Footer text",
    sections: [
      {
        name: "Application",
        items: [
          { name: "Contact", href: "/contact" },
          { name: "Newsletter", href: "/newsletter" },
        ],
      },
      {
        name: "Product",
        items: [
          { name: "Terms and Conditions", href: "/terms-and-conditions" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ],
      },
    ],
    socials: {
      instagram: "saas_rock",
      twitter: "saas_rock",
      github: "AlexandroMtzG",
      discord: "invite/KMkjU2BFn9",
    },
  },
  hero: {
    style: HeroBlockStyle.simple,
    headline: "Hero Headline",
    subheadline: "Hero Subheadline",
    image: "https://via.placeholder.com/720x600?text=Your%20Hero%20Image",
    topText: {
      text: "Top text",
      link: { text: "Link", href: "#" },
    },
    cta: [
      { text: "Primary CTA", href: "#", isPrimary: true },
      { text: "Secondary CTA", href: "#", isPrimary: false },
    ],
    bottomText: {
      text: "Bottom text",
      link: { text: "Link", href: "#" },
    },
  },
  logoClouds: {
    style: LogoCloudsBlockStyle.simple,
    headline: "Logo Clouds Headline",
    logos: [
      {
        alt: "Tailwind CSS",
        href: "https://tailwindcss.com/ref=saasrock.com",
        src: "https://saasrock.com/build/_assets/tailwindcss-G3OQBAVI.png",
      },
      {
        alt: "Remix",
        href: "https://remix.run/ref=saasrock.com",
        src: "https://saasrock.com/build/_assets/remix-4ESNCVZ5.png",
        srcDark: "https://saasrock.com/build/_assets/remix-dark-U2ASPSOI.png",
      },
      {
        alt: "Prisma",
        href: "https://prisma.io/ref=saasrock.com",
        src: "https://saasrock.com/build/_assets/prisma-ATY77GXX.png",
        srcDark: "https://saasrock.com/build/_assets/prisma-dark-3FBYDJ4J.png",
      },
    ],
  },
  gallery: {
    style: GalleryBlockStyle.carousel,
    topText: "Top text",
    headline: "Gallery Headline",
    subheadline: "Gallery Subheadline",
    images: [
      {
        title: "Image 1",
        src: "https://via.placeholder.com/1000x600?text=Image%201",
      },
      {
        title: "Image 2",
        src: "https://via.placeholder.com/1000x600?text=Image%202",
      },
    ],
  },
  video: {
    style: VideoBlockStyle.simple,
    headline: "Video Headline",
    subheadline: "Video Subheadline",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  community: {
    style: CommunityBlockStyle.simple,
    headline: "Community Headline",
    subheadline: "Community Subheadline",
    type: "manual",
    members: [
      { user: "Michael Jackson", avatar_url: "https://avatars.githubusercontent.com/u/92839?v=4" },
      { user: "Alexandro Martinez", avatar_url: "https://avatars.githubusercontent.com/u/8606530?v=4" },
      { user: "Ryan Florence", avatar_url: "https://avatars.githubusercontent.com/u/100200?v=4" },
    ],
    cta: [
      {
        text: "Twitter",
        href: "https://twitter.com/saas_rock",
      },
      {
        text: "YouTube",
        href: "https://youtube.com/@saasrock",
      },
      {
        text: "Discord",
        href: "https://discord.gg/KMkjU2BFn9",
      },
    ],
  },
  testimonials: {
    style: TestimonialsBlockStyle.simple,
    headline: "Testimonials Headline",
    subheadline: "Testimonials Subheadline",
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
    ],
  },
  features: {
    style: FeaturesBlockStyle.list,
    headline: "Features Headline",
    subheadline: "Features Subheadline",
    topText: "Top text",
    columns: 3,
    items: [
      {
        name: "Remix",
        description: "Focused on web standards and modern web app UX.",
      },
      {
        name: "React & TypeScript",
        description: "A JavaScript library for building user interfaces.",
      },
      {
        name: "Tailwind CSS",
        description: "Rapidly build modern websites without ever leaving your HTML.",
      },
    ],
  },
  faq: {
    style: FaqBlockStyle.simple,
    items: [
      {
        question: "Question 1?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        question: "Question 2?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        question: "Question 3?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        question: "Question 4 with link?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: {
          text: "Visit my other boilerplates",
          href: "https://alexandromg.gumroad.com/?ref=remix-page-blocks-faq",
          target: "_blank",
        },
      },
    ],
  },
  newsletter: {
    style: NewsletterBlockStyle.rightForm,
    headline: "Newsletter Headline",
    subheadline: "Newsletter Subheadline",
    socials: {
      instagram: "saas_rock",
      twitter: "saas_rock",
      github: "AlexandroMtzG",
      discord: "invite/KMkjU2BFn9",
    },
  },
};

export default {
  getType,
  getTypeTitle,
  types,
  defaultBlocks,
  downloadBlocks,
};
