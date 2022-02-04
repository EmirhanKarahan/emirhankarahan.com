import { ComponentProps } from "react";
import format from "date-fns/format";
import { useRouter } from "next/router";
import { tr, enUS } from "date-fns/locale";

const BlogPreview = ({ blogPost }: ComponentProps<any>) => {
  let { locale } = useRouter();
  const dateLocale = locale === "en" ? enUS : tr;

  return (
    <article>
      <a href="/blogPreviewDeneme" target={"_blank"} rel="noopener noreferrer">
        <h2 className="text-xl font-bold hover:text-blue-600">
          {blogPost.fields.title}
        </h2>
        <p>{blogPost.fields.subtitle}</p>
        <div className="text-gray-400">
          <time>
            {format(new Date(blogPost.sys.createdAt), "MMM dd, yyyy", {
              locale: dateLocale,
            })}
          </time>
        </div>
      </a>
    </article>
  );
};

export default BlogPreview;
