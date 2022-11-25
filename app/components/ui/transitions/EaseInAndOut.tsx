import { Transition } from "@headlessui/react";
import { ReactNode } from "react";

interface Props {
  show: boolean;
  children: ReactNode;
}
export default function EaseInAndOut({ show, children }: Props) {
  return (
    <Transition
      show={show}
      enter="transition ease-in duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
