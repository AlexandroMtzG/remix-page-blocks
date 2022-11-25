import { FileBase64 } from "~/application/dtos/shared/FileBase64";
import UploadDocuments from "./UploadDocument";

export default function PreviewUploadersDocument() {
  function droppedDocuments(fileBase64: FileBase64[], files: any[]) {
    alert(`@droppedDocuments ${files.length} files: ` + files.map((f) => f.base64.substr(0, 30) + "..."));
  }
  function droppedDocument(base64: string, file: File) {
    alert(`@droppedDocument: base64 [${base64.substr(0, 30)}...], file [name (${file.name}), size (${file.size})]`);
  }
  return (
    <div id="uploaders" className="space-y-1">
      <div className="border border-dashed border-gray-300 bg-white p-6">
        <div className="w-full space-y-2">
          <UploadDocuments multiple={true} onDroppedFiles={droppedDocuments} onDropped={droppedDocument} />
        </div>
      </div>
    </div>
  );
}
