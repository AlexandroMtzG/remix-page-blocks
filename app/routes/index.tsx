import { i18nHelper } from "~/locale/i18n.utils";
import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
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
  userSession: UserSession;
  metatags: MetaTagsDto;
  page: PageConfiguration;
};

export const loader: LoaderFunction = async ({ request }) => {
  const { t } = await i18nHelper(request);
  const page = await getPageConfiguration({ request, t });
  const userSession = await getUserInfo(request);
  const data: LoaderData = {
    userSession,
    metatags: await getSeoMetaTags(request),
    page,
  };
  return json(data);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => data?.metatags ?? [];

export default function IndexRoute() {
  const data = useLoaderData<LoaderData>();
  const [blocks, setBlocks] = useState<PageBlockDto[]>(data.page.blocks);
  const [searchParams] = useSearchParams();

  function isEditMode() {
    return searchParams.get("editMode") === "true";
  }

  return (
    <div>
      <PageBlockEditMode items={blocks} onSetBlocks={(e) => setBlocks(e)} />
      <PageBlocks items={blocks} editMode={isEditMode()} onChange={(e) => setBlocks(e)} />
    </div>
  );
}
