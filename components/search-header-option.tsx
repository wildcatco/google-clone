import { useRouter } from "next/router";
import { createElement } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  title: "All" | "Images";
  icon: IconType;
  selected: boolean;
}

const SearchHeaderOption: React.FC<Props> = ({ title, icon, selected }) => {
  const router = useRouter();

  const handleSelect = () => {
    router.push({
      pathname: "/search",
      query: {
        term: router.query.term,
        searchType: title === "Images" ? "image" : "",
      },
    });
  };

  return (
    <div
      onClick={handleSelect}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      {createElement(icon)}
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
