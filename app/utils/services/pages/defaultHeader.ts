import { TFunction } from "i18next";
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
          { title: "Remix Workflows (open source)", path: "https://github.com/AlexandroMtzG/remix-workflows", target: "_blank" },
          { title: "SaasRock Knowledge Base (open source)", path: "https://github.com/AlexandroMtzG/saasrock-kb", target: "_blank" },
          { title: "Remix Blocks (open source)", path: "https://remixblocks.com/?ref=remix-page-blocks", target: "_blank" },
          { title: "SaasFrontends (open source)", path: "https://saasfrontends.com/?ref=remix-page-blocks", target: "_blank" },
          { title: "NetcoreSaas (open source)", path: "https://netcoresaas.com/?ref=remix-page-blocks", target: "_blank" },
          { title: "Gumcrm (built with SaasRock)", path: "https://gumcrm.io/?ref=remix-page-blocks", target: "_blank" },
          { title: "My Gumroad", path: "https://alexandromg.gumroad.com/?ref=remix-page-blocks", target: "_blank" },
          { title: "My Blog", path: "https://alexandro.dev/?ref=remix-page-blocks", target: "_blank" },
          { title: "My YouTube channel", path: "https://youtube.com/@saasrock", target: "_blank" },
        ],
      },
    ],
  };
}
