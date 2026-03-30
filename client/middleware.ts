import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { APP_ROUTES } from "@/lib/constants/routes";

const authRoutes: string[] = [APP_ROUTES.login, APP_ROUTES.register];
const protectedPrefixes: string[] = [APP_ROUTES.dashboard, APP_ROUTES.users];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get("pp_auth")?.value);

  const isAuthRoute = authRoutes.includes(pathname);
  const isProtectedRoute = protectedPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  if (!hasSession && isProtectedRoute) {
    const loginUrl = new URL(APP_ROUTES.login, request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (hasSession && isAuthRoute) {
    return NextResponse.redirect(new URL(APP_ROUTES.dashboard, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*", "/users/:path*"],
};
