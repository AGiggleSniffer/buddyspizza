import "server-only";
import { db } from "./db";
import * as schema from "./db/schema/schema";
import { eq } from "drizzle-orm";

//////////////////////////////////////
//          ABOUT QUERIES           //
//////////////////////////////////////

export const getAbout = async (): Promise<string> => {
  const about = await db.query.about.findFirst();
  if (!about) {
    throw new Error("About information not found");
  }
  return about.description;
};

export const patchAbout = async (description: string): Promise<void> => {
  const about = await db.query.about.findFirst();
  if (about) {
    await db
      .update(schema.about)
      .set({ description })
      .where(eq(schema.about.id, about.id));
  } else {
    throw new Error("About information not found");
  }
};

///////////////////////////////////////
//         CONTACT QUERIES           //
///////////////////////////////////////

export const getContact = async (): Promise<schema.contact> => {
  const contact = await db.query.contact.findFirst();
  if (!contact) {
    throw new Error("Contact information not found");
  }
  return contact;
};

export const patchContact = async (
  contactInfo: Partial<schema.contact>,
): Promise<void> => {
  const contact = await db.query.contact.findFirst();
  if (contact) {
    await db
      .update(schema.contact)
      .set(contactInfo)
      .where(eq(schema.contact.id, contact.id));
  } else {
    throw new Error("Contact information not found");
  }
};

/////////////////////////////////////////
//            TIME QUERIES             //
/////////////////////////////////////////

export const getTime = async (): Promise<schema.time[]> => {
  const time = await db.query.time.findMany();
  if (!time) {
    throw new Error("Time information not found");
  }
  return time;
};

export const patchTime = async (
  day: string,
  timeInfo: Partial<schema.time>,
): Promise<void> => {
  const time = await db.query.time.findFirst({
    where: eq(schema.time.day, day),
  });
  if (time) {
    await db.update(schema.time).set(timeInfo).where(eq(schema.time.day, day));
  } else {
    throw new Error("Time information not found");
  }
};

export const deleteTime = async (day: string): Promise<void> => {
  await db.delete(schema.time).where(eq(schema.time.day, day));
};

export const postTime = async (
  timeInfo: Omit<schema.time, "id" | "createdAt" | "updatedAt">,
): Promise<schema.time> => {
  const time = await db.insert(schema.time).values(timeInfo).returning();
  if (!time) {
    throw new Error("Time information not found");
  }
  return time[0];
};

/////////////////////////////////////////
//            ADDRESS QUERIES          //
/////////////////////////////////////////

export const getAddress = async (): Promise<schema.address> => {
  const address = await db.query.address.findFirst();
  if (!address) {
    throw new Error("Address information not found");
  }
  return address;
};

export const patchAddress = async (
  addressInfo: Partial<schema.address>,
): Promise<void> => {
  const address = await db.query.address.findFirst();
  if (address) {
    await db
      .update(schema.address)
      .set(addressInfo)
      .where(eq(schema.address.id, address.id));
  } else {
    throw new Error("Address information not found");
  }
};

//////////////////////////////////////////
//             MENU QUERIES             //
//////////////////////////////////////////

export const getMenu = async (): Promise<schema.menu[]> => {
  const menu = await db.query.menu.findMany();
  if (!menu) {
    throw new Error("Menu information not found");
  }
  return menu;
};

export const postMenu = async (
  menuInfo: Omit<schema.menu, "id" | "createdAt" | "updatedAt">,
): Promise<schema.menu> => {
  const menu = await db.insert(schema.menu).values(menuInfo).returning();
  if (!menu) {
    throw new Error("Menu information not found");
  }
  return menu[0];
};

export const patchMenu = async (
  item: string,
  menuInfo: Partial<schema.menu>,
): Promise<void> => {
  await db.update(schema.menu).set(menuInfo).where(eq(schema.menu.item, item));
};

export const deleteMenu = async (item: string): Promise<void> => {
  await db.delete(schema.menu).where(eq(schema.menu.item, item));
};
