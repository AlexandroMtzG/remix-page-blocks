import { getUserInfo } from "~/utils/session.server";
import { remixI18Next } from "./v2/i18next.server";

export async function i18nHelper(request: Request) {
  const userInfo = await getUserInfo(request);
  const lng = userInfo.lng;
  const t = await remixI18Next.getFixedT(lng ?? request, "translations");
  let translations: any = {};
  return { t, translations };
}
