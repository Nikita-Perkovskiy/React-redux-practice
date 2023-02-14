import React from "react";
import Header from "../../Components/Header/Header";
import TVslider from "../../Components/TVslider/TVslider";
import PropTypes from "prop-types";

const MainPage = (props) => {
  const { moviesCinema, moviesTV, IMG_URL } = props;
  return (
    <>
      <Header />
      <TVslider moviesTVArray={moviesTV.results} IMG_URL={IMG_URL} />
    </>
  );
};

MainPage.propTypes = {
  moviesCinema: PropTypes.object,
  moviesTV: PropTypes.object,
  IMG_URL: PropTypes.string,
};

export default MainPage;
