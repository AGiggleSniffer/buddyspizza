import { db } from "..";
import * as config from "./config";
import * as schema from "../schema/schema";
import { PgTable } from "drizzle-orm/pg-core";

const Seed = async () => {
  if (await queryData(schema.time)) {
    console.log("Data already exists in the database. Skipping seeding.");
  } else {
    const hours = config.HOURS.map((item) => ({
      day: item.day,
      start: item.start,
      end: item.end,
    }));
    await db.insert(schema.time).values(hours);
  }

  if (await queryData(schema.menu)) {
    console.log("Data already exists in the database. Skipping seeding.");
  } else {
    const menuItems = config.MENU_ITEMS.map((item) => ({
      item: item.name,
      price: item.price,
      description: item.description,
    }));
    await db.insert(schema.menu).values(menuItems);
  }

  if (await queryData(schema.about)) {
    console.log("Data already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.about).values({
      description: config.ABOUT,
    });
  }

  if (await queryData(schema.address)) {
    console.log("Data already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.address).values({
      name: config.ADDRESS_NAME,
      location: config.ADDRESS_NAME,
      mapsrc: config.GOOGLE_MAPS_SRC,
    });
  }

  if (await queryData(schema.contact)) {
    console.log("Data already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.contact).values({
      email: config.EMAIL,
      phone: config.PHONE_NUMBER,
      insta: config.INSTAGRAM,
    });
  }
};

const queryData = async (table: PgTable) => {
  const data = await db.select().from(table).limit(1);
  if (data.length > 0) {
    console.log(`Data in ${table}:`, data);
    return true;
  }

  return false;
};

export default Seed;
