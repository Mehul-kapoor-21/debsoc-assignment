import React, { useState, useEffect } from "react";
import { questions } from "./QuizData";
import QuizResult from "./QuizResult";
import "./Quiz.css";
import Navbar from "../../Components/Navbar/Navbar";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [CorrectAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  //const [clicked, setClicked] = useState(false);
  const [secs, setSecs] = useState(59);
  const [mins, setMins] = useState(4);
  const [minssend, setMinsSend] = useState(0);
  const [secssend, setsecsSend] = useState(0);

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5);
      setCorrectAns(CorrectAns + 1);
    }
    //setClicked(true);
  };

  const handleNextOption = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      stop();
      setShowResult(true);
    }
    // setClicked(false);
  };

  const handleBackOption = () => {
    if (currentQuestion === 0) {
      const nextQuestion = 0;
      setCurrentQuestion(nextQuestion);
    } else {
      const nextQuestion = currentQuestion - 1;
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
    setMins(4);
    setSecs(59);
  };

  var timer;
  const stop = () => {
    setShowResult(true);
    setMinsSend(mins);
    setsecsSend(secs);
    clearInterval(timer);
  };

  useEffect(() => {
    timer = setInterval(() => {
      setSecs(secs - 1);
      if (secs === 0) {
        setMins(mins - 1);
        setSecs(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (mins < 0) {
      setMins(0);
      setSecs(0);
      setMinsSend(0);
      setsecsSend(0);
      setShowResult(true);
      clearInterval(timer);
    }
  }, [mins]);

  return (
    <div className="quiz">
      <Navbar />

     
      <div className="app">
        {showResult ? (
          <QuizResult
            score={score}
            CorrectAns={CorrectAns}
            handlePlayAgain={handlePlayAgain}
            minssend={minssend}
            secssend={secssend}
          />
        ) : (
          <div>
             <div className="heading-div">
        <div className="mcq-heading">
          <h1>
            Retention Test <span>MCQ based questions only</span>
          </h1>
        </div>
        <div className="mcq-timmer">
          <button onClick={stop}>submit</button>
          <div className="mcq-time">
            <i class="fa-regular fa-clock mcq-clock"></i>
            <h3>
              {mins < 10 ? "0" + mins : mins}:{secs < 10 ? "0" + secs : secs}
            </h3>
            <p>left</p>
          </div>
        </div>
      </div>

            <div className="mcq-question">
              <div className="question-section">
                <div className="question-text">
                  {currentQuestion + 1}.{" "}
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((ans, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswerOption(ans.isCorrect)}
                    >
                      {ans.answerText}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="actions">
              <button onClick={handleBackOption}>Back (1)</button>
              <div className="btns">
                <button onClick={handleBackOption}><i class="fa-solid fa-angle-left"></i></button>
                <p>
                  {currentQuestion + 1}/{questions.length}
                </p>
                <button onClick={handleNextOption}><i class="fa-solid fa-angle-right"></i></button>
              </div>
              <button onClick={handleNextOption}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
