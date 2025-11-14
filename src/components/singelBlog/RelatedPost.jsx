"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const RelatedPost = ({ calcValue }) => {
  const [device, setDevice] = useState("desktop");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Device check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setDevice("mobile");
      else if (window.innerWidth < 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stripTags = (html) => html?.replace(/<[^>]+>/g, "");

  // Fetch 3 blogs
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
        console.error("Failed to fetch related posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!posts.length)
    return <p className="text-center">No related posts found.</p>;

  return (
    <section
      className="blog-section global-container"
      style={{ marginTop: `${calcValue - 50}px` }}
    >
      <h2 className="related_heading ju">Related posts</h2>

      <div className="blog-grid-blog">
        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.id}
              className="blog-box"
            >
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt={post.title.rendered}
                  className="blog-image"
                />
              )}

              <div className="blog-content">
                <div className="title-with-icon">
                  <h3 className="related-post-heading">
                    {stripTags(post.title.rendered)}
                  </h3>

                  <div className="arrow-icon">
                    <img src="/images/assets/redarrow.png" alt="Arrow" />
                  </div>
                </div>

                <p className="related-post-subheading">
                  {stripTags(post.excerpt.rendered).slice(0, 120)}...
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedPost;
