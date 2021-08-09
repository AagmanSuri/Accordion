import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questinsData, setQuestionData] = useState(data);
  return (
    <>
      <h2>accordion project setup</h2>
      <SingleQuestion questinsData={questinsData} />
    </>
  );
}

export default App;
