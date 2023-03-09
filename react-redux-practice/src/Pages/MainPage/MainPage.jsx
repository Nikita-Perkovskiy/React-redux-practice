import React from "react";
import { Route, Routes } from "react-router-dom";
import Block3 from "../../Components/cvResult/cvResult";
import Counter from "../../Components/Counter/Counter";
import Header from "../../Components/Header/Header";
import Form from "../FormPage/FormPage";
import CommentPage from "../CommentPage/CommentPage";

const MainPage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="Block2" element={<Form />} />
        <Route path="Block3" element={<Block3 />} />
        <Route path="CommentPage" element={<CommentPage />} />
      </Routes>
    </>
  );
};

export default MainPage;
