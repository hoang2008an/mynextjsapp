import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongodbConnect";
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {},
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {},
  jwt: {
    encrytion: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt(tokens, account) {
      if (account?.accessToken) {
        tokens.accessToken = account.accessToken;
      }
      return tokens;
    },
    redirect: async (url, baseUrl) => {
      if (url === "/") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
