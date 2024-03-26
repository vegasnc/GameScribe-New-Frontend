import NextAuth from "next-auth/next";
import { authOptions } from "./options";

/*
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
*/
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 *
 *
 *
 */

//eslint-disable-next-line
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
// export const getServerAuthSession = () => getServerSession(authOptions);
