import { SetSesion, GetSesion, GetUsuario } from "../peticiones/session";
async function conprobaruser(email, password) {
  const valores = await addPosts(email, password);
  let objeto = { email: email, password: password };
  let usuario;
  if (valores.response === "ok") {
    usuario = await addGet(valores.data);
    await SetSesion(objeto, usuario.data.user);
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

const newPassword = async (actual, nueva) => {
  try {
    const resultado = await fetch(
      "https://portcrg-dev.onrender.com/api/user/changePass",
      {
        method: "POST",
        body: JSON.stringify({
          email: GetSesion().email,
          oldPass: actual,
          newPass: nueva,
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

function ValidarEmail(valor) {
  if (
    /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(
      campo.value
    )
  ) {
    //alert("La dirección de email " + valor + " es correcta.");
    return true;
  }
  //else {
  //alert("La dirección de email es incorrecta.");
  //}
  return false;
}
export { conprobaruser, ValidarEmail };
