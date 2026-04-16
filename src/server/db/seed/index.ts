import { db } from "..";
import * as config from './config'
import * as schema from '../schema/schema'

const hours = config.HOURS.map((item) => ({ day: item.day, start: item.start, end: item.end }))
await db.insert(schema.time).values(hours)

const menuItems = config.MENU_ITEMS.map((item) => ({ item: item.name, price: item.price, description: item.description }))
await db.insert(schema.menu).values(menuItems)

await db.insert(schema.about).values({
    description: config.ABOUT
})

await db.insert(schema.address).values({
    name: config.ADDRESS_NAME,
    location: config.ADDRESS_NAME,
    mapsrc: config.GOOGLE_MAPS_SRC
})

await db.insert(schema.contact).values({
    email: config.EMAIL,
    phone: config.PHONE_NUMBER,
    insta: config.INSTAGRAM
})