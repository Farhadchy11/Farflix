import axios from "axios";
import BlogItems from "./BlogsItems";
import { useState, useEffect } from "react";

const AllUsers = () => {
  const [blogs, setBlogs] = useState([]);
  const [techblogs, setTechblogs] = useState([]);
  const [financeblogs, setFinanceblogs] = useState([]);
  const [blogsCategory, setblogsCategory] = useState("Technology");
  const [blogsCategorytwo, setblogsCategorytwo] = useState("finance");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://farflix-16cs.vercel.app/allblogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredBlogs = blogs.filter(
      (article) => article.category === blogsCategory
    );

    setTechblogs(filteredBlogs);
  }, [blogsCategory, blogs]);

  useEffect(() => {
    const filteredBlogs = blogs.filter(
      (article) => article.category === blogsCategorytwo
    );

    setFinanceblogs(filteredBlogs);
  }, [blogsCategorytwo, blogs]);

  return (
    <div className="bg-black text-yellow px-3 min-h-screen ">
      <div className="sm:p-4">
        <h1 class="  text-lg sm:text-1xl font-extrabold text-white pb-5 bg-clip-text text-transparent">
          TECHNOLOGY
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto justify-between gap-4 gap-y-4 ">
          {techblogs.map((Blogs) => (
            <BlogItems Blogs={Blogs} />
          ))}
        </div>
      </div>
      <div className="sm:p-4">
        <h1 class="  text-lg sm:text-1xl font-extrabold text-white pb-5  bg-clip-text text-transparent">
          FINANCE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto justify-between gap-4 gap-y-4 ">
          {financeblogs.map((Blogs) => (
            <BlogItems Blogs={Blogs} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
