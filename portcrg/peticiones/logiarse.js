import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import {
  SetSesion,
  GetSesion,
  GetUsuario,
  datosUSer,
} from "../peticiones/session";
async function conprobaruser(email, password) {
  const valores = await addPosts(email, password);
  let objeto = { email: email, password: password };
  let usuario;
  console.log(valores);
  if (valores.response === "ok") {
    usuario = await addGet(valores.data);
    const credencil = await datosUSer(valores.data);
    setCookie("tokenuser", valores.data, { maxAge: 3600 });
    setCookie("token", credencil.privileges + valores.data, {
      maxAge: 3600,
    });
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
