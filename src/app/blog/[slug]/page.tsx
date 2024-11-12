import Content from "@/app/components/blog/Content";
import { fetchPostBySlug } from "@/utils/contentful";
interface BlogPostProps {
  params: { slug: string };
}

const BlogDetailPage = async ({ params }: BlogPostProps) => {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  return (
    <div className="items-center min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="max-w-5xl mx-auto pt-56 pb-16">
          <div className="mb-8 pb-5 border-b-2 border-blue-900">
            <h1 className="text-3xl font-semibold">{post.fields.title}</h1>
          </div>
          <Content content={post.fields.content} />
        </div>
      </main>
    </div>
  );
};

export default BlogDetailPage;
