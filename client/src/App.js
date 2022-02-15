import "./App.css";
import React, { useState } from "react";

import { Router } from "@reach/router";
import Main from "./views/Main";
import axios from "axios";

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
