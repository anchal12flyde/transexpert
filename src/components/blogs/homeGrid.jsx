import Image from "next/image";
import "@/app/globals.css"

export default function HomeGrid() {
  return (
    <div className="global-container mt-[42px] lg:mt-[78px]">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-[14px] lg:gap-[19px]">
        <div className=" bgOverlay  rounded-[13px] lg:rounded-[24px] overflow-hidden ">
          <Image
            src="/images/blogs/one.jpg"
            width={200}
            height={200}
            alt="one-img"
            className="w-full h-[406px] lg:h-full object-cover  image-bright "
          />
          <div className=" text_on_image">
            <p className="content_head"> Fleet & Operations</p>
            <p className="content_subhead">Fleet maintenance best practices</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[12px] lg:gap-[19px]  ">
          <div className="  aspect-square bgOverlay  rounded-[9px] lg:rounded-[24px] overflow-hidden">
            <Image
              src="/images/blogs/two.jpg"
              width={200}
              height={200}
              alt="two-img"
              className="w-full h-full object-cover image-bright  "
            />
            <div className=" text_on_image1">
              <p className="content_subhead1">Fuel efficiency initiatives</p>
            </div>
          </div>
          <div className="aspect-square bgOverlay  rounded-[9px] lg:rounded-[24px] overflow-hidden ">
            <Image
              src="/images/blogs/three.jpg"
              width={200}
              height={200}
              alt="three-img"
              className="w-full h-full object-cover image-bright  "
            />
            <div className=" text_on_image1">
              <p className="content_subhead1">Last-mile delivery evolution</p>
            </div>
          </div>
          <div className="  aspect-square bgOverlay  rounded-[9px] lg:rounded-[24px] overflow-hidden">
            <Image
              src="/images/blogs/four.jpg"
              width={200}
              height={200}
              alt="four-img"
              className="w-full h-full object-cover image-bright  "
            />
            <div className=" text_on_image1">
              <p className="content_subhead1">
                Agile Development: The Key to Flexibility{" "}
              </p>
            </div>
          </div>
          <div className="  aspect-square bgOverlay  rounded-[9px] lg:rounded-[24px] overflow-hidden">
            <Image
              src="/images/blogs/five.jpg"
              width={200}
              height={200}
              alt="five-img"
              className="w-full h-full object-cover  image-bright "
            />
            <div className=" text_on_image1">
              <p className="content_subhead1">
                Retail logistics in a post-COVID world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
