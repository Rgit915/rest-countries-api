import { useState, useEffect } from "react";
import data from "./data.json";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
          <div className="search [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)] font-normal text-[12px] leading-5 text-neutral-grey-light-mode-input rounded-md flex gap-6 items-center bg-white py-4 px-6 w-full md:w-1/2 dark:bg-neutral-blue-900-dark-mode dark:text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search for a country ...</p>
          </div>
          <div className="relative filter w-2/3 my-12 md:w-1/5 dark:bg-neutral-blue-900-dark-mode dark:text-white rounded-md cursor-pointer">
            <div className="flex justify-between items-center py-4 px-6 rounded-md [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)]">
              <p className="font-normal text-[12px] leading-5 text-black-800 dark:text-white">
                Filter by Region
              </p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <ul className="hidden absolute region-list [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)] p-4 text-left gap-2 w-full rounded-md mt-2 dark:bg-neutral-blue-900-dark-mode dark:text-white">
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </section>
        <section className="display-countries grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((country) => (
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
        </section>
      </main>
    </>
  );
};

export default App;
