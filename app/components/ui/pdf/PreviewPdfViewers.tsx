import PdfViewer from "./PdfViewer";
import FakePdfBase64 from "./FakePdfBase64";

export default function PreviewPdfViewers() {
  return (
    <div className="w-full space-y-2">
      <PdfViewer file={FakePdfBase64} />
    </div>
  );
}
