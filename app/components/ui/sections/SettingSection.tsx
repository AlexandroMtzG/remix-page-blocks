interface Props {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
export default function SettingSection({ title, description, children, className = "shadow border-2 border-gray-100 px-4 py-5 bg-white sm:p-6" }: Props) {
  return (
    <div className="md:grid md:gap-2 lg:grid-cols-3">
      <div className="md:col-span-1">
        <div className="sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
          <p className="mt-1 text-sm leading-5 text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <div>
          <div className="overflow-hidden sm:rounded-sm">
            <div className={className}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
