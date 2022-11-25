import clsx from "clsx";
import { Colors } from "~/application/enums/shared/Colors";
import { getBadgeColor } from "~/utils/shared/ColorUtils";

interface Props {
  color: Colors;
}

export default function ColorBadge({ color }: Props) {
  return (
    <span className={clsx(" inline-flex flex-shrink-0 items-center rounded-full p-1 text-xs font-medium", getBadgeColor(color))}>
      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx={4} cy={4} r={3} />
      </svg>
    </span>
  );
}
