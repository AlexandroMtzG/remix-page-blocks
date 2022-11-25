import { Colors } from "~/application/enums/shared/Colors";
import ColorBadge from "./ColorBadge";

export default function PreviewBadges() {
  return (
    <div id="badges">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div id="badges" className="w-full space-y-2">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:justify-center sm:space-y-0 sm:space-x-4">
            <ColorBadge color={Colors.UNDEFINED} />
            <ColorBadge color={Colors.SLATE} />
            <ColorBadge color={Colors.GRAY} />
            <ColorBadge color={Colors.NEUTRAL} />
            <ColorBadge color={Colors.STONE} />
            <ColorBadge color={Colors.RED} />
            <ColorBadge color={Colors.ORANGE} />
            <ColorBadge color={Colors.AMBER} />
            <ColorBadge color={Colors.YELLOW} />
            <ColorBadge color={Colors.LIME} />
            <ColorBadge color={Colors.GREEN} />
            <ColorBadge color={Colors.EMERALD} />
            <ColorBadge color={Colors.TEAL} />
            <ColorBadge color={Colors.CYAN} />
            <ColorBadge color={Colors.SKY} />
            <ColorBadge color={Colors.BLUE} />
            <ColorBadge color={Colors.INDIGO} />
            <ColorBadge color={Colors.VIOLET} />
            <ColorBadge color={Colors.PURPLE} />
            <ColorBadge color={Colors.FUCHSIA} />
            <ColorBadge color={Colors.PINK} />
            <ColorBadge color={Colors.ROSE} />
          </div>
        </div>
      </div>
    </div>
  );
}
