import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
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
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
