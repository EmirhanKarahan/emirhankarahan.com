import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import LocalizationSelectBox from "./localizationSelectBox";

const MiniHeader: FunctionComponent = () => {
  const { locale } = useRouter();

  return (
    <header className="relative site-container py-6">
      <Link href={"/"}>
        <a className="underline hover:text-blue-600">
          {locale === "en"
            ? "↩ go back to home page"
            : "↩ ana sayfaya geri dön"}
        </a>
      </Link>
      <LocalizationSelectBox />
    </header>
  );
};

export default MiniHeader;
