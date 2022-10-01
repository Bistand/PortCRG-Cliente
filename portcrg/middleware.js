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
  const informacion = NextResponse.redirect(
    new URL("/informative", request.url)
  );
  const rol = 2;

  //obtiene el token de autenticacion con el cual se puede saber
  //si esta logiado o no
  const token = request.cookies.get("tokenuser");

  if (request.nextUrl.pathname.includes("/login")) {
    if (token) {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/asistencia")) {
    if (!token) {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/sign_up")) {
    if (!token) {
      return home;
    } else {
      //response.cookies.delete("token");
      //response.cookies.clear();
    }
  } else if (request.nextUrl.pathname.includes("/courses")) {
    if (!token) {
      return home;
    }
  } else if (request.nextUrl.pathname.includes("/informative")) {
    if (!token) {
      return home;
    }
  }
}
