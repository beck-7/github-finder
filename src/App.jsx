import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";

const App = () => {
  return (
    <MuiThemeProvider>
      <Router>
        <CssBaseline>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </CssBaseline>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
