import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TestimonialsBlockDto, TestimonialsBlockStyle } from "~/application/dtos/marketing/TestimonialsBlockDto";
import ButtonTertiary from "~/components/ui/ButtonTertiary";
import InputGroup from "~/components/ui/InputGroup";
import InputRadioGroup from "~/components/ui/InputRadioGroup";
import InputText from "~/components/ui/InputText";
import CollapsibleRow from "~/components/ui/CollapsibleRow";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";

export default function TestimonialsBlockForm({ item, onUpdate }: { item?: TestimonialsBlockDto; onUpdate: (item: TestimonialsBlockDto) => void }) {
  const { t } = useTranslation();
  const [state, setState] = useState<TestimonialsBlockDto>(item || PageBlockUtils.defaultBlocks.testimonials!);
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
          setValue={(value) => setState({ ...state, style: value as TestimonialsBlockStyle })}
          options={[{ value: TestimonialsBlockStyle.simple, name: "Simple" }]}
        />
      </InputGroup>
      <InputGroup title="Copy">
        <div className="space-y-2">
          <InputText title="Headline" type="text" value={state.headline} setValue={(e) => setState({ ...state, headline: e.toString() })} />
          <InputText title="Subheadline" type="text" value={state.subheadline} setValue={(e) => setState({ ...state, subheadline: e.toString() })} />
        </div>
      </InputGroup>

      <InputGroup title="Testimonials">
        <div className="flex flex-col space-y-2">
          {state.items.map((item, index) => (
            <CollapsibleRow
              key={index}
              title={item.name}
              value={item.name}
              initial={!item.avatar}
              onRemove={() => {
                const items = state.items ?? [];
                items.splice(index, 1);
                setState({ ...state, items });
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                <InputText
                  title="Name"
                  type="text"
                  value={item.name}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, name: e.toString() } : item)) })}
                />
                <InputText
                  title="Avatar URL"
                  type="text"
                  value={item.avatar}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, avatar: e.toString() } : item)) })}
                />
                <InputText
                  className="col-span-2"
                  title="Quote"
                  type="text"
                  value={item.quote}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, quote: e.toString() } : item)) })}
                />
                <InputText
                  title="Personal website"
                  type="text"
                  value={item.personalWebsite}
                  setValue={(e) =>
                    setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, personalWebsite: e.toString() } : item)) })
                  }
                />
                <InputText
                  title="Role"
                  type="text"
                  value={item.role}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, role: e.toString() } : item)) })}
                />
                <InputText
                  title="Company"
                  type="text"
                  value={item.company}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, company: e.toString() } : item)) })}
                />
                <InputText
                  title="Company URL"
                  type="text"
                  value={item.companyUrl}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, companyUrl: e.toString() } : item)) })}
                />
                <InputText
                  title="Logo light mode"
                  type="text"
                  value={item.logoLightMode}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, logoLightMode: e.toString() } : item)) })}
                />
                <InputText
                  title="Logo dark mode"
                  type="text"
                  value={item.logoDarkMode}
                  setValue={(e) => setState({ ...state, items: state.items.map((item, i) => (i === index ? { ...item, logoDarkMode: e.toString() } : item)) })}
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
                    name: "Name " + (state.items.length + 1),
                    avatar: "",
                    company: "Company " + (state.items.length + 1),
                    companyUrl: "",
                    logoLightMode: "",
                    logoDarkMode: "",
                    quote: "Quote " + (state.items.length + 1),
                    personalWebsite: "",
                    role: "",
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
