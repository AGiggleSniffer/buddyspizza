import "server-only";

import { db } from "./db";

export const getAbout = async () => {
  const about = await db.query.about.findFirst();
  return about;
};

