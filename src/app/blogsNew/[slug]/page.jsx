"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function BlogPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://flyde.in/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        setPost(res.data[0] || null);
      } catch (err) {
        console.error("❌ Error fetching post:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <h1 className="text-center mt-20 text-2xl">Loading...</h1>;
  }

  if (!post) {
    return <h1 className="text-center mt-20 text-2xl">Post not found</h1>;
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return (
    <article className="prose lg:prose-xl max-w-3xl mx-auto px-6 py-12">
      {/* Featured Image */}
      {featuredImage && (
        <Image
          src={featuredImage}
          alt={post.title.rendered}
          width={1200}
          height={600}
          className="rounded-lg mb-8 object-cover w-full h-auto"
        />
      )}

      {/* Title */}
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

      {/* Content */}
      {post.content?.rendered ? (
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      ) : (
        <p>No content found for this blog.</p>
      )}
    </article>
  );
}
