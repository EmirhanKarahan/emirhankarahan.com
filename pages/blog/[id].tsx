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
          alt={""}
          width={400}
          height={300}
          objectFit="cover"
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
  const dateLocale = locale === "en" ? enUS : tr;

  return (
    <Transition>
      <MiniHeader />
      <main className="site-container mb-20">
        <article>
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
      </main>
    </Transition>
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
