import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";
import { APIError, createAuthMiddleware } from "better-auth/api";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [],
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:3000", "https://staging.agiggletech.win"],
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path !== "/sign-up/email") return;

      const existingUser = await db.query.user.findFirst();
      if (existingUser) {
        throw new APIError("FORBIDDEN", {
          message: "Sign up is disabled.",
        });
      }
    })
  }
});
