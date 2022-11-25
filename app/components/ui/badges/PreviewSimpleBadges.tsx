import { Colors } from "~/application/enums/shared/Colors";
import SimpleBadge from "./SimpleBadge";

export default function PreviewBadges() {
  return (
    <div id="badges-simple">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div id="badges" className="w-full space-y-2">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
            <SimpleBadge title={"GRAY"} color={Colors.GRAY} />
            <SimpleBadge title={"RED"} color={Colors.RED} />
            <SimpleBadge title={"ORANGE"} color={Colors.ORANGE} />
            <SimpleBadge title={"YELLOW"} color={Colors.YELLOW} />
            <SimpleBadge title={"GREEN"} color={Colors.GREEN} />
            <SimpleBadge title={"BLUE"} color={Colors.BLUE} />
            <SimpleBadge title={"INDIGO"} color={Colors.INDIGO} />
            <SimpleBadge title={"PURPLE"} color={Colors.PURPLE} />
            <SimpleBadge title={"PINK"} color={Colors.PINK} />
            <SimpleBadge title={"ROSE"} color={Colors.ROSE} />
          </div>
        </div>
      </div>
    </div>
  );
}
