import Axios from "axios";

function registerUser(formValues) {
  console.log("xd: ",formValues)
  const { rol, Mail, Contraseña, Nombre} = formValues;
  const rolValue = rol.value;


  return Axios.post("http://localhost:3001/create", {
    rol:rolValue,
    Mail,
    Contraseña,
    Nombre,
  }).catch(error => {
    console.error("Hubo un error al registrar el usuario:", error);
    throw error;
  });
}

export default registerUser;