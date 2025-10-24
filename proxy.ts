import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "pt",
  localePrefix: "always",
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
