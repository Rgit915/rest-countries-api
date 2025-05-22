const NotFound = () => {
  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center text-center mt-20">
      <h1 className="text-3xl lg:text-6xl font-bold dark:text-white">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Sorry, the page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
