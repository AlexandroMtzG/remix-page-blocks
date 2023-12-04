import { useCallback, useEffect, useRef } from "react";

function useKeypress(callback: () => void, keyCode: number) {
  const escFunction = useCallback((event: any) => {
    if (event.keyCode === keyCode) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useEscapeKeypress(callback: () => void) {
  useKeypress(callback, 27);
}

export function useEnterKeypress(callback: () => void) {
  useKeypress(callback, 13);
}

export function useOuterClick(callback: () => void) {
  const callbackRef = useRef<any>(); // initialize mutable ref, which stores callback
  const innerRef = useRef<any>(); // returned to client, who marks "border" element

  // update cb on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) callbackRef.current(e);
    }
  }, []); // no dependencies -> stable click listener

  return innerRef; // convenience for client (doesn't need to init ref himself)
}
