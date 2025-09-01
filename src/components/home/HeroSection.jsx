"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

export default function HeroSection({ isScrolled }) {
  const overlayRef = useRef(null);
  const squareRef = useRef(null); // 🔴 Red Box reference
  const router = useRouter();

  const [baseWidth, setBaseWidth] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  const greenBoxRef = useRef(null); // 🟢 Green Box reference
  const [greenBoxHeight, setGreenBoxHeight] = useState(0);

  const calcGreenBoxHeight = () => {
    if (greenBoxRef.current) {
      const greenBoxRect = greenBoxRef.current.getBoundingClientRect();
      setGreenBoxHeight(greenBoxRect.height);

      console.log("🟢 Green Box:", {
        top: greenBoxRect.top,
        left: greenBoxRect.left,
        width: greenBoxRect.width,
        height: greenBoxRect.height,
        right: greenBoxRect.right,
        bottom: greenBoxRect.bottom,
      });

      // agar red box hai to dono ka intersection bhi calc karo
      if (squareRef.current) {
        const redRect = squareRef.current.getBoundingClientRect();

        console.log("🔴 Red Box:", {
          top: redRect.top,
          left: redRect.left,
          width: redRect.width,
          height: redRect.height,
          right: redRect.right,
          bottom: redRect.bottom,
        });

        // ✅ Normal bounding-box intersection
        const intersectLeft = Math.max(redRect.left, greenBoxRect.left);
        const intersectTop = Math.max(redRect.top, greenBoxRect.top);
        const intersectRight = Math.min(redRect.right, greenBoxRect.right);
        const intersectBottom = Math.min(redRect.bottom, greenBoxRect.bottom);

        if (intersectRight > intersectLeft && intersectBottom > intersectTop) {
          const iWidth = intersectRight - intersectLeft;
          const iHeight = intersectBottom - intersectTop;
          console.log("📐 Intersection (Rect vs Rect):", {
            left: intersectLeft,
            top: intersectTop,
            width: iWidth,
            height: iHeight,
            area: iWidth * iHeight,
          });
        } else {
          console.log("❌ No Intersection between Red & Green box");
        }

        // ✅ Red diagonal equation (top-left → bottom-right)
        const x1 = redRect.left;
        const y1 = redRect.top;
        const x2 = redRect.right;
        const y2 = redRect.bottom;
        const m = (y2 - y1) / (x2 - x1); // slope
        const c = y1 - m * x1;

        console.log(
          "📐 Red Diagonal Equation: y =",
          m.toFixed(2),
          "x +",
          c.toFixed(2)
        );

        // ✅ Find intersection of diagonal with Green box edges
        let intersectionPoint = null;

        // check top & bottom edges of green box
        [greenBoxRect.top, greenBoxRect.bottom].forEach((gy) => {
          const x = (gy - c) / m;
          if (x >= greenBoxRect.left && x <= greenBoxRect.right) {
            intersectionPoint = { x, y: gy };
          }
        });

        // check left & right edges of green box
        [greenBoxRect.left, greenBoxRect.right].forEach((gx) => {
          const y = m * gx + c;
          if (y >= greenBoxRect.top && y <= greenBoxRect.bottom) {
            intersectionPoint = { x: gx, y };
          }
        });

        if (intersectionPoint) {
          console.log("⚡ Intersection with Red Diagonal:", intersectionPoint);

          // Green base till intersection
          const baseTillIntersection = intersectionPoint.x - greenBoxRect.left;
          console.log("📏 Green Base till Intersection:", baseTillIntersection);

          // Distances for clarity
          const distFromTop = intersectionPoint.y - greenBoxRect.top;
          const distFromBottom = greenBoxRect.bottom - intersectionPoint.y;
          console.log("↕️ Distances inside Green:", {
            fromTop: distFromTop,
            fromBottom: distFromBottom,
          });
        } else {
          console.log("❌ No Diagonal ↔ Green Box intersection");
        }
      }
    }
  };

  const handleImageLoad = () => {
    console.log("🖼️ Green Box Image Loaded");
    calcGreenBoxHeight();
  };

  useEffect(() => {
    calcGreenBoxHeight();
    window.addEventListener("resize", calcGreenBoxHeight);
    return () => window.removeEventListener("resize", calcGreenBoxHeight);
  }, []);

  useEffect(() => {
    const calcValues = () => {
      if (!overlayRef.current) return;
      const rect = overlayRef.current.getBoundingClientRect();
      const fullWidth = rect.width;
      const fullHeight = rect.height;

      setFullHeight(fullHeight);

      console.log("📏 Overlay (Diagonal Background):", {
        width: fullWidth,
        height: fullHeight,
      });

      // Full hypotenuse (Pythagoras theorem)
      const fullHypotenuse = Math.sqrt(fullWidth ** 2 + fullHeight ** 2);

      // 100vh height
      const vhHeight = window.innerHeight;

      // 45° slope ke liye base = height proportion
      const baseAt100vh = vhHeight * (fullWidth / fullHeight);

      const ratio = baseAt100vh / fullHeight;
      console.log("📏 Red Box Width/Height Ratio:", ratio.toFixed(2));

      // Hypotenuse for 100vh height
      const hypotenuseAt100vh = Math.sqrt(baseAt100vh ** 2 + vhHeight ** 2);

      console.log("📐 Diagonal Math:", {
        fullHypotenuse,
        vhHeight,
        baseAt100vh,
        hypotenuseAt100vh,
      });

      setBaseWidth(baseAt100vh);
    };

    calcValues();

    window.addEventListener("resize", calcValues);
    return () => window.removeEventListener("resize", calcValues);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      <section className="hero-section global-container ">
        <div ref={overlayRef} className="hero-diagonal-overlay"></div>
        <div className="square-videon hidden lg:block">
          <img
            ref={greenBoxRef}
            src="/images/assets/x.png"
            alt="Animation"
            className="  "
            onLoad={handleImageLoad} 
          />
        </div>

        <div className="overlay-X-Mob lg:hidden"></div>

        <div className="hero-content">
          <h1 className="hero-heading hero-heading-macbook mb-[24px] lg:mb-[36px]">
            We Don’t Just Move Freight. <br />
            We Power North American Enterprise.
          </h1>
          <p className="hero-description w-full lg:w-[550px] hidden lg:block">
            From mission-critical deliveries to cross-border precision, Trans
            Expert is the logistics backbone trusted by industry leaders
          </p>

          <p className="hero-description w-full lg:w-[550px] block lg:hidden">
            Trans Expert is the logistics backbone trusted by industry leaders
          </p>

          <a href="#about" className="hero-button mt-[24px] lg:mt-[36px]">
            About Us
          </a>
        </div>

        <div className="hero-testimonial">
          <Slider {...settings}>
            <div className=" px-2">
              <div className="star-rating">
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
              </div>
              <p>
                TransExpert has been an exceptional partner to work with. Not
                only have they brought forward strategic solutions, but have
                allowed us to manage our business with peace-of-mind and strive
                towards our value of delivering on Commitment and Customer
                Focus. As a partner, if a solution does not exist they are
                willing to work with you to assist in developing one or offering
                alternative approaches.
              </p>
              <br />
              <p className="testimonial-source">Paper Manufacturing Industry</p>
            </div>
            <div className=" px-2 ">
              <div className="star-rating">
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
                <img src="/images/assets/star.png" alt="star" />
              </div>
              <p>
                Working with Transexpert has been a smooth experience. The team
                is responsive, on time and doesn’t give a chance to disappoint.
                They’re up to speed with planning to ensure loads are picked and
                delivered on time.
              </p>
              <br />
              <p className="testimonial-source">
                Construction Materials Industry
              </p>
            </div>
          </Slider>
        </div>

        <div className="testimonial-cards  ">
          <div className=" flex justify-end ">
            <p
              className="   text-[46px] font-bold mr-[-.8cm]  "
              style={{ writingMode: "sideways-lr" }}
            >
              SERVICES
            </p>
          </div>
          <div className="card" onClick={() => router.push("/ftl")}>
            <div className="img-wrapper">
              <img
                src="/images/assets/Full Truck Load.png"
                alt="Full Truck Load"
                className="h-auto object-cover"
              />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay ">
              <div className="card-content">
                <h3>Full Truck Load</h3>
                <p>Dedicated capacity for your larger shipments</p>
              </div>
              <img
                src="/images/assets/vector2.png"
                alt="X"
                className="x-icon"
              />
            </div>
          </div>

          <div
            className="card"
            onClick={() => router.push("/temperature-controlled")}
          >
            <div className="img-wrapper">
              <img
                src="/images/assets/Refigereted.png"
                alt="Full Truck Load"
                className="h-auto object-cover"
              />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Temperature Controlled</h3>
                <p>Temperature-sensitive logistics just refrigeration.</p>
              </div>
              <img
                src="/images/assets/vector2.png"
                alt="X"
                className="x-icon"
              />
            </div>
          </div>
          <div className="card" onClick={() => router.push("/cross-border")}>
            <div className="img-wrapper">
              <img
                src="/images/assets/Cross Border.png"
                alt="Full Truck Load"
                className="h-auto object-cover"
              />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Cross Border</h3>
                <p>Seamless Borders.Limitless Reach.</p>
              </div>
              <img
                src="/images/assets/vector2.png"
                alt="X"
                className="x-icon"
              />
            </div>
          </div>

          <div className="card" onClick={() => router.push("/cross-docking")}>
            <div className="img-wrapper">
              <img
                src="/images/assets/Cross Docking.png"
                alt="Full Truck Load"
                className="h-auto object-cover"
              />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Cross Docking</h3>
                <p>Build for urgent freight that can not afford to wait</p>
              </div>
              <img
                src="/images/assets/vector2.png"
                alt="X"
                className="x-icon"
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" lg:hidden flex gap-[37px] flex-col mb-[0px] mt-[0px] global-container bgMob pb-[110px] pt-[42px] ">
        <p className="sm:hidden text-center text-[24px] text-white font-bold  ">
          Services
        </p>
        <div className=" lg:hidden grid grid-cols-2 gap-[33px] ">
          <div className="card1 " onClick={() => router.push("/ftl")}>
            <div className="img-wrapper1">
              <img
                src="/images/assets/Full Truck Load.png"
                alt="Full Truck Load"
              />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Full Truck Load</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/vector2.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card1"
            onClick={() => router.push("/temperature-controlled")}
          >
            <div className="img-wrapper1">
              <img src="/images/assets/Refigereted.png" alt="Full Truck Load" />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Temperature Controlled</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/vector2.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card1" onClick={() => router.push("/cross-border")}>
            <div className="img-wrapper1">
              <img
                src="/images/assets/Cross Border.png"
                alt="Full Truck Load"
              />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Cross Border</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/vector2.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card1" onClick={() => router.push("/cross-docking")}>
            <div className="img-wrapper1">
              <img
                src="/images/assets/Cross Docking.png"
                alt="Full Truck Load"
              />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Cross Docking</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/vector2.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
