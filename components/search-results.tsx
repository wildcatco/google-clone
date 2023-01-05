import parse from "html-react-parser";

interface SearchResult {
  cacheId: string;
  title: string;
  htmlSnippet: string;
  link: string;
  formattedUrl: string;
}

interface Props {
  results: any;
}

const SearchResults: React.FC<Props> = ({ results }) => {
  const {
    items,
    searchInformation: { formattedTotalResults, formattedSearchTime },
  } = results;

  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-44">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {formattedTotalResults} results ({formattedSearchTime} seconds)
      </p>
      {items.map((result: SearchResult) => (
        <div key={result.cacheId} className="max-w-xl mb-8">
          <div>
            <a className="peer text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <br />
            <a
              className="peer-hover:underline hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-lg font-medium text-blue-800 inline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{parse(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
