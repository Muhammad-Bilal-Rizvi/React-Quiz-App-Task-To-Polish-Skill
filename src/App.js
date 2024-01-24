import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizStart from "./pages/StartPage";
import Quiz from "./pages/QuizPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <QuizStart />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// My First Day Task:
// https://github.com/Expertizo/React-Test


//https://github.com/Expertizo/React-Test/blob/master/README.md
