import React from "react";
import { AnswerObject } from "../App";
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
type questionCardProps = {
   question: string;
   answers: string[];
   callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
   userAnswer: AnswerObject | undefined;
   questionNumber: number;
   totalQuestions: number;
}
const QuestionCard: React.FC<questionCardProps>= ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions
   }) => (
   <Wrapper>
      Question Card 12
       <p className="number">
         Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
         <div>
            {answers.map(answer => (
               <ButtonWrapper   key={answer}
               correct={userAnswer?.correctAnswer === answer}
               userClicked={userAnswer?.answer === answer}
               >
                  <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{ __html: answer}} />
                  </button>
               </ButtonWrapper>
            ))}
         </div>
   </Wrapper>
)
export default QuestionCard;