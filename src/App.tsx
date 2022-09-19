import React, { useState } from 'react';
import { fetchQuestions } from "./API"
//Question Types
import { Difficulty } from "./API"
import QuestionCard from "./components/QuestionCard"
const TOTAL_QUESTIONS = 10;
function App() {

  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY));

  //when start quiz, this fun will be fire up
  const startTrivia = async () => {

  }
  //Trigger, whn user select answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  //whn user click on next que
  const nextQuestion = () => {

  }

  return (
     <div className="App">
        <h1>React Quiz App</h1>
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        <p className="score">Score:-</p>
        <p>Loading questions...</p>
        {/* <QuestionCard 
          questionNumber={number+1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        /> */}
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
     </div>
  );
}

export default App;
