import Hello from "./components/hello";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";

function App() {
  return (
    <div id="App">
      <Hello name="auqid" heroname="batman">
        <p> robin</p>
      </Hello>
      <Hello name="irfan" heroname="batman">
        <button>hello</button>
      </Hello>
      <Hello name="sheikh" heroname="batman">
        <p> catwomen</p>
      </Hello>
      <Welcome name="where"></Welcome>
      <Welcome name="is off">
        <h3>no way home</h3>
      </Welcome>
    </div>
  );
}

export default App;
