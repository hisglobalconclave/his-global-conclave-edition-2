import React, { useEffect } from "react";

// Generic hook: accepts a ref to an HTMLElement (or subtype) and a callback
// called when a click/touch occurs outside the ref's element.
export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // If ref is not set or the click was inside the element, do nothing
      const el = ref.current;
      const target = event.target as Node | null;
      if (!el || !target || el.contains(target)) return;

      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
