import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LogoCloudsBlockDto, LogoCloudsBlockStyle } from "~/application/dtos/marketing/LogoCloudsBlockDto";
import ButtonTertiary from "~/components/ui/ButtonTertiary";
import InputGroup from "~/components/ui/InputGroup";
import InputRadioGroup from "~/components/ui/InputRadioGroup";
import InputText from "~/components/ui/InputText";
import CollapsibleRow from "~/components/ui/CollapsibleRow";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";

export default function LogoCloudsBlockForm({ item, onUpdate }: { item?: LogoCloudsBlockDto; onUpdate: (item: LogoCloudsBlockDto) => void }) {
  const { t } = useTranslation();
  const [state, setState] = useState<LogoCloudsBlockDto>(item || PageBlockUtils.defaultBlocks.logoClouds!);
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
          setValue={(value) => setState({ ...state, style: value as LogoCloudsBlockStyle })}
          options={[
            { value: LogoCloudsBlockStyle.simple, name: "Simple" },
            { value: LogoCloudsBlockStyle.custom, name: "Custom" },
          ]}
        />
      </InputGroup>
      <InputGroup title="Copy">
        <div className="space-y-2">
          <InputText title="Text" type="text" value={state.headline} setValue={(e) => setState({ ...state, headline: e.toString() })} />
        </div>
      </InputGroup>

      <InputGroup title="Logos">
        <div className="flex flex-col space-y-2">
          {state.logos?.map((item, index) => (
            <CollapsibleRow
              key={index}
              title={item.href}
              value={item.href}
              initial={!item.alt}
              onRemove={() => {
                const logos = state.logos ?? [];
                logos.splice(index, 1);
                setState({ ...state, logos });
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                <InputText
                  title="Src"
                  type="text"
                  value={item.src}
                  setValue={(e) => setState({ ...state, logos: state.logos?.map((item, i) => (i === index ? { ...item, src: e.toString() } : item)) })}
                />
                <InputText
                  title="Src Dark"
                  type="text"
                  value={item.srcDark}
                  setValue={(e) => setState({ ...state, logos: state.logos?.map((item, i) => (i === index ? { ...item, srcDark: e.toString() } : item)) })}
                />
                <InputText
                  title="Alt"
                  type="text"
                  value={item.alt}
                  setValue={(e) => setState({ ...state, logos: state.logos?.map((item, i) => (i === index ? { ...item, alt: e.toString() } : item)) })}
                />
                <InputText
                  title="Href"
                  type="text"
                  value={item.href}
                  setValue={(e) => setState({ ...state, logos: state.logos?.map((item, i) => (i === index ? { ...item, href: e.toString() } : item)) })}
                />
              </div>
            </CollapsibleRow>
          ))}
          <ButtonTertiary onClick={() => setState({ ...state, logos: [...(state.logos ?? []), { src: "", srcDark: "", alt: "", href: "#" }] })}>
            {t("shared.add")}
          </ButtonTertiary>
        </div>
      </InputGroup>
    </div>
  );
}
