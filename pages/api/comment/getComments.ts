import Redis from "ioredis";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { blogId } = req.query;

    let redis = new Redis(process.env.REDIS_URL);
    const comments = await redis.lrange(blogId as string, 0, -1);
    redis.quit();

    const data = comments.map((comment) => JSON.parse(comment));

    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "This route accepts only GET requests" });
  }
}
