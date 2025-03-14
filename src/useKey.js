import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code === "Escape") {
          action();
        }
      }
      document.addEventListener("keydown", callBack);

      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action]
  );
}
