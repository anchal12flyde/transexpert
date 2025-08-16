import Image from "next/image";
import "@/app/globals.css"

export default function HomeGrid() {
  return (
    <div className="global-container !grid !grid-cols-2 gap-[19px]   ">
      <div className=" bgRed rounded-lg  ">
        <Image
          src="/images/blogs/one.jpg"
          width={200}
          height={200}
          alt="one-img"
          className="w-full h-full object-cover !rounded-lg  "
        />
      </div>
      <div className="grid grid-cols-2 gap-[19px]  ">
        <div className="  aspect-square bgBlue">
          <Image
            src="/images/blogs/two.jpg"
            width={200}
            height={200}
            alt="two-img"
            className="w-full h-full object-cover   "
          />
        </div>
        <div className="  aspect-square bgBlue ">
          <Image
            src="/images/blogs/three.jpg"
            width={200}
            height={200}
            alt="three-img"
            className="w-full h-full object-cover  "
          />
        </div>
        <div className="  aspect-square bgBlue ">
          <Image
            src="/images/blogs/four.jpg"
            width={200}
            height={200}
            alt="four-img"
            className="w-full h-full object-cover  "
          />
        </div>
        <div className="  aspect-square bgBlue ">
          <Image
            src="/images/blogs/five.jpg"
            width={200}
            height={200}
            alt="five-img"
            className="w-full h-full object-cover  "
          />
        </div>
      </div>
    </div>
  );
}
