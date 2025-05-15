import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "../../../../generated/prisma";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Recherche de l'utilisateur par email
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          // Si l'utilisateur n'existe pas
          if (!user) {
            console.log("Utilisateur non trouvé:", credentials.email);
            return null;
          }

          // Vérification du mot de passe
          const passwordMatch = await bcrypt.compare(credentials.password, user.password);

          // Si le mot de passe ne correspond pas
          if (!passwordMatch) {
            console.log("Mot de passe incorrect pour:", credentials.email);
            return null;
          }

          // Retourne les données de l'utilisateur (sans le mot de passe)
          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          };
        } catch (error) {
          console.error("Erreur lors de l'authentification:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  secret: process.env.NEXTAUTH_SECRET || "default-secret-key-change-in-production",
});

export { handler as GET, handler as POST };
