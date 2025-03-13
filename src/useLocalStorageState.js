import { useState, useEffect } from "react";

export function useLocalStorageState() {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem("value");
    return JSON.parse(storedValue);
  });

  useEffect(
    function () {
      localStorage.setItem("value", JSON.stringify(value));
    },
    [value]
  );
}
