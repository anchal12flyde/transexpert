"use client";
import { useLoader } from "@/components/GlobalLoader";
import Link from "next/link";
import { useEffect, useState } from "react";

const stripTags = (html) => html.replace(/<[^>]+>/g, "");

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const { PageContentReady, skip } = useLoader();
  useEffect(() => {
    skip("hero"); 
  }, [skip]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://flyde.in/wp-json/wp/v2/posts", 
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("❌ Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <PageContentReady />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>
        <ul className="space-y-6">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            posts.map((post) => (
              <li key={post.id} className="border-b pb-4">
                <Link
                  href={`/blogsNew/${post.slug}`}
                  className="text-xl font-semibold text-blue-600"
                >
                  {post.title.rendered}
                </Link>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {stripTags(post.excerpt.rendered)}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
