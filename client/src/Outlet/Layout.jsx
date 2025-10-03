import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar.jsx";
import Footer from "../Shared/Footer/Footer.jsx";

const MainLayoutu = () => {
  return (
    <div className={`min-h-screen w-screen flex flex-col`}>
      <Navbar />
      <div className="flex">
        <div className="flex-1  transition-all">
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayoutu;
