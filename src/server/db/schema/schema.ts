import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";

export const time = pgTable("time", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    day: text("day").notNull().unique(),
    start: text("start").notNull(),
    end: text("end").notNull(),
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
    mapsrc: text("mapsrc").notNull(),
    location: text("location").notNull(),
    name: text("name").notNull(),
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
    price: text("price").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => /* @__PURE__ */ new Date())
        .notNull(),
});