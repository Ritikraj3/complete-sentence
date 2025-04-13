import { Outlet } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import QuestionSet from "./Components/QuestionSet";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
