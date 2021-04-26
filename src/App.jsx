import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Alert } from "./components/layout/Alert";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

import "./global.css";

const App = () => {
  return (
    <MuiThemeProvider>
      <CssBaseline>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  );
};


export default App;
