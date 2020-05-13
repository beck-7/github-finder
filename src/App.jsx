import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <MuiThemeProvider>
      <CssBaseline>
        <Navbar />
        <Home />
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
