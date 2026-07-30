"use server";
import { deleteMenu, patchAbout, patchAddress, patchContact, patchMenu, patchTime, postMenu } from "@/server/queries";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import z, { ZodError } from "zod";
import { contact, time } from "@/server/db/schema/schema";


const AboutSchema = z.string().trim().min(10).max(2000);
const ContactSchema = z.object({
    phone: z.string().min(17).max(17),
    email: z.email(),
    insta: z.string().min(3).max(30),
});
const AddressSchema = z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().length(2),
    zip: z.string().min(5),
});
const TimeSchema = z.object({
    day: z.string(),
    start: z.string().min(5).max(5),
    end: z.string().min(5).max(5),
    closed: z.boolean(),
});
const MenuItemSchema = z.object({
    item: z.string().min(1),
    price: z.string(),
    category: z.string().min(1),
    description: z.string(),
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
    errorMsg?: string;
}

export async function updateAbout(description: string): Promise<response> {
    await requireAdmin();
    const parsed = AboutSchema.safeParse(description);

    if (!parsed.success) {
        return {
            success: parsed.success,
            errorMsg: z.prettifyError(parsed.error)
        };
    }

    await patchAbout(parsed.data);
    revalidatePath("/dashboard");
    return { success: parsed.success };
}

export async function updateContact(contact: contact): Promise<response> {
    await requireAdmin();
    const parsed = ContactSchema.safeParse({
        ...contact,
        phone: `+1 ${contact.phone}`
    });

    if (!parsed.success) {
        console.log(z.prettifyError(parsed.error))
        return {
            success: parsed.success,
            errorMsg: z.prettifyError(parsed.error)
        };
    }
    await patchContact(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateAddress(address: unknown): Promise<response> {
    await requireAdmin();
    const parsed = AddressSchema.safeParse(address);
    if (!parsed.success) {
        return {
            success: parsed.success,
            errorMsg: z.prettifyError(parsed.error)
        };
    }
    await patchAddress(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateTime(day: string, time: time): Promise<response> {
    await requireAdmin();
    console.log(time)
    const parsed = TimeSchema.partial().safeParse(time);
    if (!parsed.success) {
        console.log(time)
        console.log(parsed)
        return {
            success: parsed.success,
            errorMsg: z.prettifyError(parsed.error)
        };
    }
    await patchTime(day, parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function addMenuItem(item: unknown): Promise<response> {
    await requireAdmin();
    const parsed = MenuItemSchema.safeParse(item);
    if (!parsed.success) {
        return {
            success: parsed.success,
            errorMsg: z.treeifyError(parsed.error).errors
        };
    }
    await postMenu(parsed.data);
    revalidatePath("/dashboard");
    return { success: true };
}

export async function updateMenuItem(originalItem: string, item: unknown): Promise<response> {
    await requireAdmin();
    const parsed = MenuItemSchema.safeParse(item);
    if (!parsed.success) {
        return {
            success: parsed.success,
            errorMsg: z.treeifyError(parsed.error).errors
        };
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
