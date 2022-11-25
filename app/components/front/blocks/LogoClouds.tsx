import { LogoCloudsBlockDto } from "~/application/dtos/marketing/LogoCloudsBlockDto";
import LogoCloudsCustom from "~/components/ui/images/LogoCloudsCustom";
import LogoCloudsSimple from "~/components/ui/images/LogoCloudsSimple";
import LogoCloudsSimpleWithHeading from "~/components/ui/images/LogoCloudsSimpleWithHeading";

export default function LogoClouds({ item }: { item: LogoCloudsBlockDto }) {
  return (
    <>
      {item.style === "custom" && <LogoCloudsCustom />}
      {item.style === "simple" && <LogoCloudsSimple items={item.logos ?? []} />}
      {item.style === "simpleWithHeadingOnBrand" && <LogoCloudsSimpleWithHeading headline={item.headline} items={item.logos ?? []} />}
    </>
  );
}
