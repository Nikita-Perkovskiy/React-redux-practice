import React from "react";
import { Route, Routes } from "react-router-dom";
import Block1 from "../../Components/Block1/Block1";
import Block2 from "../../Components/Block2/Block2";
import Block3 from "../../Components/Block3/Block3";
import Header from "../../Components/Header/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Block1 />} />
        <Route path="Block2" element={<Block2 />} />
        <Route path="Block3" element={<Block3 />} />
      </Routes>
    </>
  );
};

export default MainPage;
