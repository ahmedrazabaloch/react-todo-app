import React from "react";
import "./addBookMark.css";
import TITLE from "../assets/images/title.png";
import InputApp from "./InputApp.jsx";
const AddBookMark = () => {
  return (
    <div className="add-bookmark">
      <img src={TITLE} alt="just a tag" />
      <p className="page-title">Bookmark your favorite sites.</p>
      <br />
      
      <InputApp placeholder="Type bookmark name .."/>
    </div>
  );
};

export default AddBookMark;
