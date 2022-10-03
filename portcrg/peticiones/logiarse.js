import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import { SetSesion, GetSesion, GetUsuario } from "../peticiones/session";
async function conprobaruser(email, password) {
  const valores = await addPosts(email, password);
  let objeto = { email: email, password: password };
  let usuario;
  if (valores.response === "ok") {
    console.log(valores);
    usuario = await addGet(valores.data);
    setCookie("tokenuser", valores.data);
    return true;
  }
  return false;
}

const addPosts = async (email, pass) => {
  try {
    const resultado = await fetch(
      "https://portcrg-dev.onrender.com/api/user/login",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return resultado.json();
  } catch (e) {
    return e;
  }
};

const addGet = async (token) => {
  try {
    const resultado = await fetch(
      "https://portcrg-dev.onrender.com/api/admin",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "auth-token": token,
        },
      }
    );
    return resultado.json();
  } catch (e) {
    return e;
  }
};

export { conprobaruser };
