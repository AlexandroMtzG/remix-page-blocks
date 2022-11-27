import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaqBlockDto, FaqBlockStyle } from "~/application/dtos/marketing/FaqBlockDto";
import ButtonTertiary from "~/components/ui/ButtonTertiary";
import InputGroup from "~/components/ui/InputGroup";
import InputRadioGroup from "~/components/ui/InputRadioGroup";
import InputText from "~/components/ui/InputText";
import CollapsibleRow from "~/components/ui/CollapsibleRow";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";

export default function FaqBlockForm({ item, onUpdate }: { item?: FaqBlockDto; onUpdate: (item: FaqBlockDto) => void }) {
  const { t } = useTranslation();
  const [state, setState] = useState<FaqBlockDto>(item || PageBlockUtils.defaultBlocks.faq!);
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
          setValue={(value) => setState({ ...state, style: value as FaqBlockStyle })}
          options={[{ value: FaqBlockStyle.simple, name: "Simple" }]}
        />
      </InputGroup>

      <InputGroup title="Copy">
        <div className="space-y-2">
          <InputText title="Headline" type="text" value={state.headline} setValue={(e) => setState({ ...state, headline: e.toString() })} />
          <InputText title="Subheadline" type="text" value={state.subheadline} setValue={(e) => setState({ ...state, subheadline: e.toString() })} />
        </div>
      </InputGroup>

      <InputGroup title="Questions">
        <div className="flex flex-col space-y-2">
          {state.items.map((item, index) => (
            <CollapsibleRow
              key={index}
              title={item.question}
              value={item.question}
              initial={!item.answer}
              onRemove={() => {
                const items = state.items ?? [];
                items.splice(index, 1);
                setState({ ...state, items });
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                <InputText
                  className="col-span-2"
                  title="Question"
                  type="text"
                  value={item.question}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, question: e.toString() } : item)) })}
                />
                <InputText
                  className="col-span-2"
                  title="Answer"
                  type="text"
                  value={item.answer}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, answer: e.toString() } : item)) })}
                />
                <InputText
                  title="Link text"
                  type="text"
                  value={item.link?.text}
                  setValue={(e) =>
                    setState({
                      ...state,
                      items: state.items.map((item, i) => (i === index ? { ...item, link: { href: item.link?.href ?? "", text: e.toString() ?? "" } } : item)),
                    })
                  }
                />
                <InputText
                  title="Link href"
                  type="text"
                  value={item.link?.href}
                  setValue={(e) =>
                    setState({
                      ...state,
                      items: state.items.map((item, i) => (i === index ? { ...item, link: { text: item.link?.text ?? "", href: e.toString() ?? "" } } : item)),
                    })
                  }
                />
              </div>
            </CollapsibleRow>
          ))}
          <ButtonTertiary
            onClick={() =>
              setState({
                ...state,
                items: [
                  ...(state.items ?? []),
                  {
                    question: "Question " + state.items.length + 1,
                    answer: "",
                  },
                ],
              })
            }
          >
            {t("shared.add")}
          </ButtonTertiary>
        </div>
      </InputGroup>
    </div>
  );
}
