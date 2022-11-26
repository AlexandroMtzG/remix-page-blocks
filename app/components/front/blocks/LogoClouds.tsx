import { LogoCloudsBlockDto } from "~/application/dtos/marketing/LogoCloudsBlockDto";
import LogoCloudsCustom from "./variants/gallery/LogoCloudsCustom";
import LogoCloudsSimple from "./variants/gallery/LogoCloudsSimple";
import LogoCloudsSimpleWithHeading from "./variants/gallery/LogoCloudsSimpleWithHeading";

export default function LogoClouds({ item }: { item: LogoCloudsBlockDto }) {
  return (
    <>
      {item.style === "custom" && <LogoCloudsCustom />}
      {item.style === "simple" && <LogoCloudsSimple items={item.logos ?? []} />}
      {item.style === "simpleWithHeadingOnBrand" && <LogoCloudsSimpleWithHeading headline={item.headline} items={item.logos ?? []} />}
    </>
  );
}
