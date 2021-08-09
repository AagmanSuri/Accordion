import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ questinsData }) => {
  const [btnName, setBtnName] = useState("Plus");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2>question component</h2>
      {questinsData.map((question, index) => {
        return (
          <div key={index}>
            <h3>{question.title}</h3>
            <p>{question.info}</p>
            <button>{btnName}</button>
          </div>
        );
      })}
    </>
  );
};

export default Question;
