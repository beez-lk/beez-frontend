import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessageBox from "../components/message_box/message_box";
import HomePage from "../pages/home_page/home_page";
import LandingPage from "../pages/landing_page/landing_page";
import LoginPage from "../pages/login_page/login_page";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <MessageBox/>
    </Router>
  );
}
