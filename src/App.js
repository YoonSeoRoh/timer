import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Setter from "./components/Setter";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Clock />
      <Timer />
      <Setter />
    </div>
  );
}

export default App;
