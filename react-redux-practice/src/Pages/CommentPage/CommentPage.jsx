import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCity,
  selectWeatherCity,
  selectLoader,
} from "../../selects/weather.select";
import { fetchWeathers } from "../../store/Actions";

const CommentPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const loading = useSelector(selectLoader);
  const weatherCity = useSelector(selectWeatherCity);

  useEffect(() => {
    dispatch(fetchWeathers(city));
  }, [city]);

  console.log("Forecast", weatherCity);
  console.log("Forecast", city);

  return (
    <>
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#04260e" }}
      ></div>
    </>
  );
};

export default CommentPage;
