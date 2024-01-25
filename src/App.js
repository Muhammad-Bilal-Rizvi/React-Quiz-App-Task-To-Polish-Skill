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
      <div className="mt-6 text-2xl text-center">
      {/* <h1>Expertizo Engineering React Quiz Challenge</h1> */}
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// My First Day Task:
// https://github.com/Expertizo/React-Test

// To view online your github repo code: (vscode.dev)
//https://vscode.dev/github/mustafazuberi/foodpanda-clone-


// Youtube Link (similar react project)
// https://www.youtube.com/watch?v=UX5HIrxbRUc&t=2s