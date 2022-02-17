import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import SuperpeerIcon from "../superpeerIcon";

const HeaderIcons = () => {
  return (
    <div className="flex space-x-2 text-2xl mt-1">
      <a
        href="https://twitter.com/nickekarahan"
        className="text-blue-400 hover:-translate-y-1"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        href="https://github.com/emirhankarahan"
        className="hover:-translate-y-1"
        aria-label="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/emirhankarahan/"
        className="text-blue-700 hover:-translate-y-1"
        aria-label="Linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://superpeer.com/emirhankarahan"
        className="hover:-translate-y-1"
        aria-label="Superpeer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SuperpeerIcon />
      </a>
    </div>
  );
};

export default HeaderIcons;
