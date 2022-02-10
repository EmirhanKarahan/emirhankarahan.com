import { FunctionComponent } from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { IPortfolioItem } from "../types/IPortfolioItem";
import DottedSeperator from "./dottedSeperator";
import TagIcon from "./tagIcon";

const PortfolioItem: FunctionComponent<{ portfolioItem: IPortfolioItem }> = ({
  portfolioItem,
}) => {
  return (
    <article>
      <header className="flex align-middle">
        <h2 className="mr-2 text-xl font-bold hover:text-blue-600">
          {portfolioItem.fields.name}
        </h2>
        <section className="flex space-x-1">
          {portfolioItem.metadata.tags.map((tag) => (
            <TagIcon className="m-auto" key={tag.sys.id} tagId={tag.sys.id} />
          ))}
        </section>
      </header>

      <p>{portfolioItem.fields.description}</p>

      <footer className="space-x-2 mt-2">
        <a
          href={portfolioItem.fields.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FiGithub className="inline-block mr-1" />
          github/{portfolioItem.fields.name}
        </a>
        <a
          href={portfolioItem.fields.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FiGlobe className="inline-block mr-1" />
          demo/{portfolioItem.fields.name}
        </a>
      </footer>

      <DottedSeperator />
    </article>
  );
};

export default PortfolioItem;
