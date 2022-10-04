import axios from "axios";

export async function Resetpassword(email) {
  try {
    const res = await axios.post(
      "https://portcrg-dev.onrender.com/api/user/forgotPass",
      { email: email }
    );
    console.log(res.data.response);
    if (res.data.response === "ok") {
      //endpoit para enviar enlace al correo
      return true;
    }
  } catch (error) {
    return false;
  }
}
export async function newPassword(token, password) {
  try {
    const res = await axios.post(
      "https://portcrg-dev.onrender.com/api/user/newPass",
      {
        token: token,
        newPassword: password,
      }
    );
  } catch (error) {}
}

export async function datosUSer(tokenuser) {
  try {
    const usuario = await axios.get(
      "https://portcrg-dev.onrender.com/api/admin",
      {
        headers: {
          "auth-token": tokenuser,
        },
      }
    );

    localStorage.setItem("id",usuario.data.data.user.id);
    return usuario.data.data.user;
  } catch (error) {
    return null;
  }
}
