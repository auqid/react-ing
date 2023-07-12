import Hello from "./components/hello";
// import Greet from "./components/Greet";
// import Welcome from "./components/welcome";
import Message from "./components/message";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Hello name="auqid" heroName="batman"></Hello>
      <Message></Message>
      <Counter></Counter>
    </div>
  );
}

export default App;
