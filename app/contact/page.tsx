import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Navigation,
} from "lucide-react";

import Image from "next/image";
import { gallery, site, wa } from "@/data/site";

const galaxyMaps =
  "https://www.google.com/maps/search/?api=1&query=Galaxy+mobiles+thodupuzha+private+bus+stand";

export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="container mt-4">
        <div className="paper grid gap-6 px-6 py-9 sm:px-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-[9px] font-bold tracking-[.18em] text-[#8a8379]">
              COME VISIT US
            </div>

            <h1 className="serif mt-2 text-4xl font-bold">
              Visit Our Store
            </h1>

            <p className="mt-2 max-w-xl text-[11px] leading-5 text-[#6d675f]">
              Visit Galaxy Mobiles at Thodupuzha Private Bus Stand
              and explore our latest mobiles, accessories,
              services and exchange offers.
            </p>
          </div>

          <div>
            <div className="serif text-3xl font-bold">
              4.8 / 5
            </div>

            <div className="text-[11px] tracking-[2px] text-[#e4b600]">
              ★★★★★
            </div>

            <div className="mt-1 text-[8px] text-[#8a8379]">
              Based on 50+ reviews
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + LOCATION */}
      <section className="container mt-7 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">

        {/* LEFT INFORMATION */}
        <div className="grid gap-3">

          {/* CALL */}
          <a
            href={`tel:${site.phone}`}
            className="paper flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="rounded-full bg-[#f5c72c] p-3">
              <Phone size={17} />
            </span>

            <span>
              <b className="block text-[11px]">
                Call Us
              </b>

              <small className="text-[9px] text-[#8a8379]">
                {site.phone}
              </small>
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href={wa(
              "Hello Galaxy Mobiles, I would like to chat."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="paper flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="rounded-full bg-[#dff5e5] p-3">
              <MessageCircle size={17} />
            </span>

            <span>
              <b className="block text-[11px]">
                WhatsApp
              </b>

              <small className="text-[9px] text-[#8a8379]">
                Chat with us
              </small>
            </span>
          </a>

          {/* EXACT LOCATION */}
          <div className="paper flex items-center gap-4 p-5">
            <span className="rounded-full bg-[#f5c72c] p-3">
              <MapPin size={17} />
            </span>

            <span>
              <b className="block text-[11px]">
                Location
              </b>

              <small className="text-[9px] leading-4 text-[#8a8379]">
                Galaxy Mobiles
                <br />
                Thodupuzha Private Bus Stand
                <br />
                Thodupuzha, Kerala 685584
              </small>
            </span>
          </div>

          {/* HOURS */}
          <div className="paper flex items-center gap-4 p-5">
            <span className="rounded-full bg-[#f5c72c] p-3">
              <Clock size={17} />
            </span>

            <span>
              <b className="block text-[11px]">
                Opening Hours
              </b>

              <small className="text-[9px] text-[#8a8379]">
                9:00 AM – 9:00 PM
              </small>
            </span>
          </div>
        </div>

        {/* MAP CARD */}
        <div className="paper overflow-hidden">

          <div className="relative min-h-[330px] overflow-hidden bg-[#eeeae2]">

            {/* MAP STYLE BACKGROUND */}
            <div className="absolute inset-0">

              <div className="absolute left-[8%] top-[15%] h-[1px] w-[85%] rotate-[12deg] bg-white" />
              <div className="absolute left-[2%] top-[42%] h-[2px] w-[100%] rotate-[-8deg] bg-white" />
              <div className="absolute left-[15%] top-[70%] h-[1px] w-[90%] rotate-[5deg] bg-white" />

              <div className="absolute left-[20%] top-[5%] h-[100%] w-[2px] rotate-[18deg] bg-white" />
              <div className="absolute left-[62%] top-[-10%] h-[120%] w-[2px] rotate-[-25deg] bg-white" />

              <div className="absolute left-[10%] top-[25%] h-12 w-28 rounded-full bg-[#e2dfd6]" />
              <div className="absolute right-[10%] top-[55%] h-16 w-32 rounded-full bg-[#e2dfd6]" />
              <div className="absolute bottom-[8%] left-[35%] h-12 w-36 rounded-full bg-[#e2dfd6]" />

              <div className="absolute left-[0%] top-[48%] h-[3px] w-[100%] rotate-[-8deg] bg-[#d9e6df]" />
            </div>

            {/* CENTER PIN */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="relative flex flex-col items-center">

                <div className="mb-3 rounded-xl bg-white px-4 py-2 shadow-xl">
                  <div className="text-[10px] font-bold">
                    Galaxy Mobiles
                  </div>

                  <div className="mt-0.5 text-[8px] text-[#8a8379]">
                    Thodupuzha Private Bus Stand
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-3 animate-ping rounded-full bg-[#f5c72c]/30" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c72c] shadow-xl">
                    <MapPin size={25} />
                  </div>
                </div>
              </div>
            </div>

            {/* MAP LABEL */}
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 shadow-md">
              <div className="text-[8px] font-bold">
                THODUPUZHA
              </div>

              <div className="text-[7px] text-[#8a8379]">
                Idukki • Kerala
              </div>
            </div>
          </div>

          {/* BUTTON AREA */}
          <div className="flex flex-col gap-2 p-3 sm:flex-row">

            <a
              href={galaxyMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#171717] px-4 py-3 text-[9px] font-bold text-white transition hover:bg-[#333]"
            >
              <Navigation size={14} />
              Open Google Maps
            </a>

            <a
              href={galaxyMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#ded9d0] bg-white px-4 py-3 text-[9px] font-bold text-[#171717] transition hover:bg-[#f7f5f1]"
            >
              <MapPin size={14} />
              Get Directions
            </a>

          </div>
        </div>
      </section>

      {/* STORE IMAGE */}
      <section className="container mt-10">
        <div className="relative h-[260px] overflow-hidden rounded-[14px]">

          <Image
            src={gallery[0].src}
            alt="Galaxy Mobiles store"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">

            <div>
              <div className="text-[9px] font-medium tracking-[.2em] text-white/70">
                GALAXY MOBILES
              </div>

              <div className="serif mt-1 text-3xl font-bold">
                Visit Our Store
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="container mt-7">
        <div className="flex flex-col gap-3 rounded-[12px] bg-[#f5c72c] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

          <div>
            <b className="text-sm">
              Have any questions?
            </b>

            <div className="mt-1 text-[9px]">
              Chat with us on WhatsApp →
            </div>
          </div>

          <a
            href={wa(
              "Hello Galaxy Mobiles, I have a question."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#11a44a] px-5 py-3 text-[10px] font-bold text-white transition hover:bg-[#0d8d3f]"
          >
            <MessageCircle size={14} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mb-10 mt-7">
        <div className="paper flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="text-[9px] font-bold tracking-[.18em] text-[#8a8379]">
              GALAXY MOBILES
            </div>

            <h2 className="serif mt-1 text-2xl font-bold">
              Need help choosing a mobile?
            </h2>

            <p className="mt-1 max-w-xl text-[10px] leading-5 text-[#6d675f]">
              Contact us and our team will help you find
              the right device for your needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-[10px] font-bold text-white transition hover:bg-[#333]"
            >
              <Phone size={14} />
              Call Now
            </a>

            <a
              href={wa(
                "Hello Galaxy Mobiles, I need help choosing a mobile."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#11a44a] px-5 py-3 text-[10px] font-bold text-white transition hover:bg-[#0d8d3f]"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}
