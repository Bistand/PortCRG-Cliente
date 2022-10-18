import { deleteCookie, setCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { logOut } from "./peticiones/session";
export async function middleware(request) {
  //colocamos todas las rutas las cuales se van a direcionar
  //si no cumplen con los autenticaciones
  const loginnull = NextResponse.rewrite(new URL("/login", request.url));

  const home = NextResponse.rewrite(new URL("/", request.url));
  const asistencia = NextResponse.rewrite(new URL("/asistencia", request.url));
  const singUp = NextResponse.rewrite(new URL("/sign_up", request.url));
  const cursos = NextResponse.rewrite(new URL("/courses", request.url));
  const entradaSalida = NextResponse.rewrite(
    new URL("/EntradaSalida", request.url)
  );
  const perfil = NextResponse.rewrite(new URL("/profile", request.url));
  const calendario = NextResponse.rewrite(new URL("/calendario", request.url));
  const usercursos = NextResponse.rewrite(
    new URL("/users/courses", request.url)
  );

  const informacion = NextResponse.rewrite(
    new URL("/informative", request.url)
  );

  //obtiene el token de autenticacion con el cual se puede saber
  //si esta logiado o no
  const token = request.cookies.get("tokenuser");
  const tokenPrivilages = request.cookies.get("token");
  let valor = 0;
  //obtengo privilegios de usuarios
  if (token) {
    valor = tokenPrivilages.substr(0, 1);
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      return home;
    }
  }
  if (request.nextUrl.pathname.startsWith("/asistencia")) {
    rutasdesbloqueadas(valor);
    if (!token) {
      return home;
    }
  }
  if (request.nextUrl.pathname.startsWith("/sign_up")) {
    if (token && valor === "1") {
      return singUp;
    } else {
      return home;
    }
  }
  if (request.nextUrl.pathname.startsWith("/informative")) {
    if (token) {
      return informacion;
    } else {
      return home;
    }
  }
  if (request.nextUrl.pathname.startsWith("/profile")) {
    if (token) {
      return perfil;
    } else {
      return home;
    }
  }
  if (request.nextUrl.pathname.startsWith("/courses")) {
    if (token && valor === "3") {
      return usercursos;
    } else {
      return home;
    }
  }
}
