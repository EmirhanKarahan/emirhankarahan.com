import { FunctionComponent } from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import NextjsIcon from "./nexjsIcon";

const TagIcon: FunctionComponent<{
  tagId: string;
  className?: string | undefined;
}> = ({ tagId, className: cn }) => {
  switch (tagId) {
    case "techHtml":
      return <SiHtml5 className={cn} color="rgb(255, 109,	0)" />;
    case "techCss":
      return <SiCss3 className={cn} color="rgb(3, 155, 228)" />;
    case "techSass":
      return <FaSass className={cn} color="rgb(172, 94, 135)" />;
    case "techTailwindcss":
      return <SiTailwindcss className={cn} color="rgb(98, 186, 243)" />;
    case "techJavascript":
      return <SiJavascript className={cn} color="rgb(244, 224, 80)" />;
    case "techTypescript":
      return <SiTypescript className={cn} color="rgb(68, 118, 192)" />;
    case "techReact":
      return <SiReact className={cn} color="rgb(130, 215, 247)" />;
    case "techRedux":
      return <SiRedux className={cn} color="rgb(112, 76, 182)" />;
    case "techNextjs":
      return <NextjsIcon className={cn} />;
    default:
      return (
        <BsExclamationTriangle className={cn} color="rgb(107, 255, 255)" />
      );
  }
};

export default TagIcon;
