import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Welcome from "./Components/Welcome.jsx";
import QuestionSet from "./Components/QuestionSet.jsx";
import ResultContainer from "./Components/ResultContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/questionSet",
        element: <QuestionSet />,
      },
      {
        path: "/ResultContainer",
        element: <ResultContainer />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
