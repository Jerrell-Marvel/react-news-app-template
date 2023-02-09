import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements, useLocation } from "react-router-dom";
import Home from "./pages/home/Home.js";
import News from "./pages/news/News.js";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
