import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartPage from "./pages/StartPage";
import CompletedPage from "./pages/CompletedPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="container" style={{ paddingTop: "15vh" }}>
      <Router>
        <Route exact path="/" component={() => <StartPage />} />
        <Route exact path="/login" component={() => <LoginPage />} />
        <Route exact path="/completed" component={() => <CompletedPage />} />
        <Route exact path="/dashboard" component={() => <DashboardPage />} />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react"));
