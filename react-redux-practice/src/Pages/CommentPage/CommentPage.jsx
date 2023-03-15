import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCity,
  selectWeatherCity,
  selectLoader,
} from "../../selects/weather.select";
import { fetchWeathers } from "../../store/Actions";
import "./index.scss";

const CommentPage = () => {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const loading = useSelector(selectLoader);
  const weatherCity = useSelector(selectWeatherCity);

  useEffect(() => {
    dispatch(fetchWeathers(city));
  }, [city]);

  // console.log("Forecast", weatherCity);
  // console.log("Forecast", city);

  const [taskMessage, setTaskMessage] = useState("");

  const getData = async (e) => {
    e.preventDefault();

    console.log("getData", e);
  };

  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ width: "100%", height: "100vh", backgroundColor: "#04260e" }}
      >
        <div className="mx-auto add-task">
          <form className="form-task" onSubmit={getData}>
            <input
              className="task-massage"
              maxLength={100}
              placeholder="Description of my new task"
              type="text"
              // onChange={updateContent}
              value={taskMessage}
            />
            <button className="task-btn" type="submit">
              Give a task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentPage;
