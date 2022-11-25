import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { FormEvent, Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, useSearchParams } from "@remix-run/react";
import { Colors } from "~/application/enums/shared/Colors";
import { useOuterClick } from "~/utils/shared/KeypressUtils";
import { updateItemByIdx } from "~/utils/shared/ObjectUtils";
import FilterEmptyIcon from "../icons/FilterEmptyIcon";
import FilterFilledIcon from "../icons/FilterFilledIcon";
import InputCheckboxInline from "./InputCheckboxInline";
import InputSearch from "./InputSearch";
import InputSelector from "./InputSelector";

export type FilterDto = {
  name: string;
  title: string;
  options?: { name: string; value: string; color?: Colors }[];
  hideSearch?: boolean;
};

export type FilterValueDto = FilterDto & {
  selected: boolean;
  value?: string;
};

interface Props {
  filters: FilterDto[];
  withSearch?: boolean;
  withName?: boolean;
  // saveEntityFilters?: {
  //   entity: EntityWithDetails;
  //   currentView: EntityView | null;
  //   onSaveFilters: (filters: FilterValueDto[]) => void;
  // };
}

export default function InputFilters({ filters, withSearch = true }: Props) {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FilterValueDto[]>([]);
  const [filteredItems, setFilteredItems] = useState<number>(0);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const items: FilterValueDto[] = filters.map((item) => {
      const value = searchParams.get(item.name) ?? undefined;
      return {
        ...item,
        selected: value !== undefined,
        value,
      };
    });
    setItems(items);
    setSearchInput(searchParams.get("q") ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    const appliedFilters: FilterValueDto[] = [];
    items.forEach((item) => {
      const value = searchParams.get(item.name) ?? undefined;
      if (value) {
        appliedFilters.push(item);
      }
    });
    setFilteredItems(appliedFilters.length + (searchParams.get("q") ? 1 : 0));
  }, [items, searchInput, searchParams]);

  // useEffect(() => {
  //     const searchInput = searchParams.get("q");
  //     setSearchInput(searchInput ?? "");

  //     const newItems = items;
  //     items.forEach((item, idx) => {
  //       const valueInParam = searchParams.get(item.name);
  //       if (valueInParam) {
  //         newItems[idx].selected = true;
  //         newItems[idx].value = valueInParam.toString();
  //       } else {
  //         newItems[idx].selected = false;
  //         newItems[idx].value = undefined;
  //       }
  //     });
  //     setItems(newItems);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchParams]);

  function onClear() {
    setOpened(false);

    items.forEach((item) => {
      searchParams.delete(item.name);
      item.selected = false;
      item.value = undefined;
    });
    setItems(items);

    searchParams.delete("page");
    searchParams.delete("q");
    setSearchInput("");

    setSearchParams(searchParams);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    items.forEach((item) => {
      if (item.selected && item.value) {
        searchParams.set(item.name, item.value?.toString() ?? "");
      } else {
        searchParams.delete(item.name);
      }
    });
    if (searchInput) {
      searchParams.set("q", searchInput);
    } else {
      searchParams.delete("q");
    }
    searchParams.delete("page");
    setSearchParams(searchParams);
    setOpened(false);
  }

  const clickOutside = useOuterClick(() => setOpened(false));

  return (
    <Fragment>
      <div ref={clickOutside} className="relative">
        <button
          onClick={() => setOpened(!opened)}
          className="relative z-0 inline-flex rounded-md text-sm shadow-sm hover:bg-gray-50 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
        >
          <span
            className={clsx(
              "relative inline-flex items-center space-x-2 border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-600 sm:py-2",
              filteredItems === 0 ? "rounded-md" : "rounded-l-md"
            )}
          >
            <div>
              {filteredItems === 0 && <FilterEmptyIcon className="h-3 w-3" />}
              {filteredItems > 0 && <FilterFilledIcon className="h-3 w-3" />}
            </div>
            <div className="hidden sm:block">{t("shared.filters")}</div>
          </span>
          {filteredItems > 0 && (
            <span
              className={clsx(
                "relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 px-3 py-2 font-medium sm:text-sm",
                filteredItems > 0 ? "bg-theme-50 text-theme-500" : "bg-white text-gray-700"
              )}
            >
              {filteredItems}
            </span>
          )}
        </button>

        <Transition
          as={Fragment}
          show={opened}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Form
            onSubmit={onSubmit}
            method="get"
            className="absolute right-0 z-40 mt-2 w-64 origin-top-right divide-y divide-gray-200 overflow-visible rounded-md bg-gray-50 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="flex items-center justify-between px-2 py-2 text-sm">
              <button
                type="button"
                onClick={onClear}
                className="rounded-md border border-gray-300 bg-white px-2 py-0.5 hover:bg-gray-50 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              >
                {t("shared.clear")}
              </button>
              <div className="font-bold">{t("shared.filters")}</div>
              <button
                type="submit"
                className="rounded-md border border-gray-300 bg-accent-800 px-2 py-0.5 text-white hover:bg-accent-900 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
              >
                {t("shared.apply")}
              </button>
            </div>
            <div className="divide-y divide-gray-200 rounded-b-md bg-white text-sm">
              {withSearch && (
                <div className="p-2">
                  <InputSearch value={searchInput} setValue={setSearchInput} placeholder={"Search all..."} />
                </div>
              )}
              {items.map((filter, idx) => {
                return (
                  <div key={filter.name} className="divide-y divide-gray-200">
                    <div className="divide-y divide-gray-300 px-2 py-2">
                      <InputCheckboxInline
                        name={"filter-" + filter.name}
                        title={t(filter.title)}
                        value={filter.selected}
                        setValue={(e) => {
                          updateItemByIdx(items, setItems, idx, {
                            selected: Boolean(e),
                          });
                        }}
                      />
                    </div>
                    {filter.selected && (
                      <div className="bg-gray-50 px-2 py-1">
                        {filter.options && filter.options.length > 0 ? (
                          <div className="flex items-center space-x-2">
                            <InputSelector
                              withSearch={!filter.hideSearch}
                              name={filter.name}
                              title={""}
                              options={filter.options.map((item) => {
                                return {
                                  value: item.value,
                                  name: item.name ? t(item.name) : item.value,
                                  color: item.color,
                                };
                              })}
                              value={filter.value}
                              withLabel={false}
                              setValue={(e) => {
                                updateItemByIdx(items, setItems, idx, {
                                  value: e,
                                });
                              }}
                              className="w-full pb-1"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <div className="flex-shrink-0 truncate text-gray-500">contains</div>
                            <input
                              type="text"
                              name={filter.name}
                              autoComplete="off"
                              className="block w-full min-w-0 flex-1 rounded-md border-gray-300 p-1 text-sm focus:border-accent-500 focus:ring-accent-500"
                              required
                              value={filter.value ?? ""}
                              onChange={(e) => {
                                updateItemByIdx(items, setItems, idx, {
                                  value: e.currentTarget.value,
                                });
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              {/* {saveEntityFilters && (
                <div className="divide-y divide-gray-200">
                  <div className="flex justify-end space-x-2 px-2 py-2">
                    <button
                      type="button"
                      onClick={() => {
                        saveEntityFilters?.onSaveFilters(items.filter((f) => f.value));
                        setOpened(false);
                      }}
                      className={clsx(
                        "rounded-md border border-gray-300  px-2 py-0.5",
                        false
                          ? " bg-gray-100 text-gray-400"
                          : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 focus:z-10 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
                      )}
                    >
                      {saveEntityFilters.currentView ? <div>{t("shared.updateView")}</div> : <div>{t("shared.createView")}</div>}
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          </Form>
        </Transition>
      </div>
    </Fragment>
  );
}
