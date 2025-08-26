"use client";
import { useLoader } from "@/components/GlobalLoader";
import Davidfox from "@/components/davidFox/davidfox";

import { useEffect, useRef, useState } from "react";

export default function page() {
   const { PageContentReady, skip } = useLoader();
    useEffect(() => {
      skip("hero");
    }, [skip]);

  return (
    <>
      <PageContentReady />
      <Davidfox />
    </>
  );
}
