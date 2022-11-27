import { Fragment, useEffect, useState } from "react";
import { PageBlockDto } from "~/application/dtos/marketing/PageBlockDto";
import Hero from "./Hero";
import LogoClouds from "./LogoClouds";
import Video from "./Video";
import Community from "./Community";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Newsletter from "./Newsletter";
import clsx from "clsx";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";
import SlideOverWideEmpty from "../../ui/SlideOverWideEmpty";
import PageBlockForm from "../../pages/blocks/PageBlockForm";
import Banner from "./Banner";
import Header from "../Header";
import Footer from "../Footer";
import UpArrow from "../../icons/UpArrow";
import DownArrow from "../../icons/DownArrow";
import Modal from "../../ui/Modal";
import Gallery from "./Gallery";
import Faq from "./Faq";
import PencilIcon from "~/components/icons/PencilIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import TrashEmptyIcon from "~/components/icons/TrashEmptyIcon";
import { useTranslation } from "react-i18next";
import ButtonTertiary from "~/components/ui/ButtonTertiary";

export default function PageBlocks({ items, editMode, onChange }: { items: PageBlockDto[]; editMode?: boolean; onChange?: (items: PageBlockDto[]) => void }) {
  const { t } = useTranslation();
  const [blocks, setBlocks] = useState(items);
  const [editingBlockIndex, setEditingBlockIndex] = useState(-1);
  const [editingBlock, setEditingBlock] = useState<PageBlockDto>();
  const [editinBlockType, setEditingBlockType] = useState<string>("");
  const [slideOverOpen, setSlideOverOpen] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(blocks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);

  function onRemove(block: PageBlockDto) {
    setBlocks((prev) => prev.filter((i) => i !== block));
  }
  function onEdit(block: PageBlockDto, index: number) {
    setEditingBlock(block);
    setEditingBlockType(PageBlockUtils.getType(block));
    setSlideOverOpen(true);
    setEditingBlockIndex(index);
  }
  function onMoveUp(block: PageBlockDto) {
    const index = blocks.indexOf(block);
    if (index > 0) {
      const newBlocks = [...blocks];
      newBlocks[index] = newBlocks[index - 1];
      newBlocks[index - 1] = block;
      setBlocks(newBlocks);
    }
  }
  function onMoveDown(block: PageBlockDto) {
    const index = blocks.indexOf(block);
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      newBlocks[index] = newBlocks[index + 1];
      newBlocks[index + 1] = block;
      setBlocks(newBlocks);
    }
  }
  function onUpdateEditingBlock(newState: PageBlockDto) {
    setBlocks((prev) => {
      const newBlocks = [...prev];
      newBlocks[editingBlockIndex] = newState;
      return newBlocks;
    });
  }
  function addBlock(type: string, index?: number) {
    if (!PageBlockUtils.defaultBlocks.hasOwnProperty(type)) {
      alert("[UNDER CONSTRUCTION 🚧] Block form: " + type);
      return;
    }
    // @ts-ignore
    const newBlock = { [type]: PageBlockUtils.defaultBlocks[type] };
    if (index === undefined) {
      setBlocks((prev) => [...prev, newBlock]);
    } else {
      setBlocks((prev) => {
        const newBlocks = [...prev];
        newBlocks.splice(index, 0, newBlock);
        return newBlocks;
      });
    }
  }

  function onClose() {
    setSlideOverOpen(false);
    setEditingBlockIndex(-1);
    setEditingBlock(undefined);
    setEditingBlockType("");
  }

  function detectMob() {
    try {
      const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    } catch (e) {
      // ignore
      return false;
    }
  }

  return (
    <Fragment>
      <div className={clsx("relative overflow-hidden bg-white text-gray-800 dark:bg-gray-900 dark:text-slate-200", editMode && "")}>
        {/* {editMode && items.length > 0 && <AddBlockButton className={"py-8"} onAdd={(type) => addBlock(type, 0)} />} */}

        {items.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <div className={clsx("group relative", item.header && "z-10")}>
                {/* {editMode && idx === 0 && <AddBlockButton onAdd={(type) => addBlock(type, 0)} />} */}

                {editMode && (
                  <div
                    className={clsx(
                      "sticky top-0 z-10 w-full border-2 border-dashed border-theme-500 bg-theme-50 p-2 py-2 px-2 opacity-90 shadow-inner",
                      item.banner ? "flex" : "hidden group-hover:flex"
                    )}
                  >
                    <div className="mx-auto flex w-full max-w-md items-center justify-between">
                      <div className="text-lg font-extrabold text-gray-900">{PageBlockUtils.getTypeTitle(PageBlockUtils.getType(item))}</div>
                      <div className="flex items-center space-x-1">
                        <ButtonTertiary destructive onClick={() => onRemove(item)}>
                          <TrashEmptyIcon className="h-4 w-4" />
                        </ButtonTertiary>
                        <ButtonTertiary onClick={() => onEdit(item, idx)}>
                          <PencilIcon className="h-4 w-4" />
                        </ButtonTertiary>
                        <ButtonTertiary onClick={() => onMoveUp(item)}>
                          <UpArrow className="h-4 w-4" />
                        </ButtonTertiary>
                        <ButtonTertiary onClick={() => onMoveDown(item)}>
                          <DownArrow className="h-4 w-4" />
                        </ButtonTertiary>
                      </div>
                    </div>
                  </div>
                )}

                {editMode && (
                  <AddBlockButton className={clsx("absolute top-0 z-10 -mt-4 hidden w-full group-hover:block")} onAdd={(type) => addBlock(type, idx)} />
                )}
                <div
                  className={clsx(
                    editMode && "relative rounded-md rounded-t-none border-2 border-t-0 border-b-0 border-dashed border-transparent group-hover:border-gray-800"
                  )}
                >
                  {item.banner && <Banner item={item.banner} />}
                  {item.header && <Header item={item.header} />}
                  {item.footer && <Footer item={item.footer} />}
                  {item.hero && <Hero item={item.hero} />}
                  {item.gallery && <Gallery item={item.gallery} />}
                  {item.logoClouds && <LogoClouds item={item.logoClouds} />}
                  {item.video && <Video item={item.video} />}
                  {item.community && <Community item={item.community} />}
                  {item.testimonials && <Testimonials item={item.testimonials} />}
                  {item.features && <Features item={item.features} />}
                  {item.newsletter && <Newsletter item={item.newsletter} />}
                  {item.faq && <Faq item={item.faq} />}
                </div>

                {editMode && idx !== items.length - 1 && (
                  <AddBlockButton
                    className={clsx("absolute bottom-0 z-10 -mb-4 hidden w-full group-hover:block", items.length === 0 && "py-8")}
                    onAdd={(type) => addBlock(type, idx + 1)}
                  />
                )}
              </div>
            </Fragment>
          );
        })}

        {editMode && <AddBlockButton className={clsx(items.length === 0 && "py-8")} onAdd={(type) => addBlock(type)} />}
        {(!detectMob() || (editinBlockType && editingBlock)) && (
          <SlideOverWideEmpty
            className="relative z-10"
            title={PageBlockUtils.getTypeTitle(editinBlockType)}
            open={slideOverOpen}
            onClose={onClose}
            buttons={
              <>
                <ButtonTertiary onClick={onClose}>{t("shared.close")}</ButtonTertiary>
              </>
            }
          >
            <div>
              <PageBlockForm type={editinBlockType} item={editingBlock} onUpdate={(e) => onUpdateEditingBlock(e)} onClose={() => setSlideOverOpen(false)} />
            </div>
          </SlideOverWideEmpty>
        )}
      </div>
    </Fragment>
  );
}

function AddBlockButton({ onAdd, className }: { onAdd: (type: string) => void; className?: string }) {
  const [adding, setAdding] = useState(false);

  return (
    <div className={className}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-theme-300 dark:border-theme-800" />
        </div>
        <div className="relative flex justify-center">
          <button
            onClick={() => setAdding(true)}
            type="button"
            className="inline-flex items-center rounded-full border border-theme-300 bg-theme-50 px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-theme-100 focus:outline-none focus:ring-2 focus:ring-theme-500 focus:ring-offset-2 dark:border-theme-800 dark:bg-theme-900"
          >
            <PlusIcon className="h-5 w-5 text-theme-400 dark:text-theme-600" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Modal open={adding} setOpen={(e) => setAdding(e)} className="z-10">
        <div className="text-gray-800">
          <div className="grid grid-cols-4 gap-3">
            {PageBlockUtils.types.map((type) => {
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    onAdd(type);
                    setAdding(false);
                  }}
                  className="group flex w-full flex-col items-center space-y-2 rounded-md border border-gray-200 bg-gray-50 p-2 hover:border-gray-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
                >
                  {/* <PlusIcon className="h-3 w-3 text-gray-500 group-hover:text-gray-800" /> */}
                  <div>{PageBlockUtils.getTypeTitle(type)}</div>
                </button>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}
