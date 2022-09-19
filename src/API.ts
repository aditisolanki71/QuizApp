export type Question = {
   category: string;
   type: string;
   difficulty: string;
   question:string;
   correct_answer: string;
   incorrect_answers: string[];
}
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


}