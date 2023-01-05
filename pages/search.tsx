import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ImageResults from "../components/image-results";
import SearchHeader from "../components/search-header";
import SearchResults from "../components/search-results";
import mockedResponse from "../data/mock-response";

interface Props {
  searchResults: any;
}

const SearchPage: NextPage<Props> = ({ searchResults }) => {
  const router = useRouter();
  const { term, searchType } = router.query;

  return (
    <div>
      <Head>
        <title>{term} - Google Search</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
      {searchType === "image" ? (
        <ImageResults results={searchResults} />
      ) : (
        <SearchResults results={searchResults} />
      )}
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const mockData = false; // ! Should set false after dev

  const { term, searchType } = context.query;

  let data;
  if (mockData) {
    data = searchType === "image" ? mockedResponse.image : mockedResponse.all;
  } else {
    const startIndex = context.query.start || "1";
    const url = `https://www.googleapis.com/customsearch/v1?key=${
      process.env.SEARCH_API_KEY
    }&cx=${process.env.SEARCH_CONTEXT_KEY}&q=${term}${
      searchType === "image" ? "&searchType=image" : ""
    }&start=${startIndex}`;

    const response = await fetch(url);
    data = await response.json();
  }

  return {
    props: {
      searchResults: data,
    },
  };
};
