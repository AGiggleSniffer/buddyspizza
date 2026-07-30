"use server";
import { deleteMenu, patchAbout, patchAddress, patchContact, patchMenu, patchTime, postMenu } from "@/server/queries";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import z from "zod";
import { contact } from "@/server/db/schema/schema";


const AboutSchema = z.string().trim().min(10).max(2000);
const ContactSchema = z.object({
    phone: z.string().min(7),
    email: z.email(),
    insta: z.string().optional(),
});
const AddressSchema = z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().length(2),
    zip: z.string().min(5),
});
const TimeSchema = z.object({
    day: z.string(),
    open: z.string(),
    close: z.string(),
    closed: z.boolean(),
});
const MenuItemSchema = z.object({
    item: z.string().min(1),
    price: z.string(),
    category: z.string().min(1),
    description: z.string().default(""),
});


export async function requireAdmin() {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    if (!session) throw new Error("Unauthorized");
    return session;
}

export type response = {
    success: boolean;
    error?: string;
}

export async function updateAbout(description: string): Promise<response> {
    await requireAdmin();
    const parsed = AboutSchema.safeParse(description);
    if (!parsed.success) {
        return { success: false, error: parsed.error.message };
    }
    await patchAbout(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateContact(contact: contact): Promise<response> {
    await requireAdmin();
    const parsed = ContactSchema.safeParse(contact);
    if (!parsed.success) {
        return { success: false, error: parsed.error.message };
    }
    await patchContact(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateAddress(address: unknown): Promise<response> {
    await requireAdmin();
    const parsed = AddressSchema.safeParse(address);
    if (!parsed.success) {
        return { success: false, error: parsed.error.message };
    }
    await patchAddress(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateTime(time: unknown): Promise<response> {
    await requireAdmin();
    const parsed = TimeSchema.partial().safeParse(time);
    if (!parsed.success) {
        return { success: false, error: parsed.error.message };
    }
    await patchTime(day, parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function addMenuItem(item: unknown): Promise<response> {
    await requireAdmin();
    const parsed = MenuItemSchema.safeParse(item);
    if (!parsed.success) {
        return { success: false, error: parsed.error.message };
    }
    await postMenu(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateMenuItem(originalItem: string, item: unknown): Promise<response> {
    await requireAdmin();
    const parsed = MenuItemSchema.safeParse(item);
    if (!parsed.success) {
        return { success: false, error: parsed.error.message };
    }
    await patchMenu(originalItem, parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function removeMenuItem(item: string): Promise<response> {
    await requireAdmin();
    await deleteMenu(item);
    revalidatePath("/dashboard");
    return { success: true };
}
