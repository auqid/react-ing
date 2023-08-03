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
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import PostList from "./components/PostList";

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
      {/* <Practise name="auqid hahah" /> */}
      {/* <ParentPractise></ParentPractise> */}
      {/* <Stylesheet primary={true}></Stylesheet>
      <Inline />
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      {/* <FragmentDemo></FragmentDemo> */}
      <PostList></PostList>
    </div>
  );
}

export default App;
