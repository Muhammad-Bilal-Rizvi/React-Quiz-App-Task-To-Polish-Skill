import React from "react";

const Quiz = () => {
  return (
    <div className="QuestionMainDiv my-50 p-8 ">
      <div className="QuestionNumDiv">
        <h1 className="text-2xl font-bold">Question 1 of 20</h1>
        <h3>******</h3>
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
          className="w-[45%] py-2 px-4 bg-gray-200 text-slate-600 font-semibold rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:text-white focus:ring-opacity-75">
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
      <div className="QuestionScoreBarDiv"></div>
    </div>
  );
};

export default Quiz;
