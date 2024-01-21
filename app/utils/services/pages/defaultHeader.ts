import { TFunction } from "i18next";
import { HeaderBlockDto, HeaderBlockStyle } from "~/application/dtos/marketing/HeaderBlockDto";

export function defaultHeader({ t }: { t: TFunction }): HeaderBlockDto {
  return {
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
  };
}
