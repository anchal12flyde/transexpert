export default function TruckImageSection({ imageSrc, overlay, cornerIcon }) {
  return (
    <div className="global-container sm:mt-[78px] mt-[42px] relative">
      <div className="relative overflow-visible">
        <div className="mainImagDivTruck ">
          {/* Truck Image */}
          <img
            src={imageSrc}
            alt="truckImage"
            className="w-auto h-auto object-contain rounded-2xl"
          />

          {/* Blue overlay */}
          <div className="overlay-blue rounded-2xl relative z-10 p-6 hidden sm:block">
            <p className="heading text-white mb-4 text-center">
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

          <div className="section-blue rounded-2xl relative z-10 px-[30px] py-[30px] sm:hidden block">
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
              <div className="text-center">
                <button className="mt-[16px] hero-button">
                  {overlay.button.label}
                </button>
              </div>
            )}
          </div>

          {/* Corner Icon */}
          <img src={cornerIcon} alt="corner-icon" className="corner-icon" />
        </div>
      </div>
    </div>
  );
}
