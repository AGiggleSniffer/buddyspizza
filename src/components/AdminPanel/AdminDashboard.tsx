import { useState } from "react";
import {
  Info,
  Phone,
  Clock,
  MapPin,
  UtensilsCrossed,
  Plus,
  Trash2,
  Check,
  Loader2,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import AboutPanel from "./AboutPanel";

// ---------------------------------------------------------------------------
// Mock data — shaped to match the schema implied by the query file
// (about, contact, time, address, menu). Swap the `save*` functions below
// for real calls to your API routes (which in turn call patchAbout,
// patchContact, patchTime/postTime/deleteTime, patchAddress,
// postMenu/patchMenu/deleteMenu).
// ---------------------------------------------------------------------------

const initialAbout =
  "Family-run since 1994, we serve wood-fired pizza and seasonal antipasti in a converted rail depot downtown.";

const initialContact = {
  email: "hello@depotpizzeria.com",
  phone: "(559) 555-0148",
  instagram: "@depotpizzeria",
};

const initialAddress = {
  street: "214 Railway Ave",
  city: "Fresno",
  state: "CA",
  zip: "93706",
};

const initialTime = [
  { day: "Monday", open: "11:00", close: "21:00", closed: false },
  { day: "Tuesday", open: "11:00", close: "21:00", closed: false },
  { day: "Wednesday", open: "11:00", close: "21:00", closed: false },
  { day: "Thursday", open: "11:00", close: "22:00", closed: false },
  { day: "Friday", open: "11:00", close: "23:00", closed: false },
  { day: "Saturday", open: "12:00", close: "23:00", closed: false },
  { day: "Sunday", open: "", close: "", closed: true },
];

const initialMenu = [
  {
    item: "Margherita",
    price: "16.00",
    category: "Pizza",
    description: "San Marzano, fior di latte, basil",
  },
  {
    item: "Diavola",
    price: "18.50",
    category: "Pizza",
    description: "Soppressata, chili honey, mozzarella",
  },
  {
    item: "Burrata Antipasto",
    price: "14.00",
    category: "Starters",
    description: "Heirloom tomato, basil oil, sourdough",
  },
];

const NAV = [
  { key: "about", label: "About", icon: Info },
  { key: "contact", label: "Contact", icon: Phone },
  { key: "hours", label: "Hours", icon: Clock },
  { key: "address", label: "Address", icon: MapPin },
  { key: "menu", label: "Menu", icon: UtensilsCrossed },
];

function useSaveState() {
  const [state, setState] = useState("idle"); // idle | saving | saved
  const trigger = async (fn) => {
    setState("saving");
    await fn?.();
    await new Promise((r) => setTimeout(r, 500)); // simulate network latency
    setState("saved");
    setTimeout(() => setState("idle"), 1600);
  };
  return [state, trigger];
}

function SaveButton({ state, onClick, label = "Save changes", size }) {
  return (
    <Button
      onClick={onClick}
      disabled={state === "saving"}
      size={size}
      className="bg-teal-700 hover:bg-teal-800"
    >
      {state === "saving" && <Loader2 className="h-4 w-4 animate-spin" />}
      {state === "saved" && <Check className="h-4 w-4" />}
      {state === "saving" ? "Saving…" : state === "saved" ? "Saved" : label}
    </Button>
  );
}


// ---------------------------------------------------------------------------

function ContactPanel() {
  const [contact, setContact] = useState(initialContact);
  const [saveState, save] = useSaveState();
  const update = (key) => (e) =>
    setContact((c) => ({ ...c, [key]: e.target.value }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>How customers reach you.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={contact.email} onChange={update("email")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={contact.phone} onChange={update("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            value={contact.instagram}
            onChange={update("instagram")}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton state={saveState} onClick={() => save()} />
      </CardFooter>
    </Card>
  );
}

function AddressPanel() {
  const [address, setAddress] = useState(initialAddress);
  const [saveState, save] = useSaveState();
  const update = (key) => (e) =>
    setAddress((a) => ({ ...a, [key]: e.target.value }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Address</CardTitle>
        <CardDescription>Your restaurant's physical location.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            value={address.street}
            onChange={update("street")}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" value={address.city} onChange={update("city")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State</Label>
          <Input id="state" value={address.state} onChange={update("state")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="zip">ZIP</Label>
          <Input id="zip" value={address.zip} onChange={update("zip")} />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <SaveButton state={saveState} onClick={() => save()} />
      </CardFooter>
    </Card>
  );
}

function HoursPanel() {
  const [time, setTime] = useState(initialTime);
  const [rowState, setRowState] = useState({}); // day -> idle|saving|saved

  const updateRow = (day, patch) =>
    setTime((rows) =>
      rows.map((r) => (r.day === day ? { ...r, ...patch } : r)),
    );

  const saveRow = async (day) => {
    setRowState((s) => ({ ...s, [day]: "saving" }));
    await new Promise((r) => setTimeout(r, 450));
    setRowState((s) => ({ ...s, [day]: "saved" }));
    setTimeout(() => setRowState((s) => ({ ...s, [day]: "idle" })), 1400);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hours</CardTitle>
        <CardDescription>Open and close times by day.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Open</TableHead>
              <TableHead>Close</TableHead>
              <TableHead>Closed</TableHead>
              <TableHead className="text-right">Save</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {time.map((row) => (
              <TableRow key={row.day}>
                <TableCell className="font-medium">{row.day}</TableCell>
                <TableCell>
                  <Input
                    type="time"
                    disabled={row.closed}
                    value={row.open}
                    onChange={(e) =>
                      updateRow(row.day, { open: e.target.value })
                    }
                    className="w-32"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="time"
                    disabled={row.closed}
                    value={row.close}
                    onChange={(e) =>
                      updateRow(row.day, { close: e.target.value })
                    }
                    className="w-32"
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={row.closed}
                    onCheckedChange={(checked) =>
                      updateRow(row.day, { closed: !!checked })
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  <SaveButton
                    state={rowState[row.day] || "idle"}
                    onClick={() => saveRow(row.day)}
                    label="Save"
                    size="sm"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function MenuPanel() {
  const [menu, setMenu] = useState(initialMenu);
  const [editingIdx, setEditingIdx] = useState(null);
  const [draft, setDraft] = useState(null);
  const [saveState, save] = useSaveState();

  const startAdd = () => {
    setDraft({ item: "", price: "", category: "", description: "" });
    setEditingIdx(-1);
  };
  const startEdit = (idx) => {
    setDraft({ ...menu[idx] });
    setEditingIdx(idx);
  };
  const cancel = () => {
    setDraft(null);
    setEditingIdx(null);
  };
  const remove = (idx) => setMenu((m) => m.filter((_, i) => i !== idx));

  const commit = async () => {
    await save(async () => {
      if (editingIdx === -1) {
        setMenu((m) => [...m, draft]);
      } else {
        setMenu((m) => m.map((row, i) => (i === editingIdx ? draft : row)));
      }
    });
    cancel();
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle>Menu</CardTitle>
          <CardDescription>Items, prices, and descriptions.</CardDescription>
        </div>
        <Button variant="outline" size="sm" onClick={startAdd}>
          <Plus className="h-4 w-4" /> Add item
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {draft && (
          <Card className="border-teal-200 bg-teal-50/50">
            <CardContent className="grid gap-3 pt-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="item">Item</Label>
                <Input
                  id="item"
                  value={draft.item}
                  onChange={(e) => setDraft({ ...draft, item: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  className="font-mono"
                  value={draft.price}
                  onChange={(e) =>
                    setDraft({ ...draft, price: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={draft.category}
                  onChange={(e) =>
                    setDraft({ ...draft, category: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={draft.description}
                  onChange={(e) =>
                    setDraft({ ...draft, description: e.target.value })
                  }
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="ghost" onClick={cancel}>
                Cancel
              </Button>
              <SaveButton
                state={saveState}
                onClick={commit}
                label="Save item"
              />
            </CardFooter>
          </Card>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menu.map((row, idx) => (
              <TableRow key={row.item + idx}>
                <TableCell className="font-medium">{row.item}</TableCell>
                <TableCell className="text-muted-foreground">
                  {row.category}
                </TableCell>
                <TableCell className="font-mono">${row.price}</TableCell>
                <TableCell className="text-muted-foreground">
                  {row.description}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => startEdit(idx)}
                      aria-label={`Edit ${row.item}`}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(idx)}
                      aria-label={`Delete ${row.item}`}
                      className="hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {menu.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-muted-foreground py-8 text-center text-sm"
                >
                  No menu items yet — add one to get started.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------

export default function AdminDashboard() {
  const [active, setActive] = useState("about");

  const panels = {
    about: <AboutPanel />,
    contact: <ContactPanel />,
    hours: <HoursPanel />,
    address: <AddressPanel />,
    menu: <MenuPanel />,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-5xl">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 border-r border-slate-200 bg-white px-3 py-6">
          <div className="mb-6 px-3">
            <div className="text-sm font-semibold text-slate-900">
              Depot Pizzeria
            </div>
            <div className="text-xs text-slate-400">Site admin</div>
          </div>
          <nav className="space-y-0.5">
            {NAV.map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={active === key ? "default" : "ghost"}
                onClick={() => setActive(key)}
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
