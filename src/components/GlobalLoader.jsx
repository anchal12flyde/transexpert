"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const LoaderCtx = createContext(null);

export default function GlobalLoaderProvider({ children, minMs = 2500 }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const marks = useRef(new Set());
  const startTs = useRef(Date.now());
  const requiredKeys = useRef(["content"]);
  const [animationDone, setAnimationDone] = useState(false);

  // Reset loader on route change
  useEffect(() => {
    setVisible(true);
    marks.current = new Set();
    startTs.current = Date.now();
    requiredKeys.current = ["content"];
    setAnimationDone(false);
  }, [pathname]);

  // --- Core functions ---
  const setRequired = (keys) => {
    requiredKeys.current = keys;
  };

  const tryClose = () => {
    const ok = requiredKeys.current.every((k) => marks.current.has(k));
    if (!ok) return;

    const elapsed = Date.now() - startTs.current;
    const wait = Math.max(minMs - elapsed, 0);
    const t = setTimeout(() => {
      setVisible(false);
      document.body.classList.add("loaded"); // 👈 add smooth class once closed
      setAnimationDone(true);
    }, wait);
    return () => clearTimeout(t);
  };

  const markReady = (key) => {
    marks.current.add(key);
    tryClose();
  };

  const skip = (key) => {
    marks.current.add(key);
    tryClose();
  };

  // ✅ FIXED: make it a direct function (no hooks)
  const PageContentReady = () => {
    markReady("content");
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
          <img
            src="https://ik.imagekit.io/a9uxeuyhx/loader-x.gif?updatedAt=1757420630993"
            alt="Loading..."
            className="w-40 h-40"
          />
        </div>
      )}
      <LoaderCtx.Provider
        value={{ visible, markReady, skip, PageContentReady, setRequired }}
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
