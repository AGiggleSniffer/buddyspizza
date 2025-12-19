import { Clock, MapPin, Phone } from "lucide-react";
import ParallaxSection from "./utils/ParallaxSection";

export default function SectionMap() {
  return (
    <ParallaxSection className="bg-secondary h-screen px-4 py-20" id="map">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl">Come Visit</h2>
          <p className="text-muted-foreground text-xl">Drop By And Say Hi!</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6236.94014556288!2d-121.40467302365303!3d38.59204946466265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ada4aed7d81db%3A0x4cb3462b68159820!2sFirefly%20Lounge!5e0!3m2!1sen!2sus!4v1766071035428!5m2!1sen!2sus"
              className="shadow-xl"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
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
        </div>
      </div>
    </ParallaxSection>
  );
}
