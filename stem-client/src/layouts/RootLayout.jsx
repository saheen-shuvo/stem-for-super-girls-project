import { Outlet } from "react-router";
import Navbar from "../pages/Home/Home/shared/navbar/Navbar";
import Footer from "../pages/Home/Home/shared/footer/Footer";

const RootLayout = () => {
  return (
    <div data-theme="light" className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="grow">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
