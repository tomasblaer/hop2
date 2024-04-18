import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.cookies.get('accessToken') && request.url.endsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (request.url.endsWith('/login') && request.cookies.get('accessToken')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: ['/dashboard', '/login']
}
