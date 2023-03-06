import React from "react";
import { Route, Routes } from "react-router-dom";
import Block1 from "../../Components/Block1/Block1";
import Block3 from "../../Components/Block3/Block3";
import Header from "../../Components/Header/Header";
import Form from "../FormPage/FormPage";

const MainPage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Block1 />} />
        <Route path="Block2" element={<Form />} />
        <Route path="Block3" element={<Block3 />} />
      </Routes>
    </>
  );
};

export default MainPage;
