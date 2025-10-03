import { Link } from "react-router-dom";

const BlogsItems = ({ Blogs }) => {
  return (
    <Link
      to={`/Layout/BlogsDetails/${Blogs._id}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div key={Blogs._id} class="mx-auto  shadow-md bg-black pb-4 sm:pb-5">
        <img
          src={Blogs.imgSrc}
          class=" max-h-50 mx-auto object-scale-down mb-3"
        />
        <div class="text-white ">
          <h3 class="text-base sm:text-lg font-medium mb-1">{Blogs.title}</h3>
          <button class="text-base font-light">Read The Article</button>
        </div>
      </div>
    </Link>
  );
};

export default BlogsItems;
