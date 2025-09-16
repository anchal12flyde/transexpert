import ClientBlogPage from "./ClientBlogPage";

// Fetch blog post data by slug
async function fetchPost(slug) {
  const res = await fetch(
    `https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const posts = await res.json();
  return posts[0] || null;
}

// Generate static paths for all blog slugs
export async function generateStaticParams() {
  const res = await fetch(
    "https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/posts"
  );
  const posts = await res.json();
  return posts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata per blog post
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);

  return {
    title: post
      ? `${post.title.rendered} — TransExpert Insights`
      : "Blog — TransExpert",
    description: post
      ? post.excerpt?.rendered.replace(/<[^>]+>/g, "")
      : "Read the latest insights from TransExpert.",
    openGraph: {
      title: post
        ? `${post.title.rendered} — TransExpert Insights`
        : "Blog — TransExpert",
      description: post
        ? post.excerpt?.rendered.replace(/<[^>]+>/g, "")
        : "Read the latest insights from TransExpert.",
      url: `https://transexpert.ca/blogs/${params.slug}`,
      siteName: "TransExpert",
      images: [
        {
          url: post?.jetpack_featured_media_url || "/opengraph-blogs.png",
          width: 1200,
          height: 630,
          alt: post?.title.rendered || "TransExpert Blog",
        },
      ],
      locale: "en_CA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post
        ? `${post.title.rendered} — TransExpert Insights`
        : "Blog — TransExpert",
      description: post
        ? post.excerpt?.rendered.replace(/<[^>]+>/g, "")
        : "Read the latest insights from TransExpert.",
      images: [post?.jetpack_featured_media_url || "/opengraph-blogs.png"],
    },
  };
}

// Server component rendering the client component
export default async function Page({ params }) {
  const post = await fetchPost(params.slug);
  return <ClientBlogPage post={post} />;
}
