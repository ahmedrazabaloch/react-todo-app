import React from "react";
import "./addBookMark.css";
import TITLE from "../assets/images/title.png";
import InputApp from "./InputApp.jsx";
import Label from "./Label.jsx";
import { TbWorldCode } from "react-icons/tb";
import { PiLinkBold } from "react-icons/pi";
import { Flex } from "antd";
import POSTER from "../assets/images/manStanding.png";
import { useState } from "react";

const AddBookMark = () => {
  const [webName, SetwebName] = useState("");
  const [webURL, SetwebURL] = useState("");

  const handleWebSiteName = (event) => {
    SetwebName(event.target.value);
  };

  const handleWebSiteURL = (event) => {
    SetwebURL(event.target.value);
  };

  const addData = () => {
    console.log("webName--", webName);
    console.log("webURL--", webURL);
  };

  return (
    <div className="add-bookmark">
      <img src={TITLE} alt="just a tag" />
      <p className="page-title">Bookmark your favorite sites.</p>
      <div className="my-2">
        <Flex className="inputGroup">
          <TbWorldCode />
          <Label value={"Website Name"} htmlFor={"inputName"} />
        </Flex>
        <InputApp
          placeholder="Type bookmark name .."
          id="inputName"
          value={webName}
          onChange={handleWebSiteName}
        />
      </div>
      <div>
        <Flex className="inputGroup">
          <PiLinkBold />
          <Label value={"Website URL"} htmlFor={"inputUrl"} />
        </Flex>
        <InputApp
          placeholder="Add website URL .."
          id="inputUrl"
          value={webURL}
          onChange={handleWebSiteURL}
        />
      </div>
      <div className="btnContainer">
        <button className="Btn" onClick={addData}>
          Submit
        </button>
      </div>
      <div className="imgContainer">
        <img src={POSTER} alt="Man Standing" className="posterImg" />
      </div>
    </div>
  );
};

export default AddBookMark;
