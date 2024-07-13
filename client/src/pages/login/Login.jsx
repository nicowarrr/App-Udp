import React, { useState, useEffect } from "react";
import MultiInputFields from "../../components/multiInputFields/multiInputFields.jsx";
import Buttonn from "../../components/button/button.jsx";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.css";
import logo from "../../../src/logo.jpg";

function Login() {
  const [formValues, setFormValues] = useState({});
  const [dataUser, setDataUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const fieldsForm = ["Mail", "Contraseña"];

  const navigate = useNavigate();
  const handleInputChange = (values) => {
    setFormValues(values);
  };

  useEffect(() => {
    setDataUser(formValues);
  }, [formValues]);

  const handleSubmit = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/login", dataUser);
      if (response.data.success) {
        console.log("Login successful");
        const role = response.data.role;
        const userName = response.data.nombre; // Obtén el nombre de usuario desde la respuesta
        
        if (role === "Alumno") {
          navigate("/Material2", { state: { userName } }); // Pasa el nombre de usuario como estado a la ruta del alumno
        } else if (role === "Profesor") {
          navigate("/Material", { state: { userName } }); // Pasa el nombre de usuario como estado a la ruta del profesor
        }
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setErrorMessage("There was an error processing your request.");
    }
  };

  return (
    <div className="App">
      <div className="Datos">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Iniciar Sesión</h1>
        <MultiInputFields names={fieldsForm} onChange={handleInputChange} />
        <Buttonn name="Login" onClick={handleSubmit} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;


