import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ questinsData }) => {
  const [btnName, setBtnName] = useState("Plus");
  const [isOpen, setIsOpen] = useState(false);
  const btnHandeler = (id) => {
    console.log(id);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2>question component</h2>
      {questinsData.map((question, index) => {
        return (
          <div key={index}>
            <h3>{question.title}</h3>
            {isOpen || <p>{question.info}</p>}
            <button onClick={() => btnHandeler(question.id)}>{btnName}</button>
          </div>
        );
      })}
    </>
  );
};

export default Question;
