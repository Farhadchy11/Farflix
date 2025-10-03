import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data/Data.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const SeriesSlider = () => {
  const [TvSeries, setTvSeries] = useState([]);
  const [TvSeriesCategory, setTvSeriesCategory] = useState("Series");

  useEffect(() => {
    const filteredMovies = data.filter(
      (series) => series.category === TvSeriesCategory
    );

    setTvSeries(filteredMovies);
  }, [TvSeriesCategory]);

  return (
    <div className="w-full sm:px-6 pb-5 sm:py-6 bg-black text-white relative ">
      <h1 class=" pl-4 sm:text-left text-lg sm:text-1xl font-extrabold text-white pb-5  bg-clip-text text-transparent">
        TV SERIES
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
        {TvSeries.map((tvSeries) => (
          <SwiperSlide key={tvSeries.id}>
            <Link
              to={`/Layout/Movieplayer/${tvSeries.id}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={tvSeries.imgSrc}
                class="w-60 h-80 mx-auto object-cover pb-2"
              />
            </Link>
            <h3 class="text-center"> {tvSeries.title} </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SeriesSlider;
