"use client";
import { useEffect, useState } from "react";

export default function useElementOffset(ref, extra = 0) {
  const [calcValue, setCalcValue] = useState(0);

  useEffect(() => {
    const calculate = () => {
      if (ref.current) {
        const el = ref.current;
        const overlayHeight = el.offsetHeight;

        // viewport se distance
        const offsetFromTopViewport = el.getBoundingClientRect().top;

        // document ke top se distance
        const offsetFromTopDocument = offsetFromTopViewport + window.scrollY;

        // final value
        const calculatedValue =
          offsetFromTopDocument + (overlayHeight + extra) / 2;

        setCalcValue(calculatedValue);
      }
    };

    calculate();
    window.addEventListener("resize", calculate);
    window.addEventListener("scroll", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
      window.removeEventListener("scroll", calculate);
    };
  }, [ref, extra]);

  return calcValue;
}
