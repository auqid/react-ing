import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Sidebar from "./components/Sidebar";
// import Bag from "./components/Bag";
// import Btn from "./components/Btn";
// import ModeToggler from "./components/ModeToggler";
// import Promo from "./components/Promo";
import AboutMe from "./components/AboutMe";
import Homepage from "./components/Homepage";
import { Routes, Route, Link } from "react-router-dom";

function handleClick() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt("type a number");
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}

function App() {
  const app = new Date();
  return (
    <div className="App">
      {/* <Header name="Anna" color="purple" />
      <Main greet="Hi" />
      <Sidebar />
      <Bag>Nahh</Bag>
      <Btn></Btn>
      <ModeToggler></ModeToggler>
      <button onClick={handleClick}>Guess number between 1` and 3 </button>
      <Promo message={app.toLocaleTimeString()}></Promo> */}
      <nav className="nav">
        <Link to={"/"} className="nav-item">
          Homepage
        </Link>
        <Link to={"/about-me"} className="nav-item">
          About Me
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
