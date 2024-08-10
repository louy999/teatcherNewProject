import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  if (url === "/") {
    // Redirect to "/chapter"
    return NextResponse.redirect(new URL("/chapter", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Only apply this middleware to the root path
};
