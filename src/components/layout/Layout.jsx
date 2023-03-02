import { Outlet } from "react-router-dom";
import { BoxFooter } from "../boxFooter";
import { Navbar } from "../navbar";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <BoxFooter />
      </footer>
    </>
  );
};

export default Layout;
