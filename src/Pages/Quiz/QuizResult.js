import React from 'react'
import { questions } from './QuizData'
import "./QuizResult.css"
const QuizResult = ({score,CorrectAns,handlePlayAgain,minssend,secssend}) => {
  return (
    <div className='score-section'>
        <h2>Completed!</h2>
        <h4><span>Total Score :</span> {score}/{5*questions.length}</h4>
        <h4><span>Your Correct Question :</span> {CorrectAns}/{questions.length}</h4>
        <h3><span>Total Time Taken: </span> {4-minssend}mins : {59-secssend}secs</h3>
        <button className='retry-btn' onClick={handlePlayAgain}>Try Again</button>
    </div>
  )
}

export default QuizResult