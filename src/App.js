import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Routes from "./pages/routes";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Dashboard />

        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}
export default App;