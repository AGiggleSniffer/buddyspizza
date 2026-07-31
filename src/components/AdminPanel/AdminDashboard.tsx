// import { useState } from "react";
// import {
//   Info,
//   Phone,
//   Clock,
//   MapPin,
//   UtensilsCrossed,
//   Plus,
//   Trash2,
//   Check,
//   Loader2,
//   Pencil,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableCell,
// } from "@/components/ui/table";
// import AboutPanel from "./AboutPanel";

// // ---------------------------------------------------------------------------
// // Mock data — shaped to match the schema implied by the query file
// // (about, contact, time, address, menu). Swap the `save*` functions below
// // for real calls to your API routes (which in turn call patchAbout,
// // patchContact, patchTime/postTime/deleteTime, patchAddress,
// // postMenu/patchMenu/deleteMenu).
// // ---------------------------------------------------------------------------

// const initialAbout =
//   "Family-run since 1994, we serve wood-fired pizza and seasonal antipasti in a converted rail depot downtown.";

// const initialContact = {
//   email: "hello@depotpizzeria.com",
//   phone: "(559) 555-0148",
//   instagram: "@depotpizzeria",
// };

// const initialAddress = {
//   street: "214 Railway Ave",
//   city: "Fresno",
//   state: "CA",
//   zip: "93706",
// };

// const initialTime = [
//   { day: "Monday", open: "11:00", close: "21:00", closed: false },
//   { day: "Tuesday", open: "11:00", close: "21:00", closed: false },
//   { day: "Wednesday", open: "11:00", close: "21:00", closed: false },
//   { day: "Thursday", open: "11:00", close: "22:00", closed: false },
//   { day: "Friday", open: "11:00", close: "23:00", closed: false },
//   { day: "Saturday", open: "12:00", close: "23:00", closed: false },
//   { day: "Sunday", open: "", close: "", closed: true },
// ];

// const initialMenu = [
//   {
//     item: "Margherita",
//     price: "16.00",
//     category: "Pizza",
//     description: "San Marzano, fior di latte, basil",
//   },
//   {
//     item: "Diavola",
//     price: "18.50",
//     category: "Pizza",
//     description: "Soppressata, chili honey, mozzarella",
//   },
//   {
//     item: "Burrata Antipasto",
//     price: "14.00",
//     category: "Starters",
//     description: "Heirloom tomato, basil oil, sourdough",
//   },
// ];

// const NAV = [
//   { key: "about", label: "About", icon: Info },
//   { key: "contact", label: "Contact", icon: Phone },
//   { key: "hours", label: "Hours", icon: Clock },
//   { key: "address", label: "Address", icon: MapPin },
//   { key: "menu", label: "Menu", icon: UtensilsCrossed },
// ];

// function useSaveState() {
//   const [state, setState] = useState("idle"); // idle | saving | saved
//   const trigger = async (fn) => {
//     setState("saving");
//     await fn?.();
//     await new Promise((r) => setTimeout(r, 500)); // simulate network latency
//     setState("saved");
//     setTimeout(() => setState("idle"), 1600);
//   };
//   return [state, trigger];
// }

// function SaveButton({ state, onClick, label = "Save changes", size }) {
//   return (
//     <Button
//       onClick={onClick}
//       disabled={state === "saving"}
//       size={size}
//       className="bg-teal-700 hover:bg-teal-800"
//     >
//       {state === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
//       {state === "saved" && <Check className="h-4 w-4" />}
//       {state === "saving" ? "Saving…" : state === "saved" ? "Saved" : label}
//     </Button>
//   );
// }

// // ---------------------------------------------------------------------------



// // ---------------------------------------------------------------------------

// export default function AdminDashboard() {
//   const [active, setActive] = useState("about");

//   const panels = {
//     about: <AboutPanel />,
//     contact: <ContactPanel />,
//     hours: <HoursPanel />,
//     address: <AddressPanel />,
//     menu: <MenuPanel />,
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <div className="mx-auto flex max-w-5xl">
//         {/* Sidebar */}
//         <aside className="w-56 shrink-0 border-r border-slate-200 bg-white px-3 py-6">
//           <div className="mb-6 px-3">
//             <div className="text-sm font-semibold text-slate-900">
//               Depot Pizzeria
//             </div>
//             <div className="text-xs text-slate-400">Site admin</div>
//           </div>
//           <nav className="space-y-0.5">
//             {NAV.map(({ key, label, icon: Icon }) => (
//               <Button
//                 key={key}
//                 variant={active === key ? "default" : "ghost"}
//                 onClick={() => setActive(key)}
//                 className={
//                   "w-full justify-start gap-2.5 " +
//                   (active === key
//                     ? "bg-teal-700 hover:bg-teal-800"
//                     : "text-slate-600")
//                 }
//               >
//                 <Icon className="h-4 w-4" />
//                 {label}
//               </Button>
//             ))}
//           </nav>
//         </aside>

//         {/* Content */}
//         <main className="flex-1 px-8 py-8">
//           <div className="mx-auto max-w-2xl">{panels[active]}</div>
//         </main>
//       </div>
//     </div>
//   );
// }
