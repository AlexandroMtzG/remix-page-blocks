import { FeaturesBlockDto } from "~/application/dtos/marketing/FeaturesBlockDto";
import FeaturesCards from "././variants/features/FeaturesCards";
import FeaturesList from "./variants/features/FeaturesList";

export default function Features({ item }: { item: FeaturesBlockDto }) {
  return (
    <>
      {item.style === "list" && <FeaturesList item={item} />}
      {item.style === "cards" && <FeaturesCards item={item} />}
    </>
  );
}
