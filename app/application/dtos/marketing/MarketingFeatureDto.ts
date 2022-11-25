export enum MarketingFeatureStatus {
  UnderReview,
  Planned,
  InProgress,
  Done,
}
export enum MarketingFeatureType {
  Core,
  Enterprise,
}
export interface MarketingFeatureDto {
  name: string;
  description: string;
  status?: MarketingFeatureStatus;
  type?: MarketingFeatureType;
  link?: string;
  save?: number;
  platforms?: {
    site?: string;
    price?: string;
  }[];
}
