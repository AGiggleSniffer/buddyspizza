import { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  integer,
  time as timetype,
  boolean,
} from "drizzle-orm/pg-core";

export const time = pgTable("time", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  day: text("day").notNull().unique(),
  start: timetype({ precision: 0 }).notNull().default("00:00"),
  end: timetype({ precision: 0 }).notNull().default("00:00"),
  closed: boolean().default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const about = pgTable("about", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  description: text("description").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const address = pgTable("address", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  mapsrc: text("mapsrc").notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  stateCode: text("stateCode").notNull(),
  zip: integer("zip").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const contact = pgTable("contact", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  insta: text("insta").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const menu = pgTable("menu", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  item: text("item").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export type about = InferSelectModel<typeof about>;
export type time = InferSelectModel<typeof time>;
export type contact = InferSelectModel<typeof contact>;
export type address = InferSelectModel<typeof address>;
export type menu = InferSelectModel<typeof menu>;
