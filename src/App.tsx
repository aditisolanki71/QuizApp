import React, { useState } from 'react';
import { fetchQuestions } from "./API"
//Question Types
import { Difficulty, QuestionState } from "./API"
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10;
function App() {

  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY));
  //when start quiz, this fun will be fire up
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  //Trigger, whn user select answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if(!gameOver) {
        //get users answer
        const answer = e.currentTarget.value;
        //check answer against correct answer
        const isCorrect = questions[number].correct_answer === answer;
        if(isCorrect) {
          setScore(prev => prev + 1);
          //save answer in the array for user answers
          const answerObject = {
            question: questions[number].question,
            answer,
            correct: isCorrect,
            correctAnswer: questions[number].correct_answer
          };
          setUserAnswers((prev) => [...prev, answerObject ]);
        }
      }
  }

  //whn user click on next que
  const nextQuestion = () => {
    //move on the next question if not the last question
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS + 1) {
      setGameOver(true)
    }
    else {
      setNumber(nextQuestion);
    }
  }
  return (

     <>
     <GlobalStyle />
      <Wrapper>
        <h1>React Quiz App</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        ) : null }
        {!gameOver ? (<p className="score">Score:- {score}</p>) : null }
        {loading ? (<p>Loading questions...</p>) : null}
        {!loading && !gameOver ? 
          (
            <QuestionCard 
              questionNumber={number+1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          ) : null 
        }
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null 
        }
        </Wrapper>
       </>
  );
}

export default App;
