import React, { useState } from "react";
import jsonData from './../data/questions.json'

const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [CountCorrectQuestion, setCountCorrectQuestion] = useState(0);


  const maxScore = (totalQues, correctQues, attemptedQues) => {

  }

  const onNext = () => {
    const cuurentQuesNumber = questionNum + 1 + 1;
    console.log(jsonData.length)
    console.log(cuurentQuesNumber)

    if(jsonData.length >= cuurentQuesNumber){
      setQuestionNum(questionNum + 1);
    }
  }
  // console.log(decodeURI(jsonData[0].category))
  // console.log(uriToJSON(JSON.stringify(jsonData) ))
  return (
    <div className="QuestionMainDiv my-50 p-8 ">
      <div className="QuestionNumDiv">
        <h1 className="text-2xl font-bold"> Question {questionNum + 1} of 20</h1>
        <h3>{jsonData[questionNum].category}</h3>

        <h3>{jsonData[questionNum].difficulty === "easy" ? "*" : jsonData[questionNum].difficulty == "medium" ? "**" : "***"}</h3>
      </div>
      <div className="QuestionDiv">
        <h1 className="text-lg font-medium  mt-6">
          At the start of a standard game of the monopoly, if you through a double six, which square would you land on?
        </h1>
      </div>
      <div className="QuestionMcqsDiv  mt-6 flex flex-wrap flex-row justify-between gap-y-10">
        <button
          className="w-[45%] py-2 px-4 bg-gray-200 text-slate-600	 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white	focus:ring-opacity-75">
          MCQS No: One
        </button>
        <button
          disabled={true}
          // className= "w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75"
          className={questionNum ? "w-[45%] py-2 px-4 rounded-lg" : "w-[45%] py-2 px-4"}
        >
          MCQS No: two
        </button>
        <button
          className="w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75">
          MCQS No: Three
        </button>
        <button
          className="w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75">
          MCQS No: Four
        </button>
      </div>
      <div className="QuestionScoreBarDiv">
        <button
          onClick={onNext}
          className="w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75">
          Next
        </button>

      </div>
    </div>
  );
};

export default Quiz;
