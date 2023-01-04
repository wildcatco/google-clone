import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { HiMicrophone, HiSearch, HiX } from "react-icons/hi";
import User from "./user";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.MouseEvent) => {
    event.preventDefault();

    const term = searchInputRef.current?.value.trim();
    if (!term) {
      return;
    }

    router.push({
      pathname: "/search",
      query: { term },
    });
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          src={"/images/google-logo.png"}
          alt="google-logo"
          width={92}
          height={30}
          className="object-contain cursor-pointer"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <div className="flex">
            <div>
              <HiX
                className="h-6 text-gray-500 cursor-pointer sm:mr-3"
                onClick={() => {
                  if (searchInputRef.current) {
                    searchInputRef.current.value = "";
                  }
                }}
              />
            </div>
            <div className="hidden sm:flex border-l border-gray-300 pl-3 space-x-2 text-blue-500">
              <HiMicrophone className="h-6 cursor-pointer" />
              <HiSearch onClick={handleSearch} className="h-6 cursor-pointer" />
            </div>
          </div>
          <button onClick={handleSearch} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
};

export default SearchHeader;
