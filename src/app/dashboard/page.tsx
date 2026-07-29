"use client";

import { useAuth, useAuthenticate } from "@better-auth-ui/react";
import Link from "next/link";

import { Spinner } from "@/components/ui/spinner";
import AdminDashboard from "@/components/AdminPanel/AdminDashboard";

export default function Dashboard() {
  const { authClient } = useAuth();
  const { data: session } = useAuthenticate(authClient);

  if (!session) {
    return (
      <div className="my-auto flex justify-center">
        <Spinner color="current" />
      </div>
    );
  }

  return (
    // <div className="my-auto flex flex-col items-center">
    //   <h1 className="text-2xl">Hello, {session.user.email}</h1>

    //   <Link href="/auth/sign-out">Sign Out</Link>
    // </div>
    <AdminDashboard />
  );
}
