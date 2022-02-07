import { createClient } from "contentful";
import Transition from "../../components/transition";
import { GetStaticPropsContext, NextPage } from "next";
import React from "react";
import { IBlogPost } from "../../types/IBlogPost";
import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";
import { useRouter } from "next/router";
import MiniHeader from "../../components/miniHeader";

const BlogPage: NextPage<{ post: IBlogPost }> = ({ post }) => {
  let { locale } = useRouter();
  const dateLocale = locale === "en" ? enUS : tr;

  return (
    <Transition>
      <MiniHeader />
      <main className="site-container">
        <article>
          <h1 className="text-2xl font-bold">{post.fields.title}</h1>
          <h3 className="text-lg">{post.fields.subtitle}</h3>
          <time className="text-gray-400">
            {format(new Date(post.sys.createdAt), "MMM dd, yyyy", {
              locale: dateLocale,
            })}
          </time>
        </article>
      </main>
    </Transition>
  );
};

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const posts = await client.getEntries<IBlogPost>({
    content_type: "blogPost",
  });
  const paths = posts.items.map((post) => ({
    params: { id: post.sys.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const post = await client.getEntry<IBlogPost>(params.id, { locale });
  return { props: { post } };
}

export default BlogPage;
