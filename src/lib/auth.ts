import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";
import { count } from "drizzle-orm";

const alreadySeededAdmin = async () => {
  const user = await db.query.user.findFirst();
  return user ? true : false;
}

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
