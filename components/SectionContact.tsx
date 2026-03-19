"use client";

import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function SectionContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in production)
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-secondary h-screen py-2" id="contact">
      <div className="grid h-full grid-cols-10 items-center">
        <div className="col-span-7 px-25 tracking-wide">
          <h3 className="font-playfair mb-6 text-3xl">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-muted-foreground mb-2 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="focus:ring-primary border-muted-foreground w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-muted-foreground mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="focus:ring-primary border-muted-foreground w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-muted-foreground mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                cols={50}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="focus:ring-primary border-muted-foreground w-full resize-none rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary font-playfair w-full cursor-pointer rounded-lg py-3 text-white transition-colors hover:bg-orange-400"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="col-span-3 px-25 tracking-wide">
          <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-2xl">
            SOCIALS
          </h2>
          <div className="space-y-6 py-4">
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-1">Firefly Lounge</p>
                <p className="text-muted-foreground">
                  1443 Fulton Ave, Sacramento, CA 95825
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-2">Hours:</p>
                <p className="text-muted-foreground">Saturdays:</p>
                <p className="text-muted-foreground">4pm - 10pm</p>
              </div>
            </div>

            <div className="border-primary flex gap-4 border-b-2 border-dashed pb-4">
              <Phone className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-1">(555) 555-5555</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
