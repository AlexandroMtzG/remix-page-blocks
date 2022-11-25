import { json } from "@remix-run/node";
import { useMatches } from "@remix-run/react";
import { MetaTagsDto } from "~/application/dtos/seo/MetaTagsDto";
import { getSeoMetaTags } from "../services/seoService";
import { getUserInfo, UserSession } from "../session.server";

export type AppRootData = {
  title: string;
  metaTags: MetaTagsDto;
  userSession: UserSession;
  debug: boolean;
};

export function useRootData(): AppRootData {
  return (useMatches().find((f) => f.pathname === "/" || f.pathname === "")?.data ?? {}) as AppRootData;
}

export async function loadRootData(request: Request) {
  const userInfo = await getUserInfo(request);

  const data: AppRootData = {
    title: `${process.env.APP_NAME}`,
    userSession: userInfo,
    debug: process.env.NODE_ENV === "development",
    metaTags: await getSeoMetaTags(),
  };

  return json(data);
}
