import { ComponentProps } from "react";

const BlogPreview = ({ title, subtitle, date, link }: ComponentProps<any>) => {
  return (
    <article>
      <a href={link} target={"_blank"} rel="noopener noreferrer">
        <h2 className="text-xl font-bold hover:text-blue-600">{title}</h2>
        <p>{subtitle}</p>
        <div className="text-gray-400">
          <time>{date}</time>
        </div>
      </a>
    </article>
  );
};

export default BlogPreview;
