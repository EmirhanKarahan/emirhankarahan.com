import type { GetStaticPropsContext, NextPage } from "next";
import BlogPreview from "../components/blogPreview";
import { IBlogPost } from "../types/IBlogPost";
import Layout from "../components/layout";

const HomePage: NextPage<{ blogPosts: IBlogPost[] }> = ({ blogPosts }) => {
  return (
    <Layout>
      <section className="site-container space-y-4">
        {blogPosts.map((blogPost) => (
          <BlogPreview key={blogPost.slug} blogPost={blogPost} />
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const headers = {
    "content-type": "application/json",
  };

  const requestBody = {
    query: `{
      user(username: ${process.env.HASHNODE_USERNAME}) {
        publication {
          posts {
           slug
           title
           brief
           dateUpdated
          }
        }
      }
    }`,
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  let response = null;
  try {
    response = await (await fetch("https://api.hashnode.com/", options)).json();
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }

  return {
    props: {
      blogPosts: response?.data?.user?.publication?.posts ?? [],
    },
    revalidate: 900,
  };
}

export default HomePage;
