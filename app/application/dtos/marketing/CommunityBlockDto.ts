export interface CommunityBlockDto {
  style: CommunityBlockStyle | string;
  headline: string;
  subheadline: string;
  cta: { text: string; href: string }[];
  type: "manual" | "github";
  members?: { user: string; avatar_url: string }[];
}

export enum CommunityBlockStyle {
  simple = "simple",
}
