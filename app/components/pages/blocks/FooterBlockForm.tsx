import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterBlockDto, FooterBlockStyle, FooterSectionDto } from "~/application/dtos/marketing/FooterBlockDto";
import ButtonTertiary from "~/components/ui/ButtonTertiary";
import InputGroup from "~/components/ui/InputGroup";
import InputRadioGroup from "~/components/ui/InputRadioGroup";
import InputText from "~/components/ui/InputText";
import CollapsibleRow from "~/components/ui/CollapsibleRow";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";
import SocialsBlockForm from "./SocialsBlockForm";

export default function FooterBlockForm({ item, onUpdate }: { item?: FooterBlockDto; onUpdate: (item: FooterBlockDto) => void }) {
  const { t } = useTranslation();
  const [state, setState] = useState<FooterBlockDto>(item || PageBlockUtils.defaultBlocks.footer!);
  useEffect(() => {
    onUpdate(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <div className="space-y-4">
      <InputGroup title="Design">
        <InputRadioGroup
          title="Style"
          value={state.style}
          setValue={(value) => setState({ ...state, style: value as FooterBlockStyle })}
          options={[{ value: FooterBlockStyle.columns, name: "Columns" }]}
        />
      </InputGroup>

      <InputGroup title="Copy">
        <InputText title="Text" value={state.text} setValue={(value) => setState({ ...state, text: value?.toString() })} />
      </InputGroup>

      <InputGroup title="Links">
        <div className="flex flex-col space-y-2">
          {state.sections.map((item, idx) => (
            <SectionForm
              key={idx}
              item={item}
              onUpdate={(item) => setState({ ...state, sections: state.sections?.map((x, i) => (i === idx ? item : x)) })}
              onRemove={() => setState({ ...state, sections: state.sections?.filter((x, i) => i !== idx) })}
            />
          ))}
          <ButtonTertiary
            onClick={() =>
              setState({
                ...state,
                sections: [
                  ...state.sections,
                  {
                    name: "Section " + (state.sections.length + 1),
                    items: [],
                  },
                ],
              })
            }
          >
            {t("shared.add")} section
          </ButtonTertiary>
        </div>
      </InputGroup>

      <InputGroup title="Socials">
        <SocialsBlockForm item={item?.socials} onUpdate={(socials) => setState({ ...state, socials })} />
      </InputGroup>
    </div>
  );
}

function SectionForm({
  item,
  onRemove,
  onUpdate,
}: {
  item: FooterSectionDto;
  onRemove: () => void;
  onUpdate: (item: FooterSectionDto) => void;
  isSublink?: boolean;
}) {
  const { t } = useTranslation();
  const [state, setState] = useState<FooterSectionDto>(item);
  useEffect(() => {
    onUpdate(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <CollapsibleRow title={item.name} value={item.name} initial={!item.items || item.items.length === 0} onRemove={onRemove}>
      <div className="space-y-2">
        <InputText name="title" title="Name" value={item.name} setValue={(e) => setState({ ...state, name: e.toString() })} placeholder="Section name" />
        <div className="space-y-1">
          <label className="flex justify-between space-x-2 text-xs font-medium text-gray-600 ">Links</label>
          <div className="flex flex-col space-y-2">
            {state.items?.map((item, index) => (
              <CollapsibleRow
                key={index}
                title={item.name}
                value={item.name}
                initial={!item.href}
                onRemove={() => {
                  const items = state.items ?? [];
                  items.splice(index, 1);
                  setState({ ...state, items });
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                  <InputText
                    title="Link text"
                    type="text"
                    value={item.name}
                    setValue={(e) => setState({ ...state, items: state.items?.map((item, i) => (i === index ? { ...item, name: e.toString() } : item)) })}
                  />
                  <InputText
                    title="Link href"
                    type="text"
                    value={item.href}
                    setValue={(e) => setState({ ...state, items: state.items?.map((item, i) => (i === index ? { ...item, href: e.toString() } : item)) })}
                  />
                </div>
              </CollapsibleRow>
            ))}
            <ButtonTertiary
              onClick={() =>
                setState({
                  ...state,
                  items: [
                    ...(state.items || []),
                    {
                      name: "Link " + ((item.items?.length ?? 0) + 1),
                      href: "",
                    },
                  ],
                })
              }
            >
              {t("shared.add")} link
            </ButtonTertiary>
          </div>
        </div>
      </div>
    </CollapsibleRow>
  );
}
