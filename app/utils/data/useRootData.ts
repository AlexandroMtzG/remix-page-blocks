import { json } from "@remix-run/node";
import { useMatches } from "@remix-run/react";
import { MetaTagsDto } from "~/application/dtos/seo/MetaTagsDto";
import { getUserInfo, UserSession } from "../session.server";
import { remixI18Next } from "~/locale/v2/i18next.server";

export type AppRootData = {
  metatags: MetaTagsDto;
  userSession: UserSession;
  debug: boolean;
  locale: string;
};

export function useRootData(): AppRootData {
  return (useMatches().find((f) => f.pathname === "/" || f.pathname === "")?.data ?? {}) as AppRootData;
}

export async function loadRootData(request: Request) {
  const userInfo = await getUserInfo(request);

  const locale = await remixI18Next.getLocale(request);
  const data: AppRootData = {
    metatags: [{ title: `${process.env.APP_NAME}` }],
    userSession: userInfo,
    debug: process.env.NODE_ENV === "development",
    locale,
  };

  return json(data);
}
