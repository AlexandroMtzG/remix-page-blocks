import { Octokit } from "octokit";

export async function getGitHubSocialProof(): Promise<{ user: string; avatar_url: string }[]> {
  const collaborators = await getGitHubRepositoryCollaborators();
  const hideMembers = process.env.GITHUB_HIDE_USERS?.toString().split(",") ?? [];
  return (
    collaborators
      ?.filter((f) => !hideMembers.includes(f.login))
      .map((f) => {
        return {
          user: f.login,
          avatar_url: f.avatar_url,
        };
      }) ?? []
  );
}

export async function getGitHubRepositoryCollaborators() {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    await octokit.rest.users.getAuthenticated();
    const { data } = await octokit.rest.repos.listCollaborators({
      owner: "AlexandroMtzG",
      repo: "saasrock",
    });
    return data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("GITHUB ERROR", e);
  }
}
