import { useState, useEffect } from "react";
import data from "./data.json";

import SearchInput from "./components/SearchInput";
import FilterByRegion from "./components/FilterByRegion";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // On initial load, check if a theme preference is saved in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  // Update the HTML root class and save theme preference to localStorage whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <header className="flex justify-between py-8 px-6 lg:px-12">
        <h1 className="font-extrabold leading-5 text-black-800  dark:text-white">
          Where in the world?
        </h1>

        <button
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <i className="fa-solid fa-moon"></i>
              <p className="font-semibold text-[12px] text-black-800 dark:text-white">
                Dark Mode
              </p>
            </>
          ) : (
            <>
              <i className="fa-regular fa-moon"></i>
              <p className="font-semibold text-[12px] text-black-800 dark:text-white">
                Light Mode
              </p>
            </>
          )}
        </button>
      </header>
      <main>
        <section className="filter-container w-full md:flex md:justify-between items-center dark:bg-neutral-blue-950-dark-mode dark:text-white">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterByRegion
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </section>

        <section className="display-countries grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data
            .filter((country) => {
              const matchRegion = selectedRegion
                ? country.region === selectedRegion
                : true;
              const matchSearch = country.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
              return matchRegion && matchSearch;
            })
            .map((country) => (
              <article
                key={country.name}
                className="h-full rounded-md [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.03)] bg-white flex flex-col text-left gap-4 hover:[box-shadow:0px_4px_12px_0px_hsla(0,0%,0%,0.1)] transition-shadow duration-200 dark:bg-neutral-blue-900-dark-mode dark:shadow-2xl"
              >
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <div className="country-detail px-4 py-6 flex flex-col gap-2 dark:bg-neutral-blue-900-dark-mode dark:text-white">
                  <h2 className="font-extrabold text-lg leading-7 text-black-800 mb-4 dark:text-white">
                    {country.name}
                  </h2>
                  <p className="text-sm leading-4 font-light">
                    <span className="font-semibold text-black-800 dark:text-white">
                      Population:{" "}
                    </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p className="text-sm leading-4 font-light">
                    <span className="font-semibold text-black-800 dark:text-white">
                      Region:{" "}
                    </span>
                    {country.region}
                  </p>
                  <p className="text-sm leading-4 font-light">
                    <span className="font-semibold text-black-800 dark:text-white">
                      Capital:{" "}
                    </span>
                    {country.capital}
                  </p>
                </div>
              </article>
            ))}
          {
            // Check if filtered results are empty
            data.filter((country) => {
              const matchRegion = selectedRegion
                ? country.region === selectedRegion
                : true;
              const matchSearch = country.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
              return matchRegion && matchSearch;
            }).length === 0 && (
              <p className="text-center col-span-full text-black-800 dark:text-white">
                No countries found matching your filters.
              </p>
            )
          }
        </section>
      </main>
    </>
  );
};

export default App;
