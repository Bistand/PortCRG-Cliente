async function SetSesion(sesion, usuario) {
  localStorage.setItem("sesion", JSON.stringify(sesion));
  localStorage.setItem("usuario", JSON.stringify(usuario));
  return false;
}

function GetSesion() {
  let sesion = localStorage.getItem("sesion");
  sesion = JSON.parse(sesion);
  return sesion;
}

function GetUsuario() {
  let sesion = localStorage.getItem("usuario");
  sesion = JSON.parse(sesion);
  console.log(sesion);
  return sesion;
}
export { SetSesion, GetSesion, GetUsuario };
