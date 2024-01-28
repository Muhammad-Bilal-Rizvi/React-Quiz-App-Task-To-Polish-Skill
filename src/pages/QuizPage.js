import React, { useState } from "react";
import jsonData from "./../data/questions.json";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";


const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [CountCorrectQuestion, setCountCorrectQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctPercentage, setCorrectPercentage] = useState(0);
  const [minPercentage, setMinPercentage] = useState(0);
  const [maxPercentage, setMaxPercentage] = useState(0);

  const maxScore = (totalQues, correctQues, attemptedQues) => {


  };

  const minScore = (totalQues, correctQues, attemptedQues) => { };

  const onNext = () => {
    const cuurentQuesNumber = questionNum + 1 + 1;
    // console.log(jsonData.length);
    // console.log(cuurentQuesNumber);
    setSelectedOption('');

    if (jsonData.length >= cuurentQuesNumber) {
      setQuestionNum(questionNum + 1);
    }
  };

  const onOptionSelecton = (value) => {
    setSelectedOption(value);
    let correctCount = 0;
    if (jsonData[questionNum].correct_answer === value) {
      correctCount = CountCorrectQuestion + 1;
      setCountCorrectQuestion(correctCount);
    } else {
      correctCount = CountCorrectQuestion
    }
    setCorrectPercentage(Math.round((correctCount / (questionNum + 1)) * 100));
    setMinPercentage(Math.round((correctCount / jsonData.length) * 100));
    setMaxPercentage(Math.round((((jsonData.length - (questionNum + 1)) + (correctCount)) / jsonData.length) * 100));
  }                         //            20             14 + 1               10                  20

  const options = [...jsonData[questionNum].incorrect_answers, jsonData[questionNum].correct_answer]
  // console.log(decodeURI(jsonData[0].category))
  // console.log(uriToJSON(JSON.stringify(jsonData) ))
  console.log({ CountCorrectQuestion })
  console.log({ questionNum })
  console.log({ minPercentage });
  console.log({ maxPercentage });
  console.log({ correctPercentage })
  console.log("================================")
  return (
    <div className="p-8 QuestionMainDiv my-50">
      <div style={{ width: `${((questionNum + 1) / jsonData.length) * 100}%`, backgroundColor: "black", height: "5px" }}></div>
      <div className="QuestionNumDiv">
        <h1 className="text-2xl font-bold">
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
              ? <div className="flex flex-row"><IoStarSharp /><IoStarSharp /></div>
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
        {options.map((op) => <button disabled={selectedOption ? true : false}
          onClick={() => { onOptionSelecton(op) }}
          className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded">
          {decodeURIComponent(op)}
        </button>)}
      </div>

      {selectedOption &&
        <>
          <div className="flex flex-row flex-wrap justify-center mt-10 QuestionScoreBarDiv">
            {selectedOption === jsonData[questionNum].correct_answer ? "Correct" : "Wrong"}
          </div>

          <div className="flex flex-row flex-wrap justify-center mt-10 QuestionScoreBarDiv">
            <button
              onClick={onNext}
              className="border-2 border-black border-solid w-[45%] bg-gray-200 font-bold rounded"
            >
              Next Question
            </button>
          </div>
        </>
      }
      <div style={{ position: 'absolute', bottom: '0px', width: '91%'}}>
        <div className="bottomScore mt-10">
          <div className="flex flex-row flex-wrap justify-between scoreMention">
            <p>Score: {correctPercentage}%</p>
            <p>Max Score: {maxPercentage}%</p>
          </div>
          <div className="h-8 border-2 border-black border-solid rounded colorMention "
            style={{ position: 'relative' }}>

            <div className="minimumScore" style={{
              backgroundColor: "black",
              height: "30px",
              position: "absolute",
              left: 0,
              zIndex: 3, width: `${minPercentage}%`
            }}>
            </div>

            <div className="currentScore" style={{
              backgroundColor: "darkgrey",
              height: "30px",
              position: "absolute",
              left: 0,
              zIndex: 2, width: `${correctPercentage}%`
            }}>
            </div>
            <div className="maximumScore" style={{
              backgroundColor: "lightgrey",
              height: "30px",
              position: "absolute",
              left: 0,
              zIndex: 1, width: `${maxPercentage}%`
            }}>
            </div>
          </div>
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
