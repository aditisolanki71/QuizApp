import React from "react";
type questionCardProps = {
   question: string;
   answers: string[];
   callback: any;
   userAnswer: any;
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
   <div>
      Question Card 12
       <p className="number">
         Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
         <div>
            {answers.map(answer => (
               <div key={answer}>
                  <button disabled={userAnswer} value={answer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{ __html: answer}} />
                  </button>
               </div>
            ))}
         </div>
   </div>
)
export default QuestionCard;