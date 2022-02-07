import React, { useState } from "react";
import "./app.css";
import CountdownComponent from "./components/CountdownComponent";
import Questions from "./components/Questions";

function App() {
  let [questionNumber, setQuestionNumber] = useState<number>(1);
  const [stop, setStop] = useState<boolean>(false);

  const onDone = () => {};

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1>You lost </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <CountdownComponent
                  setStop={setStop}
                  questionNumber={questionNumber}
                  onDone={onDone}
                />
                s
              </div>
            </div>
            <div className="bottom">
              <Questions
                setStop={setStop}
                data={data}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
