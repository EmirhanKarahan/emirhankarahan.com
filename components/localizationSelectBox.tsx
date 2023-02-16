import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";

const LocalizationSelectBox: FunctionComponent = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <select
      value={locale}
      onChange={(val) => {
        router.push(asPath, asPath, { locale: val.target.value });
      }}
      className="absolute right-0 top-0 mt-1 mr-1 focus:ring-0 rounded-md border-transparent 
      bg-gray-300 dark:bg-gray-600 "
    >
      <option value="tr">tr</option>
      <option value="en">en</option>
    </select>
  );
};

export default LocalizationSelectBox;
