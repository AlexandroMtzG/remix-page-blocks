import { MetaTagsDto } from "~/application/dtos/seo/MetaTagsDto";

export async function getSeoMetaTags(request?: Request): Promise<MetaTagsDto> {
  const pathname = request ? new URL(request.url).pathname : "";
  return getSeoMetaTagsFromPathname(pathname);
}

async function getSeoMetaTagsFromPathname(pathname: string) {
  const title = "Remix Page Blocks";
  const description = "A collection of functional Remix and Tailwind CSS page blocks.";
  const keywords = "remix,saas,tailwindcss,react,typescript,boilerplate,saas-kit,saas-boilerplate";
  const image = "https://yahooder.sirv.com/remixblocks/page-blocks/cover.png";
  const twitterImage = "https://yahooder.sirv.com/remixblocks/page-blocks/thumbnail.png";
  const twitterCreator = "@AlexandroMtzG";
  const twitterSite = "@saas_rock";

  const metaTags: MetaTagsDto = {
    charset: "utf-8",
    title,
    description,
    keywords,
    "og:title": title,
    "og:type": "website",
    "og:url": pathname,
    "og:image": image,
    "og:card": "summary_large_image",
    "og:creator": twitterCreator,
    // "og:site": request ? new URL(request.url).host : "",
    "og:description": description,
    "twitter:image": twitterImage,
    "twitter:card": "summary_large_image",
    "twitter:creator": twitterCreator,
    "twitter:site": twitterSite,
    "twitter:title": title,
    "twitter:description": description,
  };

  return metaTags;
}
