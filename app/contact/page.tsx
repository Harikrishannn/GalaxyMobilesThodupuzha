import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Image from "next/image";
import { gallery, site, wa } from "@/data/site";

export default function Contact() {
  return (
    <main>
      {/* =========================
          HERO / STORE INTRO
      ========================== */}
      <section className="container mt-4">
        <div className="paper grid gap-6 px-6 py-9 sm:px-10 md:grid-cols-[1fr_auto] md:items-center">
          
          <div>
            <div className="text-[9px] font-bold tracking-[.18em] text-[#8a8379]">
              COME VISIT US
            </div>

            <h1 className="serif mt-2 text-4xl font-bold">
              Visit Our Store
            </h1>

            <p className="mt-2 text-[11px] text-[#6d675f]">
              Visit Galaxy Mobiles and explore our latest mobiles,
              accessories, services and exchange offers.
            </p>
          </div>

          {/* Rating */}
          <div>
            <div className="serif text-3xl font-bold">
              4.8 / 5
            </div>

            <div className="text-[11px] tracking-[2px] text-[#e4b600]">
              ★★★★★
            </div>

            <div className="mt-1 text-[8px] text-[#8a8379]">
              Based on 200+ reviews
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          CONTACT DETAILS + MAP
      ========================== */}
      <section className="container mt-7 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">

        {/* LEFT CONTACT CARDS */}
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


          {/* LOCATION */}
          <div className="paper flex items-center gap-4 p-5">
            <span className="rounded-full bg-[#f5c72c] p-3">
              <MapPin size={17} />
            </span>

            <span>
              <b className="block text-[11px]">
                Location
              </b>

              <small className="text-[9px] text-[#8a8379]">
                {site.location}
              </small>
            </span>
          </div>


          {/* OPENING HOURS */}
          <div className="paper flex items-center gap-4 p-5">
            <span className="rounded-full bg-[#f5c72c] p-3">
              <Clock size={17} />
            </span>

            <span>
              <b className="block text-[11px]">
                Opening Hours
              </b>

              <small className="text-[9px] text-[#8a8379]">
                {site.hours}
              </small>
            </span>
          </div>

        </div>


        {/* =========================
            GOOGLE MAP
        ========================== */}
        <div className="paper min-h-[330px] overflow-hidden">

          <iframe
            title="Galaxy Mobiles location"
            src="https://share.google/ziXR7OfWsn2YlRZl7"
            className="h-full min-h-[330px] w-full border-0"
            loading="lazy"
          />

          <div className="p-3">

            {/* YOUR GOOGLE MAPS SHARE LINK */}
            <a
              href="https://share.google/ziXR7OfWsn2YlRZl7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#171717] px-4 py-2 text-[9px] font-bold text-white transition hover:bg-[#333]"
            >
              Get Directions →
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          STORE IMAGE
      ========================== */}
      <section className="container mt-10">

        <div className="relative h-[260px] overflow-hidden rounded-[14px]">

          <Image
            src={gallery[0].src}
            alt="Galaxy Mobiles store"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">

            <div className="serif text-3xl font-bold">
              Galaxy Mobiles
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WHATSAPP CTA
      ========================== */}
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


      {/* =========================
          BOTTOM CONTACT CTA
      ========================== */}
      <section className="container mb-10 mt-7">

        <div className="paper flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="text-[9px] font-bold tracking-[.18em] text-[#8a8379]">
              GALAXY MOBILES
            </div>

            <h2 className="serif mt-1 text-2xl font-bold">
              Need help choosing a mobile?
            </h2>

            <p className="mt-1 text-[10px] text-[#6d675f]">
              Contact us and our team will help you find the right
              device for your needs.
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
