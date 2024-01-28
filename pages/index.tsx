import type { GetStaticPropsContext, NextPage } from "next";
import BlogPreview from "../components/blogPreview";
import { Edge, IBlogPost } from "../types/IBlogPost";
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

  const query = `{
    publication(host:"blog.emirhankarahan.com") {
      posts (first:10){
        edges{
          node {
            title,
            brief,
            url,
            slug,
            publishedAt
          }
        }
      }
      }
    }`;

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  };

  let response = null;
  try {
    response = await (await fetch("https://gql.hashnode.com/", options)).json();
  } catch (err) {
    console.log("ERROR DURING FETCH REQUEST", err);
  }

  return {
    props: {
      blogPosts: response?.data?.publication?.posts?.edges?.map((edge: Edge) => {
        return  { title: edge.node.title, slug: edge.node.slug, brief: edge.node.brief, url: edge.node.url, publishedAt: edge.node.publishedAt }
      }) ?? [],
    },
    revalidate: 900,
  };
}

export default HomePage;
