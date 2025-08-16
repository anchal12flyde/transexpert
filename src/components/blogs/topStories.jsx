// components/TopStories.js
import Image from "next/image";

export default function TopStories() {
  const stories = [
    {
      img: "/images/blogs/one.jpg",
      title: "Agile Development: The Key to Flexibility",
      desc: "Dive into the principles of agile development and how it enhances project management, collaboration.",
      author: "Alex Turner",
    },
    {
      img: "/images/blogs/one.jpg",
      title: "Agile Development: The Key to Flexibility",
      desc: "Dive into the principles of agile development and how it enhances project management, collaboration.",
      author: "Alex Turner",
    },
    {
      img: "/images/blogs/one.jpg",
      title: "Sustainable Tech: Harnessing Renewable Energy",
      desc: "Tech giants are making a significant shift towards sustainable practices by adopting renewable energy.",
      author: "Alex Turner",
    },
    {
      img: "/images/blogs/one.jpg",
      title: "5G's Arrival: Transforming Connectivity",
      desc: "The rollout of 5G networks is poised to revolutionize the way we connect and communicate.",
      author: "Alex Turner",
    },
    {
      img: "/images/blogs/one.jpg",
      title: "AI-Powered Healthcare: Enhancing Diagnostics",
      desc: "Artificial intelligence is reshaping the medical landscape. From advanced diagnostics to personalized treatment plans.",
      author: "Alex Turner",
    },
    {
      img: "/images/blogs/one.jpg",
      title: "The Quantum Computing Race",
      desc: "Quantum computing is on the brink of changing the computing landscape.",
      author: "Alex Turner",
    },
  ];

  const related = [
    {
      title: "Vehicle Tech",
      subtitle: "The Best Accessories for your load",
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

  return (
    <section className="global-container my-8">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4">Top Stories</h2>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Fleet & Operations
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded">
          Cross-Border Insights
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded">
          Driver Life & Careers
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded">
          Industry Trends
        </button>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-3 gap-[71px]">
        {/* Left - Stories Grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-[78px]">
          {stories.map((story, idx) => (
            <div key={idx} className="flex flex-col gap-[16px]">
              <Image
                src={story.img}
                alt={story.title}
                width={400}
                height={250}
                className="rounded-md object-cover w-full "
              />
              <h3 className=" text-[22px] text-primary-color ">
                {story.title}
              </h3>
              <p className="text-[18px] ">{story.desc}</p>
              <span className="text-sm text-[#3D3D3D] ">
                Author: {story.author}
              </span>
            </div>
          ))}
          {/* See more button */}
          <button className="col-span-full bg-red-500 text-white px-4 py-2 rounded mx-auto">
            See more
          </button>
        </div>

        {/* Right - Related */}
        <aside className="flex flex-col gap-4 w-full ">
          <h3 className="font-semibold mb-2">Related</h3>
          {related.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <Image
                src={item.img}
                alt={item.title}
                width={141}
                height={250}
                className="rounded-md object-cover"
              />
              <div>
                <h4 className={`text-secondary-color text-[24px] `}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
