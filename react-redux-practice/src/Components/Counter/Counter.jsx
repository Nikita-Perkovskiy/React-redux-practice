import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter } from "../../selects";
import { countIncrease, countDecrease } from "../../store/Actions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);

  const increase = () => {
    dispatch(countIncrease());
  };

  const decrease = () => {
    dispatch(countDecrease());
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#270303" }}
    >
      <div className="mx-auto" style={{ width: "200px" }}>
        <h1 className="mx-auto" style={{ color: "#fefefefe", width: "40px" }}>
          {count}
        </h1>
        <div className="mx-auto" style={{ width: "100px" }}>
          <Button className="mx-1" onClick={increase}>
            +
          </Button>
          <Button className="mx-1" onClick={decrease}>
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
