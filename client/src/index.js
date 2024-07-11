import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login/Login.jsx";
import Register from "../src/pages/register/register.jsx";
import reportWebVitals from "./reportWebVitals";
import Menu from "../src/pages/Menu/Menu.jsx"
import UploadForm from "../src/pages/subidaMaterial/subida.jsx"
import MaterialList from "./pages/verMaterial/MaterialList.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/subida" element={<UploadForm/>} />
        <Route path="/Material" element={<MaterialList/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
