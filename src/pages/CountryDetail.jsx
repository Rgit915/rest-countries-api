import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the selected country data
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v2/name/${name}?fullText=true`);
        if (!res.ok) throw new Error("Country not found");
        const data = await res.json();
        const countryData = data[0];
        setCountry(countryData);

        // Fetch border countries if available
        if (countryData.borders?.length > 0) {
          const bordersRes = await fetch(
            `https://restcountries.com/v2/alpha?codes=${countryData.borders.join(",")}`
          );
          const bordersData = await bordersRes.json();
          setBorderCountries(bordersData);
        } else {
          setBorderCountries([]);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) return <p className="text-center text-black dark:text-white">Loading...</p>;
  if (error)
    return (
      <div className="text-center text-black dark:text-white">
        <p>{error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-gray-300 dark:bg-neutral-blue-900-dark-mode text-black dark:text-white rounded"
        >
          Back
        </button>
      </div>
    );

  return (
    <article className="py-8 text-black dark:text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-6 py-2 bg-white dark:bg-neutral-blue-900-dark-mode shadow rounded text-black dark:text-white cursor-pointer hover:bg-neutral-grey-light-mode-input"
      >
        ← Back
      </button>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-full max-h-96 object-contain"
        />

        <div className="space-y-4">
          <h2 className="text-2xl lg:text-4xl font-extrabold">{country.name}</h2>
          <div className="lg:flex items-center justify-between mb-10">
            <div>
              <p>
                <strong>Native Name:</strong> {country.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong> {country.topLevelDomain?.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country.currencies?.map((c) => c.name).join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {country.languages?.map((l) => l.name).join(", ")}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">Border Countries:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {borderCountries.length > 0 ? (
                borderCountries.map((bCountry) => (
                  <Link
                    to={`/country/${bCountry.name}`}
                    key={bCountry.alpha3Code}
                    className="px-3 py-1 bg-white dark:bg-neutral-blue-900-dark-mode text-sm shadow rounded text-black dark:text-white hover:bg-neutral-grey-light-mode-input dark:hover:bg-neutral-blue-800-dark-mode transition"
                  >
                    {bCountry.name}
                  </Link>
                ))
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CountryDetail;
