import { TFunction } from "react-i18next";
import { FooterBlockDto, FooterBlockStyle } from "~/application/dtos/marketing/FooterBlockDto";

export function defaultFooter({ t }: { t: TFunction }): FooterBlockDto {
  return {
    style: FooterBlockStyle.columns,
    text: t("blocks.footer.text"),
    sections: [
      {
        name: t("blocks.footer.application.title"),
        items: [
          { name: t("blocks.footer.application.home"), href: "/" },
          { name: t("blocks.footer.application.contact"), href: "/contact" },
          { name: t("blocks.footer.application.newsletter"), href: "/newsletter" },
        ],
      },
      {
        name: t("blocks.footer.legal.title"),
        items: [
          { name: t("blocks.footer.legal.privacy"), href: "/privacy-policy" },
          { name: t("blocks.footer.legal.terms"), href: "/terms-and-conditions" },
          { name: t("blocks.footer.legal.components"), href: "/components" },
        ],
      },
    ],
    socials: {
      instagram: "saas_rock",
      twitter: "saas_rock",
      github: "AlexandroMtzG",
      discord: "invite/KMkjU2BFn9",
    },
  };
}
