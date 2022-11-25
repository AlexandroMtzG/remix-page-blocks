import SlideOver from "../slideOvers/SlideOver";
import { useState } from "react";
import UploadDocument from "./UploadDocument";

interface Props {
  title: string;
  initialImage?: string;
  onLoaded: (image: string, file: File) => void;
  onClose: () => void;
}

export default function UploadImage({ title = "", initialImage, onLoaded, onClose }: Props) {
  const [image, setImage] = useState(initialImage);

  function onChange(base64: string, file: File) {
    setImage(base64);
    onLoaded(base64, file);
    onClose();
  }

  return (
    <div>
      <SlideOver
        onClose={onClose}
        title={title}
        content={
          <div className="space-y-2">
            <UploadDocument accept="image/png, image/jpg, image/jpeg" description={title} onDropped={onChange} />
            {image && (
              <div>
                <img className="h-auto w-full" alt="Uploaded" src={image} />
              </div>
            )}
          </div>
        }
      ></SlideOver>
    </div>
  );
}
