import { NextRequest, NextResponse } from "next/server";
// const isAuth = false;
export const proxy = (request: NextRequest) => {
  console.log("proxy");

  //   if (!isAuth) {
  //     return NextResponse.redirect(
  //       new URL("/auth/login", request.nextUrl.origin),
  //     );
  //   }
  //   const name = request.cookies.get("name");
  //   console.log(name);

  const response = NextResponse.next();
  //   response.cookies.set("email", "an@gmail.com", {
  //     path: "/",
  //     httpOnly: true,
  //   });
  //   response.cookies.delete("email");
  //   response.headers.set("x-abc", "ahihi");
  return response;
};
export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    // "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/admin/:path*",
  ],
};
