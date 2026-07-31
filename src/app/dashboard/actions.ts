"use server";
import {
  deleteMenu,
  patchAbout,
  patchAddress,
  patchContact,
  patchMenu,
  patchTime,
  postMenu,
} from "@/server/queries";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import z from "zod";
import { contact, menu, time } from "@/server/db/schema/schema";

const AboutSchema = z.string().trim().min(10).max(2000);
const ContactSchema = z.object({
  phone: z.string().min(17).max(17),
  email: z.email(),
  insta: z.string().min(3).max(30),
});
const AddressSchema = z.object({
  mapsrc: z.url(),
  name: z.string(),
  street: z.string().min(1),
  city: z.string().min(1),
  stateCode: z.string().length(2),
  zip: z.int().gt(10000).lt(99950),
});
const TimeSchema = z.object({
  day: z.string(),
  start: z.iso.time({ precision: -1 }),
  end: z.iso.time({ precision: -1 }),
  closed: z.boolean(),
});
const MenuItemSchema = z.object({
  item: z.string().min(1),
  price: z.int(),
  description: z.string().min(1),
});

export async function requireAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) throw new Error("Unauthorized");
  return session;
}

export type response = {
  success: boolean;
  errorMsg?: string;
};

export async function updateAbout(description: string): Promise<response> {
  await requireAdmin();
  const parsed = AboutSchema.safeParse(description);

  if (!parsed.success) {
    return {
      success: parsed.success,
      errorMsg: z.prettifyError(parsed.error),
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
    phone: `+1 ${contact.phone}`,
  });

  if (!parsed.success) {
    console.log(z.prettifyError(parsed.error));
    return {
      success: parsed.success,
      errorMsg: z.prettifyError(parsed.error),
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
      errorMsg: z.prettifyError(parsed.error),
    };
  }
  await patchAddress(parsed.data);
  revalidatePath("/dashboard");
  return { success: true };
}

export async function updateTime(day: string, time: time): Promise<response> {
  await requireAdmin();
  console.log(time);
  const parsed = TimeSchema.safeParse(time);
  if (!parsed.success) {
    console.log(time);
    console.log(parsed);
    return {
      success: parsed.success,
      errorMsg: z.prettifyError(parsed.error),
    };
  }
  await patchTime(day, parsed.data);
  revalidatePath("/dashboard");
  return { success: true };
}

export async function addMenuItem(
  item: Omit<menu, "id" | "createdAt" | "updatedAt">,
): Promise<response> {
  await requireAdmin();

  const parsed = MenuItemSchema.safeParse({ ...item, price: item.price || 0 });
  if (!parsed.success) {
    return {
      success: parsed.success,
      errorMsg: z.prettifyError(parsed.error),
    };
  }

  await postMenu(parsed.data);
  revalidatePath("/dashboard");
  return { success: true };
}

export async function updateMenuItem(
  originalItem: string,
  item: Omit<menu, "id" | "createdAt" | "updatedAt">,
): Promise<response> {
  await requireAdmin();
  const parsed = MenuItemSchema.safeParse({ ...item, price: item.price || 0 });
  if (!parsed.success) {
    return {
      success: parsed.success,
      errorMsg: z.prettifyError(parsed.error),
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
