import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  text: ReactNode;
  children?: ReactNode;
}

export default function WarningBanner({ title = "Warning", text = "", children }: Props) {
  return (
    <div className="alert alert-warning shadow-lg">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium leading-5 text-yellow-800">{title}</h3>
          <div className="mt-2 text-sm leading-5 text-yellow-700">
            <div>
              {text}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
