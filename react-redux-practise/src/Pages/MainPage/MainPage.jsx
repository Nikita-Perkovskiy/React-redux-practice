import React from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";

const MainPage = (props) => {
  const { basketIsFull, basketCount, addbasketCount, activeBasketIsFull } =
    props;

  return (
    <>
      <Header
        basketIsFull={basketIsFull}
        basketCount={basketCount}
        addbasketCount={addbasketCount}
        activeBasketIsFull={activeBasketIsFull}
      />
      <Card />
    </>
  );
};

export default MainPage;
