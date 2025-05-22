import { useState } from "react";

const FilterByRegion = ({ selectedRegion, setSelectedRegion }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative filter w-2/3 my-12 md:w-1/3 lg:w-1/5 dark:bg-neutral-blue-900-dark-mode dark:text-white rounded-md cursor-pointer">
    <div
        className="flex justify-between items-center py-4 px-6 rounded-md [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <p className="font-normal text-[12px] leading-5 text-black-800 dark:text-white">
          {selectedRegion || "Filter by Region"}
        </p>
        <i className={`fa-solid ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>

      {dropdownOpen && (
        <ul className="absolute region-list [box-shadow:0px_2px_9px_0px_hsla(0,0%,0%,0.05)] p-4 text-left gap-2 w-full rounded-md mt-2 bg-white  dark:bg-neutral-blue-900-dark-mode dark:text-white">
          {regions.map((region) => (
            <li
              key={region}
              className="cursor-pointer hover:underline"
              onClick={() => {
                setSelectedRegion(region);
                setDropdownOpen(false);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterByRegion;
