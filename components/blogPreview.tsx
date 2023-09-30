import { FunctionComponent } from "react";
import format from "date-fns/format";
import { useRouter } from "next/router";
import { tr, enUS } from "date-fns/locale";
import { IBlogPost } from "../types/IBlogPost";
import Link from "next/link";

const BlogPreview: FunctionComponent<{ blogPost: IBlogPost }> = ({
  blogPost,
}) => {
  let { locale } = useRouter();
  const dateLocale = locale === "en" ? enUS : tr;

  return (
    <article className="group">
      <a
        target={"_blank"}
        href={`http://blog.emirhankarahan.com/${blogPost.slug}`}
        rel="noreferrer"
      >
        <a>
          <h2 className="text-xl font-bold group-hover:text-blue-600">
            {blogPost.title}
          </h2>
          <p>{blogPost.brief}</p>
          <div className="text-gray-500">
            <time>
              {format(new Date(blogPost.dateUpdated), "MMM dd, yyyy", {
                locale: dateLocale,
              })}
            </time>
          </div>
        </a>
      </a>
    </article>
  );
};

export default BlogPreview;
