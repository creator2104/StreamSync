const Shimmer = () => {
  return (
    <div className="flex flex-wrap ml-24">
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className="w-72 h-64 m-2 p-2 bg-gray-200 animate-pulse rounded-lg"
        >
          <div className="w-full h-40 bg-gray-300 rounded-md mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
