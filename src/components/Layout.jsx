import Header from "./Header";
import { Outlet } from "react-router-dom";


const Layout = ({darkMode, setDarkMode}) => {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="px-6 lg:px-12">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
