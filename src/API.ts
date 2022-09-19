import { shuffleArray } from "./utils"
export type Question = {
   category: string;
   type: string;
   difficulty: string;
   question:string;
   correct_answer: string;
   incorrect_answers: string[];
}

export type QuestionState = Question & { answers: string[] }
export enum Difficulty {
   EASY = "easy",
   MEDIUM = "medium",
   HARD = "hard"
}
export const fetchQuestions = async(
   amount: number,
   difficulty: Difficulty
   ) => {
      const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
      //1 await fetch itselft
       //2 await to convert data into json
      const data = await (await fetch(endPoint)).json();
      console.log("data is",data);

   // const data = [
   //       {
   //           "category": "Mythology",
   //           "type": "multiple",
   //           "difficulty": "easy",
   //           "question": "The ancient Roman god of war was commonly known as which of the following?",
   //           "correct_answer": "Mars",
   //           "incorrect_answers": [
   //               "Jupiter",
   //               "Juno",
   //               "Ares"
   //           ]
   //       },
   //       {
   //           "category": "Entertainment: Film",
   //           "type": "multiple",
   //           "difficulty": "easy",
   //           "question": "Which animated movie was first to feature a celebrity as a voice actor?",
   //           "correct_answer": "Aladdin",
   //           "incorrect_answers": [
   //               "Toy Story",
   //               "James and the Giant Peach",
   //               "The Hunchback of Notre Dame"
   //           ]
   //       },
   //       // ...10{}
   //   ]
      const updatedData = data.results.map((question : Question) =>(
         {
            ...question,
            answers: shuffleArray([
               ...question.incorrect_answers, 
               question.correct_answer
            ])
         }
      ));
      console.log("Temp is",updatedData);
   //    output = [
   //       {
   //           "category": "Entertainment: Film",
   //           "type": "multiple",
   //           "difficulty": "easy",
   //           "question": "Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
   //           "correct_answer": "Tommy Lee Jones",
   //           "incorrect_answers": [
   //               "Harrison Ford",
   //               "Harvey Keitel",
   //               "Martin Landau"
   //           ],
   //           "answers": [
   //               "Martin Landau",
   //               "Tommy Lee Jones",
   //               "Harrison Ford",
   //               "Harvey Keitel"
   //           ]
   //       }
   //   ]
      return updatedData;

}