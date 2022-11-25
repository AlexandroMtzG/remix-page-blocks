import { TFunction } from "react-i18next";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import { getGitHubSocialProof } from "~/utils/integrations/githubService";
import { i18nHelper } from "~/locale/i18n.utils";
import { defaultLandingPage } from "./defaultLandingPage";

export type PageConfiguration = {
  slug: string;
  blocks: PageBlockDto[];
};

export async function getPageConfiguration({ request, t, slug }: { request: Request; t?: TFunction; slug?: string }): Promise<PageConfiguration> {
  if (!t) {
    t = (await i18nHelper(request)).t;
  }
  if (!slug) {
    slug = new URL(request.url).pathname;
  }

  return {
    slug,
    blocks: await parsePageBlocks({ t, slug }),
  };
}

export async function parsePageBlocks({ t, slug }: { t: TFunction; slug: string }): Promise<PageBlockDto[]> {
  let blocks: PageBlockDto[] = [];
  if (slug === "/") {
    blocks = defaultLandingPage({ t });
  }
  await Promise.all(
    blocks.map(async (block) => {
      if (block.community?.type === "github") {
        block.community.members = await getGitHubSocialProof();
      }
    })
  );
  return blocks;
}
