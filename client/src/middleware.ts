import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/auth-token.service";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { url, cookies } = request;

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes("/auth");

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }

  return;
}
