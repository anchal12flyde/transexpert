"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const LoaderCtx = createContext(null);

export default function GlobalLoaderProvider({ children, minMs = 2500 }) { 
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); 
  const marks = useRef(new Set()); 
  const startTs = useRef(Date.now());

  useEffect(() => {
    setVisible(true);
    marks.current = new Set();
    startTs.current = Date.now();
  }, [pathname]);

  const tryClose = () => {
    const need = ["hero", "content"]; 
    const ok = need.every((k) => marks.current.has(k));
    if (!ok) return;

    const elapsed = Date.now() - startTs.current;
    const wait = Math.max(minMs - elapsed, 0); // min display time
    const t = setTimeout(() => setVisible(false), wait);
    return () => clearTimeout(t);
  };

  const markReady = (key) => {
    marks.current.add(key);
    tryClose();
  };

  const skip = (key) => {
    // page me hero hi nahi? skip kar do
    marks.current.add(key);
    tryClose();
  };

  // page mount hone par "content" ready mark karne ka helper
  const PageContentReady = () => {
    useEffect(() => {
      markReady("content");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white   ">
          <img
            src="/images/videos/loader-x.gif"
            alt="Loading..."
            className="w-40 h-40 "
          />
        </div>
      )}
      <LoaderCtx.Provider
        value={{ visible, markReady, skip, PageContentReady }}
      >
        {children}
      </LoaderCtx.Provider>
    </>
  );
}

export const useLoader = () => {
  const ctx = useContext(LoaderCtx);
  if (!ctx)
    throw new Error("useLoader must be used inside GlobalLoaderProvider");
  return ctx;
};
