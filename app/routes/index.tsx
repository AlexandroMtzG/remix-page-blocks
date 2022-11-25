import { i18nHelper } from "~/locale/i18n.utils";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Language } from "remix-i18next";
import { useState } from "react";
import { getSeoMetaTags } from "~/utils/services/seoService";
import { MetaTagsDto } from "~/application/dtos/seo/MetaTagsDto";
import PageBlocks from "~/components/front/blocks/PageBlocks";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { getPageConfiguration, PageConfiguration } from "~/utils/services/pages/pagesService";
import { getUserInfo, UserSession } from "~/utils/session.server";
import PageBlockEditMode from "~/components/front/blocks/PageBlockEditMode";

type LoaderData = {
  i18n: Record<string, Language>;
  userSession: UserSession;
  metaTags: MetaTagsDto;
  page: PageConfiguration;
};

export let loader: LoaderFunction = async ({ request }) => {
  const { t, translations } = await i18nHelper(request);
  try {
    const page = await getPageConfiguration({ request, t });
    const userSession = await getUserInfo(request);
    const data: LoaderData = {
      i18n: translations,
      userSession,
      metaTags: await getSeoMetaTags(request),
      page,
    };
    return json(data);
  } catch (e) {
    return json({
      i18n: translations,
    });
  }
};

export const meta: MetaFunction = ({ data }) => ({
  ...data?.metaTags,
});

export default function IndexRoute() {
  const data = useLoaderData<LoaderData>();
  const [blocks, setBlocks] = useState<PageBlockDto[]>(data.page.blocks);
  const [searchParams] = useSearchParams();

  function isEditMode() {
    return searchParams.get("editMode") !== "false";
  }

  return (
    <div>
      <PageBlockEditMode items={blocks} />
      <PageBlocks items={blocks} editMode={isEditMode()} onChange={(e) => setBlocks(e)} />
    </div>
  );
}
