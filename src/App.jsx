import data from "./data.json";
const App = () => {
  return (
    <>
      <header className="flex justify-between py-8 px-6 lg:px-12">
        <h1 className="font-extrabold leading-5 text-black-800">
          Where in the world?
        </h1>
        <div className="flex items-center gap-3">
          <i className="fa-regular fa-moon"></i>
          <p className="font-semibold text-[12px] text-black-800">Dark Mode</p>
        </div>
      </header>
      <main>
        <section className="filter-container w-full md:flex md:justify-between items-center ">
          <div className="search [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)] font-normal text-[12px] leading-5 text-neutral-grey-light-mode-input rounded-md flex gap-6 items-center bg-white py-4 px-6 w-full md:w-1/2">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search for a country ...</p>
          </div>
          <div className="relative filter w-2/3 my-12 md:w-1/5 ">
            <div className="flex justify-between items-center py-4 px-6 rounded-md [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)]">
              <p className="font-normal text-[12px] leading-5 text-black-800">
                Filter by Region
              </p>
              <i class="fa-solid fa-chevron-down"></i>
            </div>

            <ul className="hidden absolute region-list [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)] p-4 text-left gap-2 w-full">
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
              className="h-full rounded-md [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.03)] bg-white flex flex-col text-left gap-4 hover:[box-shadow:0px_4px_12px_0px_hsla(0,0%,0%,0.1)] transition-shadow duration-200"
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="country-detail px-4 py-6 flex flex-col gap-2">
                <h2 className="font-extrabold text-lg leading-7 text-black-800 mb-4">
                  {country.name}
                </h2>
                <p className="text-sm leading-4 font-light">
                  <span className="font-semibold text-black-800">
                    Population:{" "}
                  </span>
                  {country.population.toLocaleString()}
                </p>
                <p className="text-sm leading-4 font-light">
                  <span className="font-semibold text-black-800">Region: </span>
                  {country.region}
                </p>
                <p className="text-sm leading-4 font-light">
                  <span className="font-semibold text-black-800">
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
