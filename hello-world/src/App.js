import Hello from "./components/hello";
// import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Message from "./components/message";
import "./App.css";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Practise from "./Practise";
import ParentPractise from "./components/ParentPractise";

function App() {
  return (
    <div className="App">
      {/* <Hello name="auqid" heroName="batman"></Hello>
      <Message></Message>
      <Counter></Counter>
      <Welcome name="auqid" heroName="irfan"></Welcome>
      {/* <FunctionClick /> */}
      {/* <ClassClick></ClassClick>
      <EventBind />
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <NameList></NameList>
      <Practise name="sd"> */}
      <Practise name="auqid hahah" />
      <ParentPractise></ParentPractise>
    </div>
  );
}

export default App;
