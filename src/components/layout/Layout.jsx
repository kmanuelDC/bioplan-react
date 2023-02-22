import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <header className="header">
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
