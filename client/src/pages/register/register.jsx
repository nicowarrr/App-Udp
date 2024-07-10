import React, { useState, useEffect } from "react";
import MultiInputFields from "../../components/multiInputFields/multiInputFields.jsx";
import Button from "../../components/button/button.jsx";
import ComboBox from "../../components/comboBox/ComboBox.jsx";
import registerUser from "../../services/registerServices.js";
import "./register.css"
//import { useNavigate } from "react-router-dom";
import logo from "../../../src/logo.jpg";
function Register() {
//importante useState
  const [selectedValue, setSelectedValue] = useState("");
  const [formValues, setFormValues] = useState({});
  const [dataUser, setDataUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //const navigate = useNavigate();
  const fieldsForm = ["Mail", "Contraseña", "Nombre"];
  const typeRol = [
    { value: "Alumno", label: "Alumno" },
    { value: "Profesor", label: "Profesor" },
  ];

  // importante useEffect
  useEffect(() => {
    const userData = {
      ...formValues,
      rol: selectedValue,
    };
    setDataUser(userData);
  }, [formValues, selectedValue]); // <== datos que si sufren algun cambio se activa el useEffect

  const handleSubmit = async () => {
      // Verificar si algún campo está vacío
      const emptyFields = Object.values(dataUser).some(value => !value);
      if (emptyFields) {
        setErrorMessage("Todos los campos son obligatorios.");
        return;
      }
      try {
        console.log(dataUser)
        await registerUser(dataUser);
        setErrorMessage("");
        //navigate("/login"); // Limpiar el mensaje de error si el registro es exitoso
      } catch (error) {
        setErrorMessage("Hubo un error en el registro. Intenta nuevamente.");
      } //const responseData = await registerUser(dataUser)
  };

  const handleSelectionChange = (value) => {
    setSelectedValue(value);
  };

  const handleInputChange = (values) => {
    setFormValues(values);
  };

  return (
    <div className="register">
      <div className="Datos">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Registro</h1>
        <ComboBox options={typeRol} onChange={handleSelectionChange} />
        <MultiInputFields names={fieldsForm} onChange={handleInputChange} />
        <Button name="Registarse" onClick={handleSubmit} />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Register;
