import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import SearchHeader from "../components/search-header";
import mockedResponse from "../data/mock-response";

interface Props {
  searchResults: any;
}

const SearchPage: NextPage<Props> = ({ searchResults }) => {
  return (
    <div>
      <Head>
        <title>Google Search</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const mockData = true; // ! Should set false after dev

  let data;
  if (mockData) {
    data = mockedResponse;
  } else {
    const { term, searchType } = context.query;
    const url = `https://www.googleapis.com/customsearch/v1?key=${
      process.env.SEARCH_API_KEY
    }&cx=${process.env.SEARCH_CONTEXT_KEY}&q=${term}${
      searchType === "image" ? "&searchType=image" : ""
    }`;

    const response = await fetch(url);
    data = await response.json();
  }

  return {
    props: {
      searchResults: data,
    },
  };
};
