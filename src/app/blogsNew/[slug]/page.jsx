"use client";

import { useLoader } from "@/components/GlobalLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { slug } = useParams();
  const { PageContentReady, skip } = useLoader();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("Slug :", slug);

  useEffect(() => {
    if (!slug) return;
    skip("hero");

    axios
      .get(`https://flyde.in/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res) => {
        console.log("API response:", res.data);
        setPost(res.data[0] || null);
      })
      .catch((err) => console.error("Error fetching post:", err))
      .finally(() => setLoading(false));
  }, [slug, skip]);

  if (loading) {
    return (
      <>
        <PageContentReady />
        <h1 className="text-center mt-20 text-2xl">Loading...</h1>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <PageContentReady />
        <h1 className="text-center mt-20 text-2xl">Post not found</h1>
      </>
    );
  }

  return (
    <>
      <PageContentReady />
      <article className="prose lg:prose-xl max-w-3xl mx-auto px-6 py-12">
        <h1>{post.title.rendered}</h1>
        {post.content?.rendered ? (
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        ) : (
          <p>No content found for this blog.</p>
        )}
      </article>
    </>
  );
}
