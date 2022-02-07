import type { GetStaticPropsContext, NextPage } from "next";
import { createClient } from "contentful";
import BlogPreview from "../components/blogPreview";
import { IBlogPost } from "../types/IBlogPost";
import Layout from "../components/layout";

const HomePage: NextPage<{ blogPosts: IBlogPost[] }> = ({ blogPosts }) => {
  return (
    <Layout>
      <section className="site-container space-y-4">
        {blogPosts.map((blogPost) => (
          <BlogPreview key={blogPost.sys.id} blogPost={blogPost} />
        ))}
      </section>
    </Layout>
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
    revalidate: 600,
  };
}

export default HomePage;
