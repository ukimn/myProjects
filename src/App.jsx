import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const answersAndQuestions = [
    {
      question: "What does the SEO stand for?",
      options: [
        "Search Engine Optomiztation",
        "Search Engine Orcalization",
        "Search Encounter Orphans",
        "Object Orainted Programmin",
      ],
      choice: "Search Engine Optomiztation",
      id: 1,
    },
    {
      question: "When did Javascript born?",
      options: ["1979", "1992", "1991", "1994"],
      choice: "1992",
      id: 2,
    },
    {
      question: "Why does the human cry?",
      options: [
        "to have fun",
        "to feel better",
        "to kill thier feelings",
        "to sleep faster",
      ],
      choice: "to feel better",
      id: 3,
    },
    {
      question: "What does the HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyper Tource Markup Product",
        "Hyper Tree Markup Thing",
        "Hyper Train Machine Loaned",
      ],
      choice: "Hyper Text Markup Language",
      id: 4,
    },
    {
      question: "Who is the creator of this quiz?",
      options: ["Moaath", "Ahmed", "Sajed", "Adam"],
      choice: "Moaath",
      id: 5,
    },
    {
      question: "when did the world war 2 start?",
      options: ["1914", "1949", "1954", "1934"],
      choice: "1934",
      id: 6,
    },
  ];

  function checkAnswer(question, answer) {
    if (answer == answersAndQuestions[question].choice) {
      setScore((s) => s + 1);
      setNext((n) => n + 1);
      if (next === answersAndQuestions.length - 1) {
        setNext(0);
      }
    } else {
      setScore((s) => s - 1);
    }
  }

  return (
    <>
      <h1 style={{ color: "#fff", fontSize: "2rem", textAlign: "center" }}>
        {score}
      </h1>
      <div className="card">
        <div className="right">
          <h1>Quiz</h1>
          <h3>
            Question Number {answersAndQuestions[next].id}/
            {answersAndQuestions.length}
          </h3>
          <h3>{answersAndQuestions[next].question}</h3>
        </div>
        <div className="left">
          <h1>Answers</h1>
          <div className="options">
            {answersAndQuestions[next].options.map((option, index) => {
              return (
                <button
                  key={index}
                  onClick={() => checkAnswer(next, option)}
                  className="buttonAnswer"
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Link to={"/arabicEdition"}>
        <button
          className="button"
          style={{ marginTop: "40px", textAlign: "center", fontSize: "2rem" }}
        >
          Arabic Edition
        </button>
      </Link>
    </>
  );
};

export default App;
