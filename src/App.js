import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questinsData, setQuestionData] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and answer about Login</h3>
        <section className="info">
          {questinsData.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
