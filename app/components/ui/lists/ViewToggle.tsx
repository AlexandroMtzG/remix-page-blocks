import clsx from "clsx";
import TableIcon from "../icons/TableIcon";
import ViewBoardsIcon from "../icons/ViewBoardsIcon";

interface Props {
  view: "table" | "board";
  setView: (value: "table" | "board") => void;
}
export default function ViewToggle({ view, setView }: Props) {
  return (
    <span className="relative z-0 inline-flex rounded-md shadow-sm">
      <button
        onClick={() => setView("table")}
        type="button"
        className={clsx(
          "relative inline-flex items-center rounded-l-md border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
          view === "table" ? "bg-accent-100 text-accent-500" : "bg-white text-gray-600"
        )}
      >
        <TableIcon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setView("board")}
        type="button"
        className={clsx(
          "relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500",
          view === "board" ? "bg-accent-100 text-accent-500" : "bg-white text-gray-600"
        )}
      >
        <ViewBoardsIcon className="h-4 w-4" />
      </button>
    </span>
  );
}
