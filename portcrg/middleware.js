import { deleteCookie, setCookie } from "cookies-next";
import { NextResponse } from "next/server";
import { logOut } from "./peticiones/session";
export async function middleware(request) {
  //colocamos todas las rutas las cuales se van a direcionar
  //si no cumplen con los autenticaciones
  const loginnull = NextResponse.rewrite(new URL("/login", request.url));

  const home = NextResponse.redirect(new URL("/", request.url));
  const asistencia = NextResponse.redirect(new URL("/asistencia", request.url));
  const singUp = NextResponse.rewrite(new URL("/sign_up", request.url));
  const cursos = NextResponse.redirect(new URL("/courses", request.url));
  const users = NextResponse.redirect(new URL("/users", request.url));

  const cursosdeusuario = NextResponse.redirect(
    new URL("/users/course", request.url)
  );
  const entradaSalida = NextResponse.redirect(
    new URL("/EntradaSalida", request.url)
  );
  const perfil = NextResponse.rewrite(new URL("/profile", request.url));
  const calendario = NextResponse.rewrite(new URL("/calendario", request.url));

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
    } else {
      return loginnull;
    }
  }
  if (request.nextUrl.pathname.startsWith("/asistencia")) {
    rutasdesbloqueadas(valor);
    if (!token) {
      return home;
    }
  }
  if (request.nextUrl.pathname.startsWith("/sign_up")) {
    if (token) {
      if (valor === "1" || valor === "2") {
        return singUp;
      } else {
        return home;
      }
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
  if (request.nextUrl.pathname.startsWith("/calendario")) {
    if (token) {
      return calendario;
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
}
