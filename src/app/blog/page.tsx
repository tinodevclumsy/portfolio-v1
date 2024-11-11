// import { client } from "@/utils/contentful";
// import * as Contentful from "contentful";
// import { GoArrowRight } from "react-icons/go";
// import Link from "next/link";

// type BlogPost = {
//   contentTypeId: "blogPost";
//   fields: {
//     title: Contentful.EntryFieldTypes.Text;
//     content: Contentful.EntryFieldTypes.RichText;
//     slug: Contentful.EntryFieldTypes.Text;
//     date: Contentful.EntryFieldTypes.Date;
//   };
// };

// const getPosts = () => {
//   const res = client.getEntries<BlogPost>({
//     content_type: "blogPost",
//   });

//   return res;
// };

// const formatDate = (d: string) => {
//   const date = new Date(d);

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const formattedDate = `${
//     monthNames[date.getMonth()]
//   } ${date.getDate()}, ${date.getFullYear()}`;

//   return formattedDate;
// };

const Blog: React.FC = async () => {
  // const posts = await getPosts();

  return (
    <div className="items-center min-h-screen px-5 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="container mx-auto pt-56 pb-16">
          <h1 className="text-4xl uppercase font-semibold">Blog</h1>

          <div className="mt-4">
            {/* {posts.items.map((post, index) => {
              return (
                <Link
                  href={`/blog/${post.fields.slug}`}
                  key={`post-${index}`}
                  className="border-b-2 flex justify-between items-center border-blue-900 py-5 group"
                >
                  <div>
                    <h2 className="text-xl font-medium">{post.fields.title}</h2>
                    <p className="mt-3 text-xs text-stone-400">
                      {formatDate(post.fields.date)}
                    </p>
                  </div>
                  <div className="border rounded-full  border-zinc-500 p-3 group-hover:-rotate-45 transition-transform duration-300">
                    <GoArrowRight />
                  </div>
                </Link>
              );
            })} */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
