import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const filteredBlog = async () => {
      try {
        const response = await fetch(
          `https://farflix-server-auq8z9rls-farhads-projects-63b63f68.vercel.app//allblogs/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      }
    };

    filteredBlog();
  }, [id]);

  return (
    <div class=" flex flex-col  bg-[#525252] py-6 sm:py-16  px-2 sm:px-40 text-white min-h-screen ">
      <div class=" ">
        <h1 class=" text-base sm:text-lg font-medium mb-3 sm:text-2xl sm:mb-6">
          {blog.title}
        </h1>
        <img class="mb-6" src={blog.imgSrc} alt="" />
        <p class="text-base font-light sm:text-lg ">{blog.des}</p>
      </div>
      <div class="  rounded-lg shadow-md pt-3 sm:pt-6 ">
        <h3 class="text-lg font-semibold mb-4">Leave a Comment</h3>
        <form>
          <div class="mb-4">
            <label for="comment" class="block  text-sm font-bold mb-2">
              Your Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write your comment here..."
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="name" class="block  text-sm font-bold mb-2">
              Name (Optional):
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div class="flex items-center justify-end">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogsDetails;
