import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Navigation,
} from "lucide-react";

import Image from "next/image";
import { gallery, site, wa } from "@/data/site";

const googleMapsUrl =
  "https://maps.app.goo.gl/UALx2iCNg5DJjktQ7?g_st=ac";

const exactLocationUrl =
  "https://www.google.com/maps/search/?api=1&query=Galaxy+Mobiles,+Thodupuzha,+Idukki,+Kerala";

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
              Visit Galaxy Mobiles, Thodupuzha and explore our latest
              mobiles, accessories, services, exchange offers and more.
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
              Based on 200+ reviews
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="container mt-7 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        {/* LEFT */}
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

              <small className="text-[9px] leading-4 text-[#8a8379]">
                Galaxy Mobiles
                <br />
                Thodupuzha, Idukki, Kerala
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
                {site.hours}
              </small>
            </span>
          </div>
        </div>

        {/* MAP */}
        <div className="paper overflow-hidden">
          <div className="relative min-h-[330px] w-full bg-[#f2efe9]">
            <iframe
              title="Galaxy Mobiles Thodupuzha Location"
              src={exactLocationUrl}
              className="h-[330px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* MAP OVERLAY */}
            <div className="pointer-events-none absolute left-4 top-4">
              <div className="rounded-xl bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-[#e4b600]"
                  />

                  <div>
                    <div className="text-[10px] font-bold">
                      Galaxy Mobiles
                    </div>

                    <div className="text-[8px] text-[#8a8379]">
                      Thodupuzha, Idukki
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIRECTIONS BUTTON */}
          <div className="flex flex-wrap gap-2 p-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-4 py-3 text-[9px] font-bold text-white transition hover:bg-[#333]"
            >
              <Navigation size={13} />
              Get Exact Directions
            </a>

            <a
              href={exactLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#ded9d0] bg-white px-4 py-3 text-[9px] font-bold text-[#171717] transition hover:bg-[#f7f5f1]"
            >
              <MapPin size={13} />
              View on Google Maps
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

      {/* FINAL CONTACT CTA */}
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
              Contact us and our team will help you find the
              right device for your needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* CALL */}
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-[10px] font-bold text-white transition hover:bg-[#333]"
            >
              <Phone size={14} />
              Call Now
            </a>

            {/* WHATSAPP */}
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
