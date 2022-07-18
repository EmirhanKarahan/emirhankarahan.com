import { nanoid } from "nanoid";
import Redis from "ioredis";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { accessToken } = await getAccessToken(req, res);
      const { blogId, text } = JSON.parse(req.body);

      if (!blogId || !text)
        return res.status(400).json({ message: "wrong or missing parameters" });

      const userResponse = await fetch(
        `${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const user = await userResponse.json();

      const comment = {
        id: nanoid(),
        createdAt: Date.now(),
        text,
        user: {
          name: user.name,
          picture: user.picture,
        },
      };

      let redis = new Redis(process.env.REDIS_URL);
      redis.lpush(blogId, JSON.stringify(comment));
      redis.quit();

      res.status(200).json(comment);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  } else {
    res.status(400).json({ message: "This route accepts only POST requests" });
  }
});
