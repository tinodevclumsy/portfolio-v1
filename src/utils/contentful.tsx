import { createClient } from "contentful";
import * as Contentful from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
export const client = createClient({
  space,
  accessToken,
});

type BlogPost = {
  contentTypeId: "blogPost";
  fields: {
    title: Contentful.EntryFieldTypes.Text;
    content: Contentful.EntryFieldTypes.RichText;
    slug: Contentful.EntryFieldTypes.Text;
    date: Contentful.EntryFieldTypes.Date;
  };
};

export const getPosts = async () => {
  const getEntries = client.getEntries.bind(this);
  const res = await getEntries<BlogPost>({
    content_type: "blogPost",
  });

  return res;
};
