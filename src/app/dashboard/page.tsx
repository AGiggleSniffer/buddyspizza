import {
  getAbout,
  getAddress,
  getContact,
  getMenu,
  getTime,
} from "@/server/queries";
import { getQueryClient } from "@/lib/query-client";
import { ensureSession } from "@better-auth-ui/react/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { addMenuItem, removeMenuItem, updateAbout, updateAddress, updateContact, updateMenuItem, updateTime } from "./actions";
import AdminDashboardClient from "@/components/AdminPanel/AdminDashboardClient";

export default async function AdminPage() {
  const queryClient = getQueryClient();
  const session = await ensureSession(queryClient, auth, {
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in?redirectTo=/dashboard");
  }

  const [about, contact, address, time, menu] = await Promise.all([
    getAbout(),
    getContact(),
    getAddress(),
    getTime(),
    getMenu(),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AdminDashboardClient
        initialAbout={about}
        initialContact={contact}
        initialAddress={address}
        initialTime={time}
        initialMenu={menu}
        actions={{
          updateAbout,
          updateContact,
          updateAddress,
          updateTime,
          addMenuItem,
          updateMenuItem,
          removeMenuItem,
        }}
      />
    </HydrationBoundary>
  );
}
