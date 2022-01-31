import { FiGithub, FiGlobe } from "react-icons/fi";

const PortfolioItem = () => {
  return (
    <article>
      <h2 className="text-xl font-bold hover:text-blue-600">Project Name</h2>
      <p>
        Details Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ullam?
      </p>
      <div className="space-x-2 mt-2">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FiGithub className="inline-block mr-1" />
          EmirhanKarahan/bulog
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <FiGlobe className="inline-block mr-1" />
          bulogapp.herokuapp.com
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
