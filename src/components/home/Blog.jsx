"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { useRouter } from "next/navigation";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: false,
});

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogData = [
    {
      img: "https://ik.imagekit.io/a9uxeuyhx/Image1.png?updatedAt=1757408874966",
      title: "5 Things to Know About Cross-Border Freight Compliance",
      desc: "Your guide to smoother, faster shipments between Canada, the U.S., and Mexico.",
    },
    {
      img: "https://ik.imagekit.io/a9uxeuyhx/Image2.png?updatedAt=1757408919424",
      title: "TransExpert’s SmartWay Certification",
      desc: "Our commitment to sustainable, efficient freight",
    },
    {
      img: "https://ik.imagekit.io/a9uxeuyhx/Image3.png?updatedAt=1757408951098",
      title: "Why Same-Day Delivery is the Future of Retail Logistics",
      desc: "Meeting the expectations of today’s instant delivery economy.",
    },
  ];

  const sliderSettings = {
    className: "center custom-slick",
    centerMode: true,
    infinite: true,
    centerPadding: "45px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };

  return (
    <section className={`blog-section ${!isMobile ? "global-container" : ""}`}>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {blogData.map((item, idx) => (
            <div key={idx} className="">
              <div
                className="blog-box transition-transform duration-500 h-[420px]"
                onClick={() => router.push("/blogs")}
              >
                <img src={item.img} alt="Truck" className="blog-image" />
                <div className="blog-content">
                  <div className="title-with-icon">
                    <h3 className="card_heading ">{item.title}</h3>
                    <div className="arrow-icon">
                      <img src="/images/assets/arrowUp.png" alt="Arrow" />
                    </div>
                  </div>
                  <p className="card_subheading text-[#1B1F26B8]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="blog-grid">
          {blogData.map((item, idx) => (
            <Link href="/blogs" key={idx} className="blog-box">
              <img src={item.img} alt="Truck" className="blog-image" />
              <div className="blog-content">
                <div className="title-with-icon">
                  <h3 className="card_heading macbook-card_heading">
                    {item.title}
                  </h3>
                  <div className="arrow-icon">
                    <img src="/images/assets/redarrow.png" alt="Arrow" />
                  </div>
                </div>
                <p className="card_subheading text-[#1B1F26B8]">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
