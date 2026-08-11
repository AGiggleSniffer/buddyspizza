import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";

const alreadySeededAdmin = async () => {
  try {
    return (await db.query.user.findFirst()) ? true : false;
  } catch {
    return false;
  }
};

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [],
  emailAndPassword: {
    enabled: true,
    disableSignUp: await alreadySeededAdmin(),
  },
  trustedOrigins: ["http://localhost:3000", "https://staging.agiggletech.win"],
});
