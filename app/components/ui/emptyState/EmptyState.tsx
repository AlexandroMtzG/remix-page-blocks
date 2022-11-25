import ButtonSecondary from "../buttons/ButtonSecondary";
import IconEmptyResults from "~/assets/icons/IconEmptyResults";
import clsx from "clsx";

interface Captions {
  description?: string;
  thereAreNo?: string;
  new?: string;
}

interface Props {
  className?: string;
  captions: Captions;
  to?: string;
  icon?: string;
  onClick?: () => void;
}

export default function EmptyState({ className, captions, to, icon, onClick }: Props) {
  return (
    <div className={clsx(className, "px-1.6 rounded-md border-2 border-dashed border-gray-200 py-16 text-center text-gray-900")}>
      <IconEmptyResults className="mx-auto w-10" />
      <h3 className="mt-2 text-sm font-medium">{captions.thereAreNo}</h3>
      <p className="mt-1 text-sm text-gray-500">{captions.description}</p>
      {captions.new && (
        <div className="mt-6">
          {(() => {
            if (to) {
              return (
                <ButtonSecondary to={to}>
                  {(() => {
                    if (icon === "plus") {
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      );
                    } else if (icon === "refresh") {
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      );
                    } else {
                      return <div></div>;
                    }
                  })()}
                  <div>{captions.new}</div>
                </ButtonSecondary>
              );
            } else {
              return (
                <ButtonSecondary onClick={onClick} type="button">
                  <div>
                    {icon === "plus" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                  <div>{captions.new}</div>
                </ButtonSecondary>
              );
            }
          })()}
        </div>
      )}
    </div>
  );
}
