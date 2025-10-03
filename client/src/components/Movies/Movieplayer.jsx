import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { data } from "../Data/Data.jsx";

const Movieplayer = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const filterMovie = data.filter((movie) => movie.id == id);
    setMovie(filterMovie[0]);
  }, [id]);

  return (
    <div className=" bg-[#525252] py-10">
      <div class="flex px:1 sm:px-15 h-[50vh] py-10 sm:h-[90vh] items-center mx-auto">
        <ReactPlayer
          url={movie.videoUrl}
          width="100%"
          height="100%"
          playing
          controls
        />
      </div>

      <div
        key={movie.id}
        class="flex text-white sm:gap-8 sm:px-15 sm:pb-10 mx-auto lg:flex-row flex-col"
      >
        <img
          src={movie.imgSrc}
          alt={movie.title}
          className=" w-60 h-80 mx-auto object-cover mb-2"
        />

        <div className="flex flex-col text-center sm:text-left ">
          <h2 class=" text-xl sm:text-2xl mb-2">{movie.title}</h2>
          <p className="mb-2 text-base ">{movie.description}</p>
          <p className="text-base">Genre: {movie.genre} </p>
        </div>
      </div>
    </div>
  );
};

export default Movieplayer;
