import CheckIcon from "../icons/CheckIcon";
import { StepDto } from "./StepDto";

// export default function ProgressBar({ title, steps }: { title: string; steps: StepDto[] }) {
//   function findCurrentIndex() {
//     return steps.findIndex((f) => f.current);
//   }
//   return (
//     <div>
//       <h4 className="sr-only">Status</h4>
//       <p className="text-sm font-medium text-gray-900">{title}</p>
//       <div className="mt-6" aria-hidden="true">
//         <div className="overflow-hidden rounded-full bg-gray-200">
//           <div className="h-2 rounded-full bg-theme-600" style={{ width: "37.5%" }} />
//         </div>
//         <div
//           className={clsx(
//             "mt-6 hidden text-sm font-medium text-gray-600 sm:grid",
//             steps.length === 2 && "grid-cols-2",
//             steps.length === 3 && "grid-cols-3",
//             steps.length === 4 && "grid-cols-4",
//             steps.length === 5 && "grid-cols-5"
//           )}
//         >
//           {steps.map((item, idx) => {
//             return (
//               <div
//                 key={idx}
//                 className={clsx(findCurrentIndex() <= idx && "text-theme-600", idx === 0 && "text-left", idx === steps.length - 1 && "text-right")}
//               >
//                 Migrating database
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProgressBar({ steps }: { steps: StepDto[] }) {
  //   function findCurrentIndex() {
  //     return steps.findIndex((f) => f.current);
  //   }
  return (
    <nav aria-label="Progress">
      <ol className="divide-gray-300 rounded-t-md border border-gray-300 bg-white sm:divide-y lg:flex lg:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.status === "completed" ? (
              <div className="group hidden w-full items-center sm:flex">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-theme-600 ">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="ml-3 truncate text-sm font-medium text-gray-900">{step.title}</span>
                </span>
              </div>
            ) : step.status === "current" ? (
              <div className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-theme-600">
                  <span className="text-theme-600">{stepIdx + 1}</span>
                </span>
                <span className="ml-3 truncate text-sm font-medium text-theme-600">{step.title}</span>
              </div>
            ) : (
              <div className="group hidden items-center  sm:flex">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300">
                    <span className="text-gray-500">{stepIdx + 1}</span>
                  </span>
                  <span className="ml-3 truncate text-sm font-medium text-gray-500">{step.title}</span>
                </span>
              </div>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div className="absolute top-0 right-0 hidden h-full w-5 lg:block" aria-hidden="true">
                  <svg className="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                    <path d="M0 -2L20 40L0 82" vectorEffect="non-scaling-stroke" stroke="currentcolor" strokeLinejoin="round" />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
