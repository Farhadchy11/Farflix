import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data/Data.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const TvShowsSlider = () => {
  const [TvShow, setTvShow] = useState([]);
  console.log(TvShow);
  const [TvShowCategory, setTvShowCategory] = useState("show");

  useEffect(() => {
    const filteredShows = data.filter(
      (show) => show.category === TvShowCategory
    );

    setTvShow(filteredShows);
  }, [TvShowCategory]);

  return (
    <div className="w-full sm:px-6 pb-5 sm:py-6 bg-black text-white relative ">
      <h1 class=" pl-4 sm:text-left text-lg sm:text-1xl font-extrabold text-white pb-5  bg-clip-text text-transparent">
        TV SHOWS
      </h1>
      <Swiper
        slidesPerView={3}
        modules={[Navigation]}
        navigation
        breakpoints={{
          // when window width is >= 300px
          300: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {TvShow.map((show) => (
          <SwiperSlide key={show.id}>
            <Link
              to={`/Layout/Movieplayer/${show.id}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={show.imgSrc}
                class="w-60 h-80 mx-auto object-cover pb-2"
              />
            </Link>
            <h3 class="text-center"> {show.title} </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TvShowsSlider;
