import { useState } from "react";
import { Link } from 'react-router-dom';
import "./App.css";

const ArabicAddition = () => {
    const [next, setNext] = useState(0); 
    const [score, setScore] = useState(0);  
    const answersAndQuestions = [
        {
            question: "من هما الشيخان؟",
            options: ["مسلم والبخاري", "ابن ماجه والنسائي", "على جمعة و محمد بن شمس الدين", "بن حنبل وابو حنيفة"],
            choice: "مسلم والبخاري",
            id: 1
        },
        {
            question: "كم عدد الاحاديث التي رواها جرير بن عبدلله البجلي؟",
            options: ["100", "2", "321", "5374"],
            choice: "100", 
            id: 2
        },
        {
            question: "كم عدد سور القرآن الكريم؟",
            options: ["114", "70", "320", "90"],
            choice: "114", 
            id: 3
        }, 
        {
            question: "ما معنى كلمة الدجى؟",
            options: ["الليل المظلم", "بدر الليل", "ذئب الليل", "محارب الليل"],
            choice: "الليل المظلم",
            id: 4
        }
    ]

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
          <h1>الغاز</h1>
          <h3>
            السؤال رقم {answersAndQuestions[next].id}/
            {answersAndQuestions.length}
          </h3>
          <h3>{answersAndQuestions[next].question}</h3>
        </div>
        <div className="left">
          <h1 style={{textAlign: "center"}}>الاجابات</h1>
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
      <Link to={"/"}>
      <button className="button" style={{marginTop: "40px", textAlign: "center", fontSize: "2rem"}}> 
        Back!
      </button>
      </Link>
    </>
  );
};

export default ArabicAddition;
