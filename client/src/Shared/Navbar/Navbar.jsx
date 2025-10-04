import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider.jsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const navItem = (
    <>
      <li class="flex flex-col">
        <Link to="/Home" class="relative px-3 py-2 group">
          Home
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      <li class="flex flex-col">
        <Link to="Layout/AboutUs" class="relative px-3 py-2 group">
          About us
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    </>
  );

  const nav = (
    <>
      <ul class="flex flex-col ">
        <li>
          <Link to="Layout/UserHome">
            <h1 className="py-2 px-4 text-white rounded-lg font-medium hover:bg-gray-800 rounded cursor-pointer">
              Dashboard
            </h1>
          </Link>
        </li>
        <li>
          <Link to="Layout/LoginForm">
            <h1 className="py-2 px-4 text-white rounded-lg font-medium hover:bg-gray-800 rounded cursor-pointer">
              Switch account
            </h1>
          </Link>
        </li>
        <li>
          <h1
            onClick={handleLogout}
            className=" py-2 px-4 text-white rounded-lg font-medium  hover:bg-gray-800 rounded cursor-pointer"
          >
            Logout
          </h1>
        </li>
        <li>
          <h1 className="py-2 px-4 text-white rounded-lg font-medium hover:bg-gray-800 rounded cursor-pointer">
            Setting
          </h1>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <nav className="w-screen  bg-black text-white z-50">
        <div className=" mx-auto px-1 md:px-6 lg:px-10">
          <div className="flex justify-between items-center py-4 ">
            <Link to={"/"} className="group flex items-center ">
              <div className="relative">
                <h1 className=" text-white-500 text-3xl font-bold">Farflix</h1>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            <ul className="hidden md:flex items-center space-x-2 text-base font-medium text-white-800">
              {navItem}
            </ul>

            {/* Mobile Menu with Slide Animation */}
            <div
              class={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isOpenTwo ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div class="py-4 border-t border-white-200 ">
                <ul class="space-y-2 text-base font-medium text-white-800 ">
                  {navItem}
                </ul>
              </div>
            </div>
            {/* Backdrop for mobile menu */}
            {isOpenTwo && (
              <div
                class="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
                onClick={() => setIsOpenTwo(false)}
              ></div>
            )}
            {/* Mobile Menu Button */}

            <button
              onClick={toggleMenuTwo}
              class="md:hidden p-2 rounded-full hover:bg-white-100  transition-all duration-300"
            >
              <div class="relative w-6 h-6">
                <AiOutlineMenu
                  class={`absolute inset-0 text-white-700 transition-all duration-300 ${
                    isOpenTwo
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <AiOutlineClose
                  class={`absolute inset-0 text-white-700  transition-all duration-300 ${
                    isOpenTwo
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </div>
            </button>
            {user ? (
              <div className="flex items-center space-x-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    onClick={toggleMenu}
                    className="w-8 h-8 rounded-full border-2 border-white-400 hover:border-blue-400 transition-colors duration-300"
                  />
                )}
              </div>
            ) : (
              <Link
                to="/Layout/LoginForm"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Login</span>
              </Link>
            )}
          </div>
          <div
            class={`absolute bg-[#525252] z-100 overflow-hidden transition-all translate-x-full duration-500 ease-in-out ${
              isOpen ? "h-[100%] w-[50%] sm:w-[46%] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div class="py-4 ">
              <ul class="space-y-2 text-base font-medium text-white-800 ">
                {nav}
              </ul>
            </div>
          </div>

          {isOpen && (
            <div class=" fixed " onClick={() => setIsOpen(false)}></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
