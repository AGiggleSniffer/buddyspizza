import { Clock, MapPin, Phone } from "lucide-react";

export default function SectionMap() {
  return (
    <section className="bg-secondary h-screen py-2" id="map">
      <div className="grid h-full grid-cols-10 items-center">
        <div className="col-span-7 flex h-full justify-end overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6236.94014556288!2d-121.40467302365303!3d38.59204946466265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ada4aed7d81db%3A0x4cb3462b68159820!2sFirefly%20Lounge!5e0!3m2!1sen!2sus!4v1766071035428!5m2!1sen!2sus"
            className="h-full w-full"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-span-3 px-25 tracking-wide">
          <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-2xl">
            VISIT US
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
