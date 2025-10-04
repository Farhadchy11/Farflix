import { createBrowserRouter } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";
import Home from "../components/Movies/Home.jsx";
import Movieplayer from "../components/Movies/Movieplayer.jsx";
import BlogsDetails from "../components/Blogs/BlogsDetails.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import UserHome from "../components/Dashboard/UserHome.jsx";
import Outlet from "../Outlet/Outlet.jsx";
import Layout from "../Outlet/Layout.jsx";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "Layout",
    element: <Layout />,
    children: [
      {
        path: "Movieplayer/:id",
        element: <Movieplayer />,
      },
      {
        path: "BlogsDetails/:id",
        element: <BlogsDetails />,
      },
      {
        path: "LoginForm",
        element: <LoginForm />,
      },
      {
        path: "RegisterForm",
        element: <RegisterForm />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "UserHome",
        element: <UserHome />,
      },
    ],
  },
]);

export default Routers;
