import { Outlet } from "react-router-dom";
import Carrousel from "../carousel/carousel";
import Navbar from "../navbar/Navbar";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <Carrousel/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
