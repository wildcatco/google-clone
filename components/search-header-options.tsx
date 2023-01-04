import { useRouter } from "next/router";
import { HiOutlinePhotograph, HiSearch } from "react-icons/hi";
import SearchHeaderOption from "./search-header-option";

const SearchHeaderOptions = () => {
  const router = useRouter();
  const { searchType } = router.query;

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-44 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        icon={HiSearch}
        selected={searchType === "" || !searchType}
      />
      <SearchHeaderOption
        title="Images"
        icon={HiOutlinePhotograph}
        selected={searchType === "image"}
      />
    </div>
  );
};

export default SearchHeaderOptions;
