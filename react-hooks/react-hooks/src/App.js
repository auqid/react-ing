import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
// import ClassCounter from "./components/ClassCounter";
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import DataFetching from "./components/DataFetching";
// import HookCounter from "./components/HookCounter";
// import HookCounter2 from "./components/HookCounter2";
// import HookCounter3 from "./components/HookCounter3";
// import HookCounter4 from "./components/HookCounter4";
// import HookCounterOne from "./components/HookCounterOne";
// import HookMouse from "./components/HookMouse";
// import IntervalHookCounter from "./components/IntervalHookCounter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
