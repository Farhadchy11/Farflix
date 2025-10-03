import { Outlet, Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar.jsx";
import Footer from "../Shared/Footer/Footer.jsx";

const MainLayout = () => {
  const Sidebar = () => {
    return (
      <div className="flex flex-row w-[100%] sm:items-center  sm:w-1/10 sm:flex-col sm:gap-3 sm:p-3 bg-black text-white sm:min-h-screen">
        <ul className="flex mx-auto gap-4 sm:gap-0  sm:flex-col sm:space-y-4">

          <Link
            class="flex items-center sm:gap-3 sm:p-3 hover:bg-gray-800 rounded cursor-pointer"
            to={"/Home"}
          >
            Movies
          </Link>

          <Link
            to="/Blogs"
            className="flex items-center sm:gap-3 sm:p-3 hover:bg-gray-800 rounded cursor-pointer"
          >
            <span>Blogs</span>
          </Link>
        </ul>
      </div>
    );
  };

  return (
    <div className={`min-h-screen w-screen flex flex-col`}>
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <div className="flex-1 sm:w-9/10 ">
          <div className=" min-h-screen flex flex-col bg-white text-gray-900 ">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
