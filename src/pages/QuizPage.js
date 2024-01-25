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
        <h3>{jsonData[questionNum].category}</h3>

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
          At the start of a standard game of the monopoly, if you through a
          double six, which square would you land on?
          <IoStarOutline />
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-6 QuestionMcqsDiv gap-y-10">
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          MCQS No: One
        </button>
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          MCQS No: Two
        </button>
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          MCQS No: Three
        </button>
        <button className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          MCQS No: Four
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
