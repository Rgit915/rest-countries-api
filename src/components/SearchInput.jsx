const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)] font-normal text-[12px] leading-5 text-neutral-grey-light-mode-input rounded-md flex gap-6 items-center bg-white py-4 px-6 w-full md:w-1/3 dark:bg-neutral-blue-900-dark-mode dark:text-white">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent outline-none w-full text-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
