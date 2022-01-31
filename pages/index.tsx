import type { NextPage } from "next";
import { useRouter } from "next/router";
import BlogPreview from "../components/blog/blogPreview";
import Transition from "../components/transition";
import en from "../locales/en/blog";
import tr from "../locales/tr/blog";

const Blog: NextPage = () => {
  const { locale } = useRouter();
  const blogPosts = locale === "en" ? en : tr;

  return (
    <Transition>
      <section className="site-container space-y-4">
        <BlogPreview {...blogPosts[0]}></BlogPreview>
      </section>
    </Transition>
  );
};

export default Blog;
