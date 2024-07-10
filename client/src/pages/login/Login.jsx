import React, { useState, useEffect } from "react";
import MultiInputFields from "../../components/multiInputFields/multiInputFields.jsx"
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
        navigate("/menu"); // Redirige al usuario a la página del dashboard o donde quieras
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setErrorMessage("There was an error processing your request.");
    }
  };

  /*const redirectToRegister = () => {
    navigate('/register');
  };*/

  return (
    <div className="App">
      <div className="Datos">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Iniciar Sesión</h1>
        <MultiInputFields names={fieldsForm} onChange={handleInputChange} />
        <Buttonn name="Login" onClick={handleSubmit} />
       {/* <Buttonn name="register" onClick={redirectToRegister} />*/}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;

