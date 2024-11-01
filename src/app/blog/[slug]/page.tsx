import { client } from "@/utils/contentful";
import * as Contentful from "contentful";
import Content from "@/app/components/blog/Content";

interface BlogPostProps {
  params: { slug: string };
}

interface Post {
  title: Contentful.EntryFieldTypes.Text;
  content: Contentful.EntryFieldTypes.RichText;
  slug: Contentful.EntryFieldTypes.Text;
  date: Contentful.EntryFieldTypes.Date;
}

const getPost = async (slug: string): Promise<Post> => {
  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  const post = res.items[0]?.fields;

  if (!post) {
    // TODO: redirect to 404
    throw new Error(`Post with slug "${slug}" not found`);
  }

  return post;
};

const BlogDetailPage = async ({ params }: BlogPostProps) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="items-center min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="max-w-5xl mx-auto pt-56 pb-16">
          <div className="mb-8 pb-5 border-b-2 border-blue-900">
            <h1 className="text-3xl font-semibold">{post.title}</h1>
          </div>
          <Content content={post.content} />
        </div>
      </main>
    </div>
  );
};

export default BlogDetailPage;
