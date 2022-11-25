import { FeaturesBlockDto } from "~/application/dtos/marketing/FeaturesBlockDto";
import FeaturesGrid2x2 from "./variants/features/FeaturesGrid2x2";
import FeaturesList from "./variants/features/FeaturesList";

export default function Features({ item }: { item: FeaturesBlockDto }) {
  return (
    <>
      {item.style === "grid2x2" && <FeaturesGrid2x2 item={item} />}
      {item.style === "list" && <FeaturesList item={item} />}
    </>
  );
}
