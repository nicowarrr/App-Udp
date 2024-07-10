import Axios from "axios";

function LoginUser(formValues) {
  const { mail, contraseña } = formValues;

  return Axios.post("http://localhost:3001/create", {
    mail,
    contraseña,
  }).catch(error => {
    console.error("Hubo un error al registrar el usuario:", error);
    throw error;
  });
}

export default registerUser;