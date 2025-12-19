"use client";

import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import ParallaxSection from "./utils/ParallaxSection";

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
    <ParallaxSection id="contact" className="bg-secondary h-screen px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl">Get in Touch</h2>
          <p className="text-muted-foreground text-xl">
            Questions? Comments? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl">Visit Us</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="mb-1">123 Main Street</p>
                  <p className="text-muted-foreground">Anytown, ST 12345</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="mb-1">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="mb-2">Hours:</p>
                  <p className="text-muted-foreground">
                    Monday - Thursday: 11am - 9pm
                  </p>
                  <p className="text-muted-foreground">
                    Friday - Saturday: 11am - 10pm
                  </p>
                  <p className="text-muted-foreground">Sunday: 12pm - 8pm</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-3xl">Send a Message</h3>

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
                className="bg-primary w-full cursor-pointer rounded-lg py-3 text-white transition-colors hover:bg-orange-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
