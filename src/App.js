/** @format */

import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/" exact="">
            <Header />
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
