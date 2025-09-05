"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function TruckImageSection({
  imageSrc,
  overlay,
  cornerIcon,
  setM,
}) {
  const truckRef = useRef(null);
  const overlayRef = useRef(null);
  const [calcValue, setCalcValue] = useState(0);

  useEffect(() => {
    if (truckRef.current && overlayRef.current) {
      const truckHeight = truckRef.current.offsetHeight;
      const overlayHeight = overlayRef.current.offsetHeight;

      // Formula: (overlay height + 78 - truck height) / 2
      const value = overlayHeight + 78 - truckHeight / 2;
      console.log("Calculated Value:", value);
      setCalcValue(value);
      setM(value);
    }
  }, [setM]);

  return (
    <div className="global-container lg:mt-[78px] mt-[42px]">
      <div className="relative overflow-visible">
        <div className="mainImagDivTruck relative w-[900px] !overflow-visible rounded-2xl">
          {/* Truck Image */}
          <div className="relative overflow-visible">
            <img
              ref={truckRef}
              src={imageSrc}
              alt="truckImage"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* X image */}
            <img
              src="/images/assets/X-icon-ftl.png"
              alt="close"
              className="absolute bottom-0 right-0 translate-x-2/11 translate-y-0 w-[40%] h-auto z-[11] block lg:hidden"
            />
          </div>
          {/* Blue overlay */}
          <div
            ref={overlayRef}
            className="overlay-blue rounded-2xl relative z-10 p-6 hidden lg:block"
          >
            <p className="heading text-white text-2xl font-semibold mb-4 text-center">
              {overlay.title}
            </p>
            <p className="text-white text-[20px] mb-6">{overlay.description}</p>

            <ul className="space-y-3 text-white ml-[-34px]">
              {overlay.points.map((point, i) => (
                <li key={i} className="flex items-center gap-[26px]">
                  <span className="bg-red-500 w-[8px] h-[46px] rounded-full"></span>
                  <span className="text-[20px]">{point}</span>
                </li>
              ))}
            </ul>

            {overlay.button && (
              <Link href="/get-a-qoute">
                <button className="mt-[26px] text-button">
                  {overlay.button.label}
                </button>
              </Link>
            )}
          </div>

          <div className="section-blue rounded-2xl relative z-10 px-[30px] py-[30px] lg:hidden block mb-[47px]">
            <p className="ftl-heading text-white mb-4 text-center">
              {overlay.title}
            </p>
            <p className="text-white ftl-description mb-6 ml-[13px]">
              {overlay.description}
            </p>
            <ul className="space-y-3 text-white ftl-list">
              {overlay.points.map((point, i) => (
                <li key={i} className="flex items-center gap-[13px]">
                  <span className="bg-red-500 w-[3px]  h-[24px] rounded-full"></span>
                  <span className="">{point}</span>
                </li>
              ))}
            </ul>
            {overlay.button && (
              <Link href="/get-a-qoute">
                <div className="text-center">
                  <button className="mt-[16px] text-button">
                    {overlay.button.label}
                  </button>
                </div>
              </Link>
            )}
          </div>

          {/* Corner Icon */}
          <img
            src={cornerIcon}
            alt="corner-icon"
            className="absolute bottom-0 right-0 w-[500px] h-[335px] z-[11] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
