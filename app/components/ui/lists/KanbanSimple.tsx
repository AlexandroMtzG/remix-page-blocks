import clsx from "clsx";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";
import { Colors } from "~/application/enums/shared/Colors";
import ColorBadge from "../badges/ColorBadge";
import PlusIcon from "../icons/PlusIcon";

export type KanbanColumn<T> = {
  name: string;
  title: string | ReactNode;
  color?: Colors;
  value: (item: T) => any;
  onClick?: (item: T) => void;
  onClickRoute?: (item: T) => string;
  onNewRoute?: (columnValue: string) => string;
};

interface Props<T> {
  columns: KanbanColumn<T>[];
  column: string;
  items: T[];
  filterValue: (item: T, column: KanbanColumn<T> | null) => boolean;
  undefinedColumn?: KanbanColumn<T>;
  className?: string;
}

export default function KanbanSimple<T>({ columns, items, column, filterValue, undefinedColumn, className }: Props<T>) {
  function getItems(column: KanbanColumn<T> | null) {
    return items.filter((f: T) => filterValue(f, column));
  }
  return (
    <div className={clsx(className, "flex overflow-hidden overflow-x-auto")}>
      {undefinedColumn && getItems(null).length > 0 && (
        <KanbanColumnCard idx={0} key={column.length} items={getItems(null)} columns={columns} column={undefinedColumn} />
      )}

      {columns.map((column, idx) => {
        return <KanbanColumnCard idx={idx + 1} key={idx + 1} items={getItems(column)} columns={columns} column={column} />;
      })}
    </div>
  );
}

interface KanbanColumnCardProps<T> {
  idx: number;
  columns: KanbanColumn<T>[];
  column: KanbanColumn<T>;
  items: T[];
}
function KanbanColumnCard<T>({ idx, columns, column, items }: KanbanColumnCardProps<T>) {
  const { t } = useTranslation();
  return (
    <div
      className={clsx(
        "shrink-0 space-y-2 divide-y divide-gray-300 text-sm",
        columns.length === 1 && "w-64 lg:w-full",
        columns.length === 2 && "w-64 lg:w-1/2",
        columns.length === 3 && "w-64 lg:w-1/3",
        columns.length === 4 && "w-64 lg:w-1/4",
        columns.length === 5 && "w-64 lg:w-1/5",
        columns.length > 5 && "w-64"
      )}
    >
      <div className="flex justify-between space-x-2">
        <div className="flex items-center space-x-2">
          {column?.color !== undefined && (
            <div>
              <ColorBadge color={column.color} />
            </div>
          )}
          <div>{column?.title ?? t("shared.undefined")}</div>
        </div>
        {/* {column.onNew && (
                <button type="button" onClick={() => column.onNew && column.onNew()}>
                  <PlusIcon className="h-3 w-3" />
                </button>
              )} */}
      </div>

      <div
        className={clsx(
          "group h-full overflow-x-hidden border-0 border-dashed border-gray-200 bg-gray-50 py-3 px-2",
          idx === 0 && "border-r-0",
          idx === columns.length && "border-l-0"
        )}
      >
        <div className="space-y-3">
          {/* {getItems(column.name).length === 0 && (
                  <div className="p-2 flex justify-center">
                    <div className="text-gray-500">{t("shared.noRecords")}</div>
                  </div>
                )} */}
          {items.map((item, idx) => {
            return (
              <div key={idx} className="group w-full truncate rounded-md border border-gray-300 bg-white p-3 text-left shadow-sm hover:bg-gray-50">
                {column?.onClickRoute ? (
                  <Link to={column.onClickRoute(item)}>{column.value(item)}</Link>
                ) : (
                  <button type="button" onClick={() => column?.onClick && column?.onClick(item)}>
                    {column.value(item)}
                  </button>
                )}
              </div>
            );
          })}

          {column?.onNewRoute && (
            <Link
              className="flex w-full items-center justify-center space-x-2 rounded-md border border-gray-300 p-2 text-center text-xs font-medium text-gray-500 hover:bg-white hover:text-gray-700"
              to={column.onNewRoute(column.name)}
            >
              <div>Add</div>
              <PlusIcon className="h-3 w-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
