import { deleteCookie, setCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { logOut } from "./peticiones/session";
export async function middleware(request) {
  //colocamos todas las rutas las cuales se van a direcionar
  //si no cumplen con los autenticaciones
  const loginnull = NextResponse.redirect(new URL("/login", request.url));
  const home = NextResponse.redirect(new URL("/", request.url));
  const asistencia = NextResponse.redirect(new URL("/asistencia", request.url));
  const singUp = NextResponse.redirect(new URL("/sign_up", request.url));
  const cursos = NextResponse.redirect(new URL("/courses", request.url));
  const entradaSalida = NextResponse.redirect(
    new URL("/EntradaSalida", request.url)
  );
  const perfil = NextResponse.redirect(new URL("/profile", request.url));
  const calendario = NextResponse.redirect(new URL("/calendario", request.url));

  const informacion = NextResponse.redirect(
    new URL("/informative", request.url)
  );
  const rol = 2; //obtiene el token de autenticacion con el cual se puede saber
  //si esta logiado o no
  const token = request.cookies.get("tokenuser");
  const tokenPrivilages = request.cookies.get("token");
  let valor = 0;
  //obtengo privilegios de usuarios
  if (token) {
    valor = tokenPrivilages.substr(0, 1);
    console.log(valor);
  }

  //let ruta = request.nextUrl.pathname;
  //console.log(ruta);

  if (request.nextUrl.pathname.includes("/login")) {
    if (token) {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/asistencia")) {
    rutasdesbloqueadas(valor);
    if (!token) {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/sign_up")) {
    if (token && rutasdesbloqueadas(valor) === 3) {
      return singUp;
    } else {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/courses")) {
    if (token && rutasdesbloqueadas(valor) === 3) {
      return cursos;
    } else {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/informative")) {
    if (token && rutasdesbloqueadas(valor) === 3) {
      return informacion;
    } else {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/profile")) {
    if (token) {
      return perfil;
    } else {
      return home;
    }
  }
}

function rutasdesbloqueadas(key) {
  switch (key) {
    case "3":
      return 3;
      break;
    case "2":
      return 2;
      break;
    case "1":
      return 1;
      break;
  }
}
