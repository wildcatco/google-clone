import PaginationButtons from "./pagination-buttons";

/* eslint-disable @next/next/no-img-element */
interface SearchResult {
  title: string;
  link: string;
  image: {
    contextLink: string;
  };
  displayLink: string;
}

interface Props {
  results: any;
}

const ImageResults: React.FC<Props> = ({ results }) => {
  const { items } = results;
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-4">
        {items.map((result: SearchResult) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                  src={result.link}
                  alt={result.title}
                />
                <h2 className="truncate group-hover:underline">
                  {result.title}
                </h2>
                <p className="group-hover:underline text-sm text-gray-600">
                  {result.displayLink}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageResults;
