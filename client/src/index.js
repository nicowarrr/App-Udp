import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login/Login.jsx";
import Register from "../src/pages/register/register.jsx";
import reportWebVitals from "./reportWebVitals";
import UploadForm from "../src/pages/subidaMaterial/subida.jsx"
import MaterialList from "./pages/verMaterial/MaterialList.jsx";
import MaterialList2 from "./pages/verMaterial/MaterialList2.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subida" element={<UploadForm/>} />
        <Route path="/Material" element={<MaterialList/>} />
        <Route path="/Material2" element={<MaterialList2/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
