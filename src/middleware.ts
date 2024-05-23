import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const scriptCsp =
    process.env.NODE_ENV === "development"
      ? `'self' 'unsafe-inline' 'unsafe-eval'`
      : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

  const styleCsp =
    process.env.NODE_ENV === "development"
      ? "'self' 'unsafe-inline'"
      : `'self' 'nonce-${nonce}'`;

  const cspHeader = `
    default-src 'self';
    script-src ${scriptCsp};
    style-src ${styleCsp};
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  const contentSecurityPolicyHeaderValue = cspHeader
    // eslint-disable-next-line unicorn/prefer-string-replace-all, regexp/require-unicode-regexp, regexp/require-unicode-sets-regexp
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
};

export const config = {
  matcher: [
    {
      missing: [
        { key: "next-router-prefetch", type: "header" },
        { key: "purpose", type: "header", value: "prefetch" },
      ],
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
    },
  ],
};
