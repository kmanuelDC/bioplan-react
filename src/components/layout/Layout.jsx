import { Outlet } from "react-router-dom";
import Carrousel from "../carousel/carousel";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <>
      <header>
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
