import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema1 from "./schema/schema";
import * as schema2 from "./schema/auth-schema";

export const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
  },
  schema: { ...schema1, ...schema2 },
});
