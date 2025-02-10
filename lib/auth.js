import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
export const NEXT_AUTH = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
cookies: {
  sessionToken: {
    name: "opinion-orbit", // Custom session cookie name
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use 'true' in production for HTTPS
      sameSite: "lax", // Can be "strict", "lax", or "none"
      path: "/", // Ensure it's accessible across your app
    },
  },
},

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        //   // Check if the user already exists based on OAuth provider and account ID
        let existingUser = await prisma.user.findFirst({
          where: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        });
        //   // If no user exists, create a new one
        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          });
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Prevent sign-in in case of error
      }
    },

    async session({ session, user, token }) {
      //   Fetch the user session from the database based on user ID
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },

  async jwt({ token, user }) {
    // Attach the user ID to the JWT token for later use in the session
    if (user) {
      token.id = user.id;
    }
    return token;
  },
  },
  pages: {
    signIn: "/signin", // Customize the sign-in page URL if needed
    error: "/", // Customize the error page URL if needed
    newnewUser: "/dashboard",
  },
  secret: process.env.JWT_SECRET,
};
