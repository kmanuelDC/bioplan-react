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
<<<<<<< HEAD
      <footer></footer>
=======
      <footer>
        <BoxFooter />
      </footer>
>>>>>>> 4a889de13b6f812df0f2bc9d39455fd8068a2462
    </>
  );
};

export default Layout;
