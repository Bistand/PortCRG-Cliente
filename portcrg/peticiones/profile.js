import { axios } from "axios";
import { getCookie } from "cookies-next";
import { async } from "regenerator-runtime";
import { datosUSer } from "./session";
export async function Getdatosuser(token) {
  let usuario;
  const id = await datosUSer(token);
  const url = `https://portcrg-dev.onrender.com/api/user/${id.id}`;
  try {
    usuario = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    return usuario.json();
  } catch (e) {
    return null;
  }
}

export async function UpdateProfile(perfil) {}
