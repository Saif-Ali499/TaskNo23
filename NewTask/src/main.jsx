import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./MainComponents/About.jsx";
import Home from "./MainComponents/Home.jsx";
import Login from "./MainComponents/Login.jsx";
import SignUp from "./MainComponents/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
