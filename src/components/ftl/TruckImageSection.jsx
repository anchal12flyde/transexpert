import Image from "next/image";
import "@/app/globals.css";

export default function TruckImageSection() {
  return (
    <div className="global-container sm:mt-[78px] mt-[42px]">
      <div className=" relative overflow-visible">
        {/* Wrapper */}
        <div className="mainImagDivTruck relative w-[900px] !overflow-visible rounded-2xl">
          {/* Truck Image */}
          <img
            src="/images/truck.png"
           
            alt="truckImage"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Blue overlay */}
          <div className="overlay-blue  rounded-2xl relative z-10">
            <p className="heading text-white text-2xl font-semibold mb-4 text-center ">
              Why you need FTL?
            </p>
            <p className="text-white text-[20px] mb-6">
              Whether it’s recurring production shipments, large-scale retail
              fulfillment, or high-value cargo requiring minimal touchpoints,
              our FTL model is engineered for:
            </p>

            {/* Points list */}
            <ul className="space-y-3 text-white ml-[-34px] ">
              <li className="flex items-center gap-[26px] ">
                <span className="bg-red-500 text-red-500 w-[8px] h-[46px] rounded-full ">
                  |
                </span>
                <span className="text-[20px]  ">
                  Direct-to-destination delivery with no intermediate handling
                </span>
              </li>
              <li className="flex items-center gap-[26px] ">
                <span className="bg-red-500 text-red-500 w-[8px] h-[46px] rounded-full ">
                  |
                </span>
                <span className="text-[20px]  ">
                  Direct-to-destination delivery with no intermediate handling
                </span>
              </li>
              <li className="flex items-center gap-[26px]">
                <span className="bg-red-500 text-red-500 w-[8px] h-[46px] rounded-full">
                  |
                </span>
                <span className="text-[20px]">
                  Reduced risk of damage or delay through load ownership
                </span>
              </li>
              <li className="flex items-center gap-[26px]">
                <span className="bg-red-500 text-red-500 w-[8px] h-[46px] rounded-full">
                  |
                </span>
                <span className="text-[20px]">
                  Dedicated equipment tailored to freight type and compliance
                  needs
                </span>
              </li>
            </ul>

            {/* Button */}
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition">
              Get a quote
            </button>
          </div>

          {/* Corner Icon (Always on Top) */}
          <img
            src="/images/assets/X-icon-ftl.png"
            alt="corner-icon"
            className="absolute bottom-0 right-0 w-[500px] h-[335px] z-[11]"
          />
        </div>
      </div>
    </div>
  );
}
