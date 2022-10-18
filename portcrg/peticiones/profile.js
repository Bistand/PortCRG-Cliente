import { axios } from "axios";
import { getCookie } from "cookies-next";
import { async } from "regenerator-runtime";
import { datosUSer } from "./session";
export async function Getdatosuser(token) {
  let usuario;
  const idd = await datosUSer(token);
  //console.log(idd);
  const url = `https://portcrg-dev.onrender.com/api/user/${idd.id}`;
  try {
    usuario = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return usuario.json();
  } catch (e) {
    return null;
  }
}

export async function UpdateProfile(perfil) {
  try {
    const resultado = await fetch(
      `https://portcrg-dev.onrender.com/api/user/updateInfo/${perfil.id}`,
      {
        method: "POST",
        body: JSON.stringify({
          fullName: perfil.name,
          bibliography: perfil.bibliography,
          maritalStatus: perfil.estadocivil,
          phoneNumber: perfil.telefono,
          dateofBirth: perfil.dateofBirth,
          department: perfil.department,
          municipality: perfil.municipality,
          address: perfil.address,
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
}

export async function deletUser(email, id, token) {
  try {
    const resultado = await fetch(
      `https://portcrg-dev.onrender.com/api/user/updateInfo/${id}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(resultado);
    return resultado.json();
  } catch (e) {
    return null;
  }
}

export async function updatePassword(credenciales, id) {
  try {
    const resultado = await fetch(
      `https://portcrg-dev.onrender.com/api/user/changePass/${id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: credenciales.email,
          oldPass: credenciales.oldpassword,
          newPass: credenciales.newpassword,
        }),
      }
    );
    return resultado.json();
  } catch (e) {
    return null;
  }
}

export async function updateP(credenciales, id) {
  console.log(credenciales);
  try {
    const resultado = await axios.post(
      `https://portcrg-dev.onrender.com/api/user/changePass/${id}`,
      {
        email: "nuevoFernando@gmail.com",
        oldPass: "12341234",
        newPass: "landivar",
      }
    );
    console.log(resultado.then());
    return resultado;
  } catch (error) {
    return null;
  }
}
