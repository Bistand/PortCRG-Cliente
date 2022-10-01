import axios from "axios";
async function Resetpassword(email) {
  const res = await axios.post(
    "https://portcrg-dev.onrender.com/api/user/forgotPass",
    { email: email }
  );
  console.log(res.data.response);
  if (res.data.response === "ok") {
    //endpoit para enviar enlace al correo
    return true;
  }
  return false;
}
async function resetPassword(token, password) {
  const res = await axios.post(
    "https://portcrg-dev.onrender.com/api/user/forgotPass",
    {
      token: token,
      newPassword: password,
    }
  );
}

export { Resetpassword, resetPassword };
