import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Retrieve session cookie using Better Auth helper
  const sessionCookie = getSessionCookie(request);

  // Protected route: Product Details (/product/*)
  if (pathname.startsWith("/product/")) {
    if (!sessionCookie) {
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Protected route: Profile (/profile/*)
  if (pathname.startsWith("/profile")) {
    if (!sessionCookie) {
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*", "/profile/:path*"],
};
