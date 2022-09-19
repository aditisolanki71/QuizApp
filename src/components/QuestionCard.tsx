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
      Question Card
      <p className="number">
         Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}>
         <div>
            {answers.map(answer => (
               <div>
                  <button disabled={userAnswer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{ __html: answer}} />
                  </button>
               </div>
            ))}
         </div>
      </p>
   </div>
)
export default QuestionCard;