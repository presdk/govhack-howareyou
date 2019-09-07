import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartPage from "./pages/StartPage";
import CompletedPage from "./pages/CompletedPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Route exact path="/" component={() => <StartPage />} />
        <Route exact path="/completed" component={() => <CompletedPage />} />
        <Route exact path="/dashboard" component={() => <DashboardPage/>} />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react"));
