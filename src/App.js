import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import QuizStart from "./pages/StartPage";
//import Quiz from "./pages/QuizPage";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/quiz",
      element: <QuizPage />,
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

