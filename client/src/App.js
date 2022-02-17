import "./App.css";
import React, { useState } from "react";

import { Router } from "@reach/router";
import Main from "./views/Main";
import axios from "axios";
import Detail from "./components/Detail"
import Update from "./views/Update"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Main path="/products" default />
        <Detail path="/products/:id" />
        <Update path="/products/edit/:id" />
      </Router>
    </div>
  );
};

export default App;
