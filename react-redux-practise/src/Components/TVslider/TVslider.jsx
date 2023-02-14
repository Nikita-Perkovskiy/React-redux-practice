import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "./TVslider.scss";

const TVslider = (props) => {
  const { moviesTVArray, IMG_URL } = props;
  console.log(moviesTVArray);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {moviesTVArray.map(({ original_name, poster_path }, id) => {
          return (
            <SwiperSlide className="film__item" key={id}>
              <div className="film-poster">
                <img src={`${IMG_URL}${poster_path}`} alt={original_name} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

TVslider.propTypes = {
  moviesTVArray: PropTypes.array,
  IMG_URL: PropTypes.string,
};

export default TVslider;
