import "./App.css";
import ClassCounter from "./components/ClassCounter";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";

function App() {
  return (
    <div>
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter>
      <HookCounter2></HookCounter2>
      <HookCounter3></HookCounter3>
      <HookCounter4></HookCounter4>
      <HookCounterOne></HookCounterOne>
      <HookMouse></HookMouse>
      <br></br>
      <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>
    </div>
  );
}

export default App;
