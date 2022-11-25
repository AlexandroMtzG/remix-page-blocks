import Loading from "./Loading";

export default function PreviewLoaders() {
  return (
    <div id="loaders">
      <div className="not-prose border border-dashed border-gray-300 bg-white p-6">
        <div id="buttons" className="w-full space-y-2">
          <Loading loading={true} />
        </div>
      </div>
    </div>
  );
}
