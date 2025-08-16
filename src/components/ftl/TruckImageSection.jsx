import Image from "next/image";
import "@/app/globals.css";

export default function TruckImageSection() {
  return (
    <div className="global-container">
      <div className="w-[900px] relative overflow-visible">
        {/* Wrapper ko relative + overflow-visible */}
        <div className="mainImagDivTruck relative w-[900px] bg-red-500 !overflow-visible rounded-2xl">
          <img
            src="/images/truck.png"
            width={200}
            height={200}
            alt="truckImage"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Blue overlay */}
          <div className="overlay-blue p-6 rounded-2xl">
            <p className="heading text-white text-2xl font-semibold mb-4">
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
        </div>
      </div>
    </div>
  );
}
