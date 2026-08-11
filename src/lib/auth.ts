import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";

let alreadySeededAdmin: boolean;

try {
  alreadySeededAdmin = (await db.query.user.findFirst()) ? true : false;
} catch {
  alreadySeededAdmin = false;
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [],
  emailAndPassword: {
    enabled: true,
    disableSignUp: alreadySeededAdmin,
  },
  trustedOrigins: ["http://localhost:3000", "https://staging.agiggletech.win"],
});
