import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [basketIsFull, setbasketIsFull] = useState(false);
  const [basketCount, setbasketCount] = useState(0);

  const addbasketCount = () => {
    setbasketCount(basketCount + 1);
  };

  const activeBasketIsFull = () => {
    setbasketIsFull(true);
  };

  return (
    <div className="App">
      <MainPage
        basketIsFull={basketIsFull}
        basketCount={basketCount}
        addbasketCount={addbasketCount}
        activeBasketIsFull={activeBasketIsFull}
      />
    </div>
  );
}

export default App;
