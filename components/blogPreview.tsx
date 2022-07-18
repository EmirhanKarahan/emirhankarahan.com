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
      <Link href={`/blog/${blogPost.sys.id}`} locale={locale}>
        <a>
          <h2 className="text-xl font-bold group-hover:text-blue-600">
            {blogPost.fields.title}
          </h2>
          <p>{blogPost.fields.subtitle}</p>
          <div className="text-gray-500">
            <time>
              {format(new Date(blogPost.sys.createdAt), "MMM dd, yyyy", {
                locale: dateLocale,
              })}
            </time>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogPreview;
