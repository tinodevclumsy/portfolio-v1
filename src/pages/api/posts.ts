import { createClient } from "contentful";
import type { NextApiRequest, NextApiResponse } from 'next'

const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;

const client = createClient({
    space,
    accessToken,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const entries = await client.getEntries({ content_type: "blogPost" });
    res.status(200).json(entries);
  } catch (error: unknown) {
    res.status(500).json({ error: "Failed to fetch posts " + error });
  }
}
