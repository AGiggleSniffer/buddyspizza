import "dotenv/config";
import { auth } from "@/lib/auth";
import { db } from "..";
import { eq } from "drizzle-orm";
import * as schema from "../schema/auth-schema";

const createAdminUser = async () => {
  const admin = await db.query.user.findFirst({
    where: eq(schema.user.name, "Admin"),
  });

  if (admin) {
    console.log("Admin already exists in the database. Skipping seeding.");
    return;
  }

  process.env.ALLOW_SIGNUPS = "true";
  await auth.api.signUpEmail({
    body: {
      email: process.env.ADMIN_EMAIL!,
      password: process.env.ADMIN_PASSWORD!,
      name: "Admin",
    },
  });
};

export default createAdminUser;
