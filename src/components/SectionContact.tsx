"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { LuInstagram } from "react-icons/lu";

export default function SectionContact({
  email,
  instagram,
  phone,
}: {
  email: string;
  instagram: string;
  phone: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in production)
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="bg-secondary px-2 py-2 md:h-screen md:px-0"
      id="contact"
    >
      <div className="grid h-full grid-rows-2 md:grid-cols-10">
        <div className="h-full flex-col items-center justify-center overflow-hidden md:col-span-6 md:row-span-2 md:flex md:px-25">
          <h3 className="font-playfair mb-6 text-center text-3xl md:text-left">
            Send a Message
          </h3>

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
                // defaultValue="Why don't you make my favorite pizza?!?"
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
              className="bg-primary font-playfair w-full cursor-pointer rounded-lg py-3 font-bold text-white transition-colors hover:bg-orange-400"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex w-full flex-col justify-center p-[15%] tracking-wide md:col-span-3 md:row-span-2 md:py-0">
          <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-2xl">
            SOCIALS
          </h2>
          <div className="space-y-6 py-4">
            <div className="flex gap-4">
              <LuInstagram className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-1">Instagram</p>
                <p className="text-muted-foreground">@{instagram}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-1">Email</p>
                <p className="text-muted-foreground">{email}</p>
              </div>
            </div>

            <div className="border-primary flex gap-4 border-b-2 border-dashed pb-4">
              <Phone className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-1">{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
