import { MutableRefObject, useCallback, useRef } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useBeforeUnload, useLocation, useTransition } from "@remix-run/react";

let STORAGE_KEY = "positions";

let positions: { [key: string]: number } = {};

if (typeof document !== "undefined") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  if (sessionPositions) {
    positions = JSON.parse(sessionPositions);
  }
}

/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 *
 * @see https://remix.run/api/remix#scrollrestoration
 */
export function ScrollRestoration({ nonce = undefined }: { nonce?: string }) {
  useScrollRestoration();

  // wait for the browser to restore it on its own
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  // let the browser restore on it's own for refresh
  useBeforeUnload(
    useCallback(() => {
      window.history.scrollRestoration = "auto";
    }, [])
  );

  let restoreScroll = ((STORAGE_KEY: string) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
      let storedY = positions[window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }).toString();

  return (
    <script
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`,
      }}
    />
  );
}

let hydrated = false;

function useScrollRestoration() {
  let location = useLocation();
  let transition = useTransition();

  let wasSubmissionRef = useRef(false);

  useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);

  useEffect(() => {
    if (transition.location) {
      positions[location.key] = window.scrollY;
    }
  }, [transition, location]);

  useBeforeUnload(
    useCallback(() => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
    }, [])
  );

  if (typeof document !== "undefined") {
    // eslint-disable-next-line
    useLayoutEffect(() => {
      // don't do anything on hydration, the component already did this with an
      // inline script.
      if (!hydrated) {
        hydrated = true;
        return;
      }

      let y = positions[location.key];

      // been here before, scroll to it
      if (y != undefined) {
        window.scrollTo(0, y);
        return;
      }

      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }

      // don't do anything on submissions
      if (wasSubmissionRef.current === true) {
        wasSubmissionRef.current = false;
        return;
      }

      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location]);
  }

  useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
}

export function useElementScrollRestoration({ apply }: { apply: boolean }, ref: MutableRefObject<HTMLElement | null>) {
  let positions = useRef<Map<string, number>>(new Map()).current;
  let location = useLocation();
  let pendingLocation = useTransition().location;

  useEffect(() => {
    if (!ref.current || !apply) return;
    if (pendingLocation) {
      positions.set(location.key, ref.current.scrollTop);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingLocation, location]);

  if (typeof window !== "undefined") {
    // seriously, chill
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      if (!ref.current || !apply) return;
      let y = positions.get(location.key);
      ref.current.scrollTo(0, y || 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
  }
}
