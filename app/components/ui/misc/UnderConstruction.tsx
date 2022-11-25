import EnterpriseFeature from "./EnterpriseFeature";

export default function UnderConstruction({ title, description, enterpriseFeature }: { title: string; description?: string; enterpriseFeature?: boolean }) {
  return (
    <div className="space-y-3 p-6">
      <div className="text-lg font-extrabold text-gray-800">
        <span>{title}</span>
      </div>
      {description && <div className="text-sm text-gray-600">{description}</div>}
      {enterpriseFeature && <EnterpriseFeature />}
      <div className="flex flex-col justify-center space-y-4 rounded-md border-2 border-dashed border-yellow-300 bg-yellow-50 py-6 text-center font-medium">
        <div>Under 🚧 Construction</div>
        <div className="mx-auto w-64">
          <img className="h-auto w-full object-cover" alt="Under construction" src="https://media.tenor.com/M-ibWYQzmiIAAAAC/cat-cute.gif" />
        </div>
      </div>
    </div>
  );
}
