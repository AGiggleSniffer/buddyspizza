"use client";
import { JSX, useState } from "react";
import type { menu, contact, address, time } from "@/server/db/schema/schema";
import AboutPanel from "./AboutPanel";
import { Info, Phone, Clock, MapPin, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactPanel from "./ContactPanel";
import { response } from "@/app/dashboard/actions";
import Logo from "../Logo";
import HoursPanel from "./HoursPanel/HoursPanel";

const NAV = [
  { key: "about", label: "About", icon: Info },
  { key: "contact", label: "Contact", icon: Phone },
  { key: "hours", label: "Hours", icon: Clock },
  { key: "address", label: "Address", icon: MapPin },
  { key: "menu", label: "Menu", icon: UtensilsCrossed },
] as const;

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
    updateTime: (day: string, time: time) => Promise<response>;
    addMenuItem: (item: menu) => Promise<response>;
    updateMenuItem: (originalItem: string, item: menu) => Promise<response>;
    removeMenuItem: (item: string) => Promise<response>;
  };
}) {
  const [active, setActive] = useState<
    "about" | "contact" | "hours" | "address" | "menu"
  >("about");

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
    address: <div />,
    hours: (
      <HoursPanel initialTime={initialTime} saveTime={actions.updateTime} />
    ),
    menu: <div />,
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <aside className="min-h-screen w-56 shrink-0 border-r px-3 py-6">
          <div className="mb-6">
            <Logo />
          </div>

          <nav className="space-y-0.5">
            {NAV.map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={active === key ? "default" : "ghost"}
                onClick={() => setActive(key)}
                className={
                  "w-full cursor-pointer justify-start gap-2.5" +
                  (active === key ? "" : "")
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-8 py-8">
          <div className="mx-auto max-w-2xl">{panels[active]}</div>
        </main>
      </div>
    </div>
  );
}
