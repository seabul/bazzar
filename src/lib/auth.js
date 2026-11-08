import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

if (!process.env.BETTER_AUTH_MONGO_URI) {
  throw new Error("Missing BETTER_AUTH_MONGO_URI in environment");
}

let client;
if (!global._mongoClient) {
  client = new MongoClient(process.env.BETTER_AUTH_MONGO_URI);
  global._mongoClient = client;
} else {
  client = global._mongoClient;
}

const db = client.db("bazardor");

const rawBaseUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000";
const baseURL = rawBaseUrl.replace(/\/signin\/?$/, "").replace(/\/+$/, "");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  baseURL,
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  socialProviders: {
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {}),
    ...(process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET
      ? {
          discord: {
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
          },
        }
      : {}),
  },
  trustedOrigins: [
    "http://localhost:3000",
    process.env.BETTER_AUTH_URL,
    baseURL,
    rawBaseUrl,
  ].filter(Boolean),
});
