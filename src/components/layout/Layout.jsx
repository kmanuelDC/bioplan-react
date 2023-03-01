import { Outlet } from "react-router-dom";
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
      <footer></footer>
    </>
  );
};

export default Layout;
