import "./App.css";
import axios from "axios";
import { Router } from "@reach/router";
import Main from "./views/Main";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Main path="/home" default />
      </Router>
    </div>
  );
};

export default App;
