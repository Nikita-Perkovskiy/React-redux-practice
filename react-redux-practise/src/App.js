import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { sendRequest } from "./Helpers/sendRequest";
import { API_KEY_3, IMG_URL, API_URL } from "./Helpers/API";

function App() {
  const [moviesTV, setMoviesTV] = useState({});
  const [moviesCinema, setMoviesCinema] = useState({});

  useEffect(() => {
    sendRequest(`${API_URL}/discover/tv?api_key=${API_KEY_3}`).then((data) => {
      setMoviesTV(data);
    });
  }, [moviesTV]);

  useEffect(() => {
    sendRequest(`${API_URL}/discover/movie?api_key=${API_KEY_3}`).then(
      (data) => {
        setMoviesCinema(data);
      }
    );
  }, [moviesCinema]);

  return (
    <div className="App">
      <MainPage
        moviesCinema={moviesCinema}
        moviesTV={moviesTV}
        IMG_URL={IMG_URL}
      />
    </div>
  );
}

export default App;
