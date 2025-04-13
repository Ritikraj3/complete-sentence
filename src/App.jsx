import { Outlet } from "react-router";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
