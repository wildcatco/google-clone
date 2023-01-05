import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const PaginationButtons = () => {
  const router = useRouter();
  const { term, searchType } = router.query;
  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="flex justify-between px-10 sm:justify-start sm:space-x-44 sm:px-0 text-blue-700 pb-4">
      {startIndex > 10 && (
        <Link
          href={{
            pathname: "/search",
            query: {
              term,
              searchType,
              start: startIndex - 10,
            },
          }}
        >
          <div className="flex flex-col items-center hover:underline">
            <AiOutlineLeft />
            Prev
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={{
            pathname: "/search",
            query: {
              term,
              searchType,
              start: startIndex + 10,
            },
          }}
        >
          <div className="flex flex-col items-center hover:underline">
            <AiOutlineRight />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
