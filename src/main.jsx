import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>
);
