import { useEffect, useState } from "react";
import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { createClient } from "contentful";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";

import { IBlogPost } from "../../types/IBlogPost";
import Transition from "../../components/transition";
import MiniHeader from "../../components/miniHeader";
import rgbDataURL from "../../utils/rgbDataUrl";
import DottedSeperator from "../../components/dottedSeperator";
import CommentForm from "../../components/commentForm";
import Comments from "../../components/comments";
import Head from "next/head";

const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        rel="noopener noreferrer"
        target="_blank"
        className="underline hover:text-blue-600"
      >
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.description}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          placeholder="blur"
          blurDataURL={rgbDataURL(245, 245, 245)}
        />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="my-2">{children}</p>;
    },
  },
};

const BlogPage: NextPage<{ post: IBlogPost }> = ({ post }) => {
  let { locale } = useRouter();
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const dateLocale = locale === "en" ? enUS : tr;

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/comment/postComment", {
      method: "POST",
      body: JSON.stringify({ blogId: post.sys.id, text }),
    });
    fetchComments();
    setText("");
  };

  const fetchComments = async () => {
    const query = new URLSearchParams({ blogId: post.sys.id });
    const blogId = `/api/comment/getComments?${query.toString()}`;
    const response = await fetch(blogId, {
      method: "GET",
    });
    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <Head>
        <title>Emirhan KARAHAN - {post.fields.title}</title>
        <meta name="description" content={post.fields.subtitle} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={"Emirhan KARAHAN - " + post.fields.title}
        />
        <meta property="og:description" content={post.fields.subtitle} />
        <meta property="og:site_name" content="emirhankarahan.com" />
      </Head>
      <Transition>
        <MiniHeader />
        <main className="site-container mb-20">
          <article className="whitespace-pre-wrap">
            <h1 className="text-2xl font-bold">{post.fields.title}</h1>
            <p>{post.fields.subtitle}</p>
            <DottedSeperator dotNumber={8} />
            {documentToReactComponents(post.fields.content, RICHTEXT_OPTIONS)}
            <hr className="mt-5" />
            <time className="text-gray-400">
              {format(new Date(post.sys.createdAt), "MMM dd, yyyy", {
                locale: dateLocale,
              })}
            </time>
          </article>
          <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
          <Comments comments={comments} />
        </main>
      </Transition>
    </>
  );
};

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const posts = await client.getEntries<IBlogPost>({
    content_type: "blogPost",
  });

  const paths = posts.items
    .map((post) =>
      locales?.map((locale) => ({ params: { id: post.sys.id }, locale }))
    )
    .flat();

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
  const post = await client.getEntry<IBlogPost>(params!.id as string, {
    locale,
  });

  return { props: { post }, revalidate: 600 };
}

export default BlogPage;
