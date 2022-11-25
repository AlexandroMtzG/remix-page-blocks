import { TFunction } from "react-i18next";
import { HeaderBlockDto, HeaderBlockStyle } from "~/application/dtos/marketing/HeaderBlockDto";

export function defaultHeader({ t }: { t: TFunction }): HeaderBlockDto {
  return {
    style: HeaderBlockStyle.simple,
    withLogo: true,
    withSignInAndSignUp: false,
    withThemeSwitcher: true,
    withLanguageSwitcher: true,
    links: [
      { path: "/", title: t("blocks.header.product") },
      { path: "/contact", title: t("blocks.header.contact") },
      { path: "/newsletter", title: t("blocks.header.newsletter") },
      {
        title: t("blocks.header.more"),
        items: [
          { title: "SaasRock", path: "https://saasrock.com/?ref=remix-page-blocks-header", target: "_blank" },
          { title: "RemixBlocks (open source)", path: "https://remixblocks.com/?ref=remix-page-blocks", target: "_blank" },
          { title: "SaasFrontends (open source)", path: "https://saasfrontends.com/?ref=remix-page-blocks", target: "_blank" },
        ],
      },
    ],
  };
}
