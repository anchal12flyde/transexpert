"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopStories() {
  const allStories = [
    {
      img: "/images/blogs/three.jpg",
      title: "Agile Development: The Key to Flexibility",
      desc: "Dive into agile principles and how it enhances project management, collaboration.",
      author: "Alex Turner",
      category: "Fleet & Operations",
    },
    {
      img: "/images/blogs/three.jpg",
      title: "Agile Development: The Key to Flexibility ",
      desc: "Dive into the principles of agile development and how it enhances project management, collaboration.",
      author: "Alex Turner",
      category: "Cross-Border Insights",
    },
    {
      img: "/images/blogs/blog1.png",
      title: "Sustainable Tech: Harnessing Renewable Energy",
      desc: "Tech giants are making a significant shift towards sustainable practices.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
    {
      img: "/images/blogs/blog2.png",
      title: "5G's Arrival: Transforming Connectivity",
      desc: "The rollout of 5G networks is poised to revolutionize connectivity.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
    {
      img: "/images/blogs/blog3.png",
      title: "AI-Powered Healthcare: Enhancing Diagnostics",
      desc: "Artificial intelligence is reshaping the medical landscape. From advanced diagnostics to personalized treatment plans.",
      author: "Alex Turner",
      category: "Driver Life & Careers",
    },
    {
      img: "/images/blogs/blog4.png",
      title: "The Quantum Computing Race",
      desc: "Quantum computing is on the brink of changing the computing landscape.",
      author: "Alex Turner",
      category: "Fleet & Operations",
    },
    {
      img: "/images/blogs/blog2.png",
      title: "5G's Arrival: Transforming Connectivity",
      desc: "The rollout of 5G networks is poised to revolutionize connectivity.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
    {
      img: "/images/blogs/three.jpg",
      title: "Agile Development: The Key to Flexibility",
      desc: "Dive into agile principles and how it enhances project management, collaboration.",
      author: "Alex Turner",
      category: "Fleet & Operations",
    },
    {
      img: "/images/blogs/three.jpg",
      title: "Agile Development: The Key to Flexibility ",
      desc: "Dive into the principles of agile development and how it enhances project management, collaboration.",
      author: "Alex Turner",
      category: "Cross-Border Insights",
    },
    {
      img: "/images/blogs/blog1.png",
      title: "Sustainable Tech: Harnessing Renewable Energy",
      desc: "Tech giants are making a significant shift towards sustainable practices.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
    {
      img: "/images/blogs/blog2.png",
      title: "5G's Arrival: Transforming Connectivity",
      desc: "The rollout of 5G networks is poised to revolutionize connectivity.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
    {
      img: "/images/blogs/blog3.png",
      title: "AI-Powered Healthcare: Enhancing Diagnostics",
      desc: "Artificial intelligence is reshaping the medical landscape. From advanced diagnostics to personalized treatment plans.",
      author: "Alex Turner",
      category: "Driver Life & Careers",
    },
    {
      img: "/images/blogs/blog4.png",
      title: "The Quantum Computing Race",
      desc: "Quantum computing is on the brink of changing the computing landscape.",
      author: "Alex Turner",
      category: "Fleet & Operations",
    },
    {
      img: "/images/blogs/blog2.png",
      title: "5G's Arrival: Transforming Connectivity",
      desc: "The rollout of 5G networks is poised to revolutionize connectivity.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
    {
      img: "/images/blogs/blog3.png",
      title: "AI-Powered Healthcare: Enhancing Diagnostics",
      desc: "Artificial intelligence is reshaping the medical landscape. From advanced diagnostics to personalized treatment plans.",
      author: "Alex Turner",
      category: "Driver Life & Careers",
    },
    {
      img: "/images/blogs/blog4.png",
      title: "The Quantum Computing Race",
      desc: "Quantum computing is on the brink of changing the computing landscape.",
      author: "Alex Turner",
      category: "Fleet & Operations",
    },
    {
      img: "/images/blogs/blog2.png",
      title: "5G's Arrival: Transforming Connectivity",
      desc: "The rollout of 5G networks is poised to revolutionize connectivity.",
      author: "Alex Turner",
      category: "Industry Trends",
    },
  ];

  const related = [
    {
      title: "Vehicle Tech",
      subtitle: "The Best Accessories for your Ipad",
      img: "/images/blogs/one.jpg",
    },
    {
      title: "Fuel Efficiency",
      subtitle: "AI Revolutionizing Healthcare",
      img: "/images/blogs/one.jpg",
    },
    {
      title: "Fleet Safety",
      subtitle: "Sustainable Tech Progress",
      img: "/images/blogs/one.jpg",
    },
    {
      title: "GPS & Telematics",
      subtitle: "Remote Work Challenges",
      img: "/images/blogs/one.jpg",
    },
  ];

  const categories = [
    "Fleet & Operations",
    "Cross-Border Insights",
    "Driver Life & Careers",
    "Industry Trends",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]); 
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(true);

  // screen size check
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setVisibleCount(3);
      } else {
        setIsMobile(false);
        setVisibleCount(4);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const filteredStories = allStories.filter(
    (story) => story.category === activeCategory
  );

  const handleSeeMore = () => {
    if (isMobile) {
      setVisibleCount(filteredStories.length);
    } else {
      setVisibleCount((prev) => Math.min(prev + 2, filteredStories.length));
    }
  };

  return (
    <section className="global-container sm:mt-[78px] mt-[42px] sm:mb-[78px] mb-[42px]">
      {/* Heading */}
      <h2 className="heading">Top Stories</h2>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(isMobile ? 3 : 4);
            }}
            className={`blog-button ${
              activeCategory === cat
                ? "bg-thm-button-color text-white"
                : "text-[#27397A] border border-[#27397A] bg-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[71px] stories-grid">
        {/* Left - Stories Grid */}
        <div className="grid sm:grid-cols-2  gap-[42px] sm:gap-[78px] stories-grid-blogs">
          {filteredStories.slice(0, visibleCount).map((story, idx) => (
            <Link key={idx} href="/blogs/single-blog" className="flex flex-col">
              <Image
                src={story.img}
                alt={story.title}
                width={400}
                height={250}
                className="rounded-md object-cover w-full "
              />
              <h3 className="blog-heading text-thm-heading-text ">
                {story.title}
              </h3>
              <p className="blog-subheading ">{story.desc}</p>
              <span className="blog-author ">Author: {story.author}</span>
            </Link>
          ))}

          {/* See more button */}
          {visibleCount < filteredStories.length && (
            <div className="col-span-full flex justify-center">
              <button onClick={handleSeeMore} className="hero-button ">
                See more
              </button>
            </div>
          )}
        </div>

        {/* Right - Related */}
        <aside className="flex flex-col  gap-[16px] sm:gap-[24px] w-full">
          <h3 className="heading">Related</h3>
          {related.map((item, idx) => (
            <div key={idx} className="flex gap-[24px] items-stretch ">
              <Image
                src={item.img}
                alt={item.title}
                width={141}
                height={0}
                className="rounded-md object-cover h-auto"
              />
              <div>
                <h4 className="side-heading text-[#E22A26]  mb-[8px] sm:mb-[16px] ">
                  {item.title}
                </h4>
                <p className="side-subheading">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
