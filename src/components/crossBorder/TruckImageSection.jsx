export default function TruckImageSection({ imageSrc, overlay, cornerIcon }) {
  return (
    <div className="global-container sm:mt-[78px] mt-[42px]">
      <div className="relative overflow-visible">
        <div className="mainImagDivTruck relative w-[900px] !overflow-visible rounded-2xl">
          {/* Truck Image */}
          <img
            src={imageSrc}
            alt="truckImage"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Blue overlay */}
          <div className="overlay-blue rounded-2xl relative z-10 p-6">
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
              <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition">
                {overlay.button.label}
              </button>
            )}
          </div>

          {/* Corner Icon */}
          <img
            src={cornerIcon}
            alt="corner-icon"
            className="absolute bottom-0 right-0 w-[500px] h-[335px] z-[11]"
          />
        </div>
      </div>
    </div>
  );
}
