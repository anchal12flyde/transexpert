import { MoveRightIcon } from "lucide-react";

export default function StripFtl() {
  return (
    <div className="counterSection mt-[330px]">
      <div className="global-container flex items-center gap-[26px] ">
        <h2 className="text">
          Full truckload isn't just a mode, it's a commitment. <br /> Our
          clients don’t just get a trailer, they get a team.
        </h2>

        <div className="flex items-center hero-button !bg-white gap-2 w-fit ">
          <p className="text-red-500 font-semibold ">Explore Our Fleet</p>
          <MoveRightIcon color="red" />
        </div>
      </div>
    </div>
  );
}
