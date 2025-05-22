import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}
      >
        <Route index element={<HomePage />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="*" element={<h1 className="text-center mt-12 text-xl font-semibold dark:text-white">404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
