"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

export default function HomeGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch live blog
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/posts?_embed",
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(" Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const stripTags = (html) => html?.replace(/<[^>]+>/g, "");

  return (
    <div className="global-container mt-[42px] lg:mt-[78px]">
      
      <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[250px] gap-[14px] lg:gap-[19px]">
        {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          <>
            {/* First Big Blog */}
            <div className="bgOverlay row-span-2 col-span-2 rounded-[13px] lg:rounded-[24px] overflow-hidden relative">
              <Link href={`/blogs/${posts[0].slug}`}>
                {posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <Image
                    src={posts[0]._embedded["wp:featuredmedia"][0].source_url}
                    fill
                    alt={posts[0]?.title?.rendered}
                    className="object-cover image-bright"
                  />
                )}
                <div className="text_on_image">
                  <p className="content_head"> Featured </p>
                  <p className="content_subhead">{posts[0]?.title?.rendered}</p>
                </div>
              </Link>
            </div>

            {/* Next 4 Smaller Blogs */}
            {posts.slice(1, 5).map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              return (
                <div
                  key={post.id}
                  className="bgOverlay rounded-[9px] lg:rounded-[24px] overflow-hidden relative"
                >
                  <Link href={`/blogs/${post.slug}`}>
                    {featuredImage && (
                      <Image
                        src={featuredImage}
                        fill
                        alt={post?.title?.rendered}
                        className="object-cover image-bright"
                      />
                    )}
                    <div className="text_on_image1">
                      <p className="content_subhead1">
                        {stripTags(post?.title?.rendered)}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
