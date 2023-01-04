import Head from "next/head";
import SearchHeader from "../components/search-header";

const SearchPage = () => {
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
