import "server-only";

import { db } from "./db";

export const getUser = async () => {
  const user = await db.query.usersTable.findFirst();
  return user;
};
