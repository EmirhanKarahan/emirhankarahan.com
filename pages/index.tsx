import type { GetStaticPropsContext, NextPage } from "next";
import { createClient } from "contentful";

import BlogPreview from "../components/blog/blogPreview";
import Transition from "../components/transition";

const Blog: NextPage<any> = ({ blogPosts }) => {
  return (
    <Transition>
      <section className="site-container space-y-4">
        {blogPosts.map((blogPost: any) => (
          <BlogPreview key={blogPost.sys.id} blogPost={blogPost} />
        ))}
      </section>
    </Transition>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const res = await client.getEntries({
    content_type: "blogPost",
    locale: context.locale,
  });

  return {
    props: {
      blogPosts: res.items,
    },
  };
}

export default Blog;
