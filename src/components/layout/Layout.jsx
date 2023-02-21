import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
