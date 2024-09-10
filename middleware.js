import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Explicitly mark sign-in and sign-up routes as public
  publicRoutes: ['/sign-in', '/sign-up', '/'],
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
