import { NextRequest, NextResponse } from "next/server";
const protectedRoutes = ["/admin", "/posts"];
export const proxy = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken")?.value;
  if (
    protectedRoutes.some((item) => pathname.startsWith(item)) &&
    !accessToken
  ) {
    return NextResponse.redirect(
      new URL("/auth/login", request.nextUrl.origin),
    );
  }
};
export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
