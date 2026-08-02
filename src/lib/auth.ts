import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [],
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  trustedOrigins: ["http://localhost:3000", "https://staging.agiggletech.win"],
});
