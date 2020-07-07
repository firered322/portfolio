import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#017374",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
