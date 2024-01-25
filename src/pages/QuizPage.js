import React, { useState } from "react";
import jsonData from "./../data/questions.json";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";


const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [CountCorrectQuestion, setCountCorrectQuestion] = useState(0);

  const maxScore = (totalQues, correctQues, attemptedQues) => {};

  const onNext = () => {
    const cuurentQuesNumber = questionNum + 1 + 1;
    console.log(jsonData.length);
    console.log(cuurentQuesNumber);

    if (jsonData.length >= cuurentQuesNumber) {
      setQuestionNum(questionNum + 1);
    }
  };
  // console.log(decodeURI(jsonData[0].category))
  // console.log(uriToJSON(JSON.stringify(jsonData) ))
  return (
    <div className="p-8 QuestionMainDiv my-50">
      <div className="QuestionNumDiv">
        <h1 className="text-2xl font-bold">
          {" "}
          Question {questionNum + 1} of 20
        </h1>
        <h3>{decodeURIComponent(jsonData[questionNum].category)}</h3>

        {/* <h3>
          {jsonData[questionNum].difficulty === "easy"
            ? "*"
            : jsonData[questionNum].difficulty == "medium"
            ? "**"
            : "***"}
        </h3> */}
        <h3>
          {jsonData[questionNum].difficulty === "easy"
            ? <IoStarSharp />
            : jsonData[questionNum].difficulty == "medium"
            ?  <div className="flex flex-row"><IoStarSharp /><IoStarSharp /></div>
            : <div className="flex flex-row"><IoStarSharp /><IoStarSharp /><IoStarSharp /></div>}
        </h3>
      </div>
      <div className="QuestionDiv">
        <h1 className="mt-6 text-lg font-medium">
          {/* At the start of a standard game of the monopoly, if you through a
          double six, which square would you land on?
          <IoStarOutline /> */}
          {decodeURIComponent(jsonData[questionNum].question)}
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-6 QuestionMcqsDiv gap-y-10">
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          {/* MCQS No: One */}
          {decodeURIComponent(jsonData[questionNum].correct_answer)}
        </button>
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          {/* MCQS No: Two */}
          {decodeURIComponent(jsonData[questionNum].incorrect_answers[0])}
        </button>
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          {/* MCQS No: Three */}
          {decodeURIComponent(jsonData[questionNum].incorrect_answers[1])}
        </button>
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          {/* MCQS No: Four */}
          {decodeURIComponent(jsonData[questionNum].incorrect_answers[2])}
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-10 QuestionScoreBarDiv">
        <button
          onClick={onNext}
          className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded"
        >
          Next
        </button>
      </div>
      <div className="bottomScore mt-60">
          <div className="flex flex-row flex-wrap justify-between scoreMention">
            <p>Score: 67%</p>
            <p>Max Score: 75%</p>
          </div>
          <div className="h-8 bg-gray-200 border-2 border-black border-solid rounded colorMention ">

          </div>
      </div>
    </div>
  );
};

export default Quiz;

// button disabled functionality..
{
  /* <button
  disabled={true}
  // className= "w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75"
  className={questionNum ? "w-[45%] py-2 px-4 rounded-lg" : "w-[45%] py-2 px-4"}
>
  MCQS No: two
</button>; */
}


//Last button we created..
{/* <button className="w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75">
  MCQS No: Three
</button>; */}

// {
//   "category": "Animals",
//   "type": "boolean",
//   "difficulty": "easy",
//   "question": "Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.",
//   "correct_answer": "False",
//   "incorrect_answers": ["True","First","Second"] // changes add - "First","Second"
// }
