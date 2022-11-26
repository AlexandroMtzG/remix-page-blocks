import { useEffect, useState } from "react";
import { VideoBlockDto, VideoBlockStyle } from "~/application/dtos/marketing/VideoBlockDto";
import InputGroup from "~/components/ui/InputGroup";
import InputRadioGroup from "~/components/ui/InputRadioGroup";
import InputText from "~/components/ui/InputText";
import PageBlockUtils from "~/utils/pages/PageBlockUtils";

export default function VideoBlockForm({ item, onUpdate }: { item?: VideoBlockDto; onUpdate: (item: VideoBlockDto) => void }) {
  const [state, setState] = useState<VideoBlockDto>(item || PageBlockUtils.defaultBlocks.video!);
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
          setValue={(value) => setState({ ...state, style: value as VideoBlockStyle })}
          options={[{ value: VideoBlockStyle.simple, name: "Simple" }]}
        />
      </InputGroup>
      <InputGroup title="Video">
        <div className="space-y-2">
          <InputText title="Headline" type="text" value={state.headline} setValue={(e) => setState({ ...state, headline: e.toString() })} />
          <InputText title="Subheadline" type="text" value={state.subheadline} setValue={(e) => setState({ ...state, subheadline: e.toString() })} />
          <InputText title="Embed Youtube URL" type="text" value={state.src} setValue={(e) => setState({ ...state, src: e.toString() })} />
        </div>
      </InputGroup>
    </div>
  );
}
