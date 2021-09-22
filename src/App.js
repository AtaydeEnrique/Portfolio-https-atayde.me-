import logo from "./logo.svg";
import "./App.css";
import TypeWriter from "./components/UI/TypeWriter/TypeWriter";
import Cursor from "./components/UI/Cursor/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TypeWriter
          speed={100}
          delay1={1000}
          delay2={300}
          text="mind blowing"
          emoji={["😵‍💫", "💥", "🤯", "🔥", "💣"]}
        />
      </header>
    </div>
  );
}

export default App;
