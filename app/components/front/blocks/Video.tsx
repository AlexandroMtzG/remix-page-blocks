import { VideoBlockDto } from "~/application/dtos/marketing/VideoBlockDto";
import VideoSimple from "./variants/video/VideoSimple";

export default function Video({ item }: { item: VideoBlockDto }) {
  return <>{item.style === "simple" && <VideoSimple item={item} />}</>;
}
