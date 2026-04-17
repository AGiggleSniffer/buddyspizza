import { Clock, MapPin, Phone } from "lucide-react";

export default function SectionMap({
  name,
  mapsrc,
  location,
  hours,
  phone,
}: {
  name: string;
  mapsrc: string;
  location: string;
  hours: { day: string; start: string; end: string }[];
  phone: string;
}) {
  return (
    <section className="bg-secondary px-2 py-2 md:h-screen md:px-0" id="map">
      <div className="grid h-full grid-rows-2 items-center md:grid-cols-10">
        <div className="h-full overflow-hidden md:col-span-7 md:row-span-2">
          <iframe
            src={mapsrc}
            className="h-full w-full"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex w-full flex-col justify-center p-[15%] tracking-wide md:col-span-3 md:row-span-2 md:py-0">
          <h2 className="border-primary font-playfair border-b-2 pb-4 text-center text-2xl">
            VISIT US
          </h2>
          <div className="space-y-6 py-4">
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-1">{name}</p>
                <p className="text-muted-foreground">{location}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="mb-2">Hours:</p>
                {hours.map((item, index) => (
                  <div key={index}>
                    <p className="text-muted-foreground">{item.day}:</p>
                    <p className="text-muted-foreground">{item.start} - {item.end}</p>
                    {index === hours.length - 1 ? "" : <br />}
                  </div>
                ))}
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
