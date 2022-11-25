import { getUserInfo } from "~/utils/session.server";
import { i18n } from "./i18n.server";

export async function i18nHelper(request: Request) {
  const userInfo = await getUserInfo(request);
  const lng = userInfo.lng;
  const t = await i18n.getFixedT(lng ?? request, "translations");
  const translations = await i18n.getTranslations(lng ?? request, ["translations"]);
  return { t, translations };
}
