import { useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import FilterByRegion from "../components/FilterByRegion";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    const matchSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <>
      <section className="filter-container w-full md:flex md:justify-between items-center dark:bg-neutral-blue-950-dark-mode dark:text-white">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterByRegion
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </section>
      {loading ? (
        <p className="text-center text-black dark:text-white">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <section className="display-countries grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <Link key={country.name} to={`/country/${country.name}`}>
                <article className="h-full rounded-md [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.03)] bg-white flex flex-col text-left gap-4 hover:[box-shadow:0px_4px_12px_0px_hsla(0,0%,0%,0.1)] transition-shadow duration-200 dark:bg-neutral-blue-900-dark-mode dark:shadow-2xl">
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
              </Link>
            ))
          ) : (
            <p className="text-center text-black-800 dark:text-white">
              No countries found matching your filters.
            </p>
          )}
        </section>
      )}
    </>
  );
};

export default HomePage;
