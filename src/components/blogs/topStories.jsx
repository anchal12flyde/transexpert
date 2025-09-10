"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopStories() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(true);
  const [categories, setCategories] = useState([]);

  const related = [
    {
      title: "Vehicle Tech",
      subtitle: "The Best Accessories for your Ipad",
      img: "https://ik.imagekit.io/a9uxeuyhx/img1.png?updatedAt=1757415332223",
    },
    {
      title: "Fuel Efficiency",
      subtitle: "AI Revolutionizing Healthcare",
      img: "https://ik.imagekit.io/a9uxeuyhx/img2.png?updatedAt=1757415359660",
    },
    {
      title: "Fleet Safety",
      subtitle: "Sustainable Tech Progress",
      img: "https://ik.imagekit.io/a9uxeuyhx/img3.png?updatedAt=1757415387094",
    },
    {
      title: "GPS & Telematics",
      subtitle: "Remote Work Challenges",
      img: "https://ik.imagekit.io/a9uxeuyhx/img4.png?updatedAt=1757415410193",
    },
  ];

  // fetch live blogs
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/posts?_embed",
          {
            cache: "no-store",
          }
        );

        const catRes = await fetch(
          "https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/categories",
          { cache: "no-store" }
        );

        const catData = await catRes.json();

        setCategories(catData);

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("❌ Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // responsive check
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

  const handleSeeMore = () => {
    if (isMobile) {
      setVisibleCount(posts.length);
    } else {
      setVisibleCount((prev) => Math.min(prev + 2, posts.length));
    }
  };

  const stripTags = (html) => html?.replace(/<[^>]+>/g, "");

  console.log(categories);

  return (
    <section className="global-container lg:mt-[78px] mt-[84px] lg:mb-[78px] mb-[42px]">
      {/* Heading */}
      <h2 className="heading">Top Stories</h2>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[71px] lg:gap-[60px] stories-grid">
        {/* Left - Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-[42px] lg:gap-[78px] stories-grid-blogs">
          {loading ? (
            <p>Loading...</p>
          ) : posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.slice(0, visibleCount).map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              return (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="flex flex-col"
                >
                  {featuredImage && (
                    <Image
                      src={featuredImage}
                      alt={post?.title?.rendered}
                      width={400}
                      height={250}
                      className="rounded-md object-cover w-full h-[200px]"
                    />
                  )}
                  <h3 className="blog-heading text-thm-heading-text line-clamp-2 ">
                    {post?.title?.rendered}
                  </h3>
                  <p className="blog-subheading line-clamp-3 ">
                    {stripTags(post?.yoast_head_json?.description)}
                  </p>
                  <span className="blog-author ">Author : {post?._embedded?.author[0]?.name}</span>
                </Link>
              );
            })
          )}

          {/* See more button */}
          {visibleCount < posts.length && (
            <div className="col-span-full flex justify-center">
              <button onClick={handleSeeMore} className="hero-button ">
                See more
              </button>
            </div>
          )}
        </div>

        {/* Right - Related */}
        <aside className="flex flex-col gap-[24px] lg:gap-[30px] w-full">
          <h3 className="heading !mb-0">Categories</h3>

          <div className="flex gap-[16px] lg:gap-[24px] flex-col">
            {categories &&
              categories.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-[8px] macbookDev"
                >
                  <Image
                    src="https://ik.imagekit.io/a9uxeuyhx/img1.png?updatedAt=1757415332223"
                    alt={item.title}
                    width={141}
                    height={0}
                    className="rounded-md object-cover h-[2cm] w-full"
                  />
                  <div>
                    <h4
                      className="side-heading text-[#E22A26] mb-[8px] lg:mb-[0px]"
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></h4>

                    <p
                      className="side-subheading"
                      dangerouslySetInnerHTML={{
                        __html: stripTags(item.description),
                      }}
                    ></p>
                  </div>
                </div>
              ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
