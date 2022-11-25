import { CommunityBlockDto } from "~/application/dtos/marketing/CommunityBlockDto";
import CommunitySimple from "./variants/community/CommunitySimple";

export default function Community({ item }: { item: CommunityBlockDto }) {
  return <>{item.style === "simple" && <CommunitySimple item={item} />}</>;
}
