import { db } from "..";
import * as config from "./config";
import * as schema from "../schema/schema";
import { PgTable } from "drizzle-orm/pg-core";
import createAdminUser from "./admin";

async function Seed() {
  if (await queryData(schema.time)) {
    console.log("⚠️  Time already exists in the database. Skipping seeding.");
  } else {
    const hours = config.HOURS.map((item) => ({
      day: item.day,
      // start: item.start,
      // end: item.end,
    }));
    await db.insert(schema.time).values(hours).then(() => console.log());
    console.log("🌱 Time seeded")
  }

  if (await queryData(schema.menu)) {
    console.log("⚠️  Menu already exists in the database. Skipping seeding.");
  } else {
    const menuItems = config.MENU_ITEMS.map((item) => ({
      item: item.name,
      price: +item.price,
      description: item.description,
    }));
    await db.insert(schema.menu).values(menuItems);
    console.log("🌱 Menu seeded")
  }

  if (await queryData(schema.about)) {
    console.log("⚠️  About already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.about).values({
      description: config.ABOUT,
    });
    console.log("🌱 About seeded")
  }

  if (await queryData(schema.address)) {
    console.log("⚠️  Address already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.address).values(config.ADDRESS);
    console.log("🌱 Address seeded")
  }

  if (await queryData(schema.contact)) {
    console.log("⚠️  Contact already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.contact).values({
      email: config.EMAIL,
      phone: config.PHONE_NUMBER,
      insta: config.INSTAGRAM,
    });
    console.log("🌱 Contact seeded")
  }

  if (await queryData(schema.photo)) {
    console.log("⚠️  Photo already exists in the database. Skipping seeding.");
  } else {
    await db.insert(schema.photo).values(config.PHOTOS);
    console.log("🌱 Photo seeded")
  }
}

const queryData = async (table: PgTable) => {
  const data = await db.select().from(table).limit(1);
  if (data.length > 0) {
    return true;
  }

  return false;
};

createAdminUser();
Seed();
