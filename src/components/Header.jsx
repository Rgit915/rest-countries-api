import { Link } from "react-router-dom"

const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className="flex justify-between py-8 px-6 lg:px-12">
        <h1 className="font-extrabold leading-5 text-black-800  dark:text-white">
         <Link  to="/">Where in the world?</Link>
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
  )
}

export default Header