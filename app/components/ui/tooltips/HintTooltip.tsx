import clsx from "clsx";

interface Props {
  text: string;
  alwaysVisible?: boolean;
}

export default function HintTooltip({ text, alwaysVisible }: Props) {
  return (
    <div className="group relative flex flex-col items-center">
      {!alwaysVisible && (
        <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <div className={clsx(alwaysVisible ? "" : "hidden", "absolute bottom-0 mb-6 w-40 flex-col items-center group-hover:flex sm:w-72 md:w-96")}>
        <span className="whitespace-no-wrap relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg">{text}</span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-black"></div>
      </div>
    </div>
  );
}
