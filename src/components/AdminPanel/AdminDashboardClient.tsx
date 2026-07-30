"use client";
import { useState } from "react";
import type { menu, contact, address, time } from "@/server/db/schema/schema";
import AboutPanel from "./AboutPanel";
import { Info, Phone, Clock, MapPin, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPanel from "./ContactPanel";
import { response } from "@/app/dashboard/actions";

const NAV = [
  { key: "about", label: "About", icon: Info },
  { key: "contact", label: "Contact", icon: Phone },
  { key: "hours", label: "Hours", icon: Clock },
  { key: "address", label: "Address", icon: MapPin },
  { key: "menu", label: "Menu", icon: UtensilsCrossed },
];

export default function AdminDashboardClient({
  initialAbout,
  initialContact,
  initialAddress,
  initialTime,
  initialMenu,
  actions,
}: {
  initialAbout: string;
  initialContact: contact;
  initialAddress: address;
  initialTime: time[];
  initialMenu: menu[];
  actions: {
    updateAbout: (description: string) => Promise<response>;
    updateContact: (contact: contact) => Promise<response>;
    updateAddress: (address: address) => Promise<response>;
    updateTime: (time: time) => Promise<response>;
    addMenuItem: (item: menu) => Promise<response>;
    updateMenuItem: (originalItem: string, item: menu) => Promise<response>;
    removeMenuItem: (item: string) => Promise<response>;
  };
}) {
  const [active, setActive] = useState<"about" | "contact" | "hours" | "address" | "menu">("about");

  const panels = {
    about: (
      <AboutPanel
        initialDescription={initialAbout}
        saveAbout={actions.updateAbout}
      />
    ),
    contact: (
      <ContactPanel
        initialContact={initialContact}
        saveContact={actions.updateContact}
      />
    ),
    // address: <AddressPanel />,
    // hours: <HoursPanel />,
    // menu: <MenuPanel />,
  };

  return (
    <div className="min-h-screen text-slate-900">
      <div className="mx-auto flex max-w-5xl">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 border-r border-slate-200 bg-white px-3 py-6">
          <div className="flex flex-col font-serif font-bold tracking-wide">
            <span className="text-primary font-playfair font-extrabold">
              Buddy&apos;s
            </span>
            <span className="italic">Woodfire Pizza</span>
          </div>

          <nav className="space-y-0.5">
            {NAV.map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={active === key ? "default" : "ghost"}
                onClick={() => setActive(key as "about" | "contact" | "hours" | "address" | "menu")}
                className={
                  "w-full justify-start gap-2.5 " +
                  (active === key
                    ? "bg-teal-700 hover:bg-teal-800"
                    : "text-slate-600")
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 px-8 py-8">
          <div className="mx-auto max-w-2xl">{panels[active]}</div>
        </main>
      </div>
    </div>
  );
}
