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

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const stripTags = (html) => html?.replace(/<[^>]+>/g, "");

  // Detect Mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch 3 Blogs Only
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=3",
          { cache: "no-store" }
        );

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const sliderSettings = {
    className: "center custom-slick",
    centerMode: true,
    infinite: true,
    centerPadding: "45px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (!posts.length) return <p className="text-center">No blogs found.</p>;

  return (
    <section className={`blog-section ${!isMobile ? "global-container" : ""}`}>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {posts.map((post) => {
            const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            return (
              <div key={post.id}>
                <div
                  className="blog-box transition-transform duration-500 h-[420px]"
                  onClick={() => router.push(`/blogs/${post.slug}`)}
                >
                  {img && (
                    <img src={img} alt="Blog Image" className="blog-image" />
                  )}

                  <div className="blog-content">
                    <div className="title-with-icon">
                      <h3 className="card_heading">
                        {stripTags(post.title.rendered)}
                      </h3>
                      <div className="arrow-icon">
                        <img src="/images/assets/arrowUp.png" alt="Arrow" />
                      </div>
                    </div>

                    <p className="card_subheading text-[#1B1F26B8]">
                      {stripTags(post.excerpt.rendered).slice(0, 100)}...
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => {
            const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.id}
                className="blog-box"
              >
                {img && <img src={img} alt="Blog" className="blog-image" />}

                <div className="blog-content">
                  <div className="title-with-icon">
                    <h3 className="card_heading macbook-card_heading">
                      {stripTags(post.title.rendered)}
                    </h3>
                    <div className="arrow-icon">
                      <img src="/images/assets/redarrow.png" alt="Arrow" />
                    </div>
                  </div>

                  <p className="card_subheading text-[#1B1F26B8]">
                    {stripTags(post.excerpt.rendered).slice(0, 120)}...
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
