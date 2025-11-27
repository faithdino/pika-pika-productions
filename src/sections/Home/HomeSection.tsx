"use client";

import Image from "next/image";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[url('/images/orange-bg.png')] bg-cover bg-center"
        >
            {/* LOGO WITH WIGGLE ANIMATION */}
            <div className="mb-6">
                <Image
                    src="/AboutAssets/logo-transparent.png"
                    alt="Pika-Pika Logo"
                    width={160}
                    height={160}
                    className="rounded-full animate-wiggle"
                />
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-md">
                Pika-Pika Productions
            </h1>

            {/* TAGLINE */}
            <p className="text-lg md:text-xl max-w-xl mb-8 text-[#ffb347] drop-shadow">
                Where Every Frame is a Brushstroke of Story.
            </p>

            {/* BUTTON — SAME GRADIENT AS CONTACT */}
            <a
                href="#works"
                className="bg-gradient-to-b from-orange-400 to-orange-500 p-4 rounded-2xl shadow-md hover:opacity-90 transition transform hover:scale-105 hover:-translate-y-1 duration-300 text-white font-medium text-lg"
            >
                See Our Works
            </a>
        </section>
    );
}
