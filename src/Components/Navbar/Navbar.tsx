"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 border-b">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

                {/* LOGO */}
                <a href="#home" className="flex items-center">
                    <Image
                        src="/Images/group.png"
                        alt="Navbar Logo"
                        width={85}
                        height={85}
                        className="rounded-full"
                    />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-16 font-medium">
                    <li><a href="#home" className="text-orange-500 hover:text-gray-700">Home</a></li>
                    <li><a href="#about" className="text-orange-500 hover:text-gray-700">About</a></li>
                    <li><a href="#works" className="text-orange-500 hover:text-gray-700">Works</a></li>
                    <li><a href="#contact" className="text-orange-500 hover:text-gray-700">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    <span className="text-2xl text-orange-500">☰</span>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-orange-500 p-4 border-t">
                    <ul className="flex flex-col gap-4">
                        <li><a href="#home" className="text-orange-500 hover:text-gray-700">Home</a></li>
                        <li><a href="#about" className="text-orange-500 hover:text-gray-700">About</a></li>
                        <li><a href="#works" className="text-orange-500 hover:text-gray-700">Works</a></li>
                        <li><a href="#contact" className="text-orange-500 hover:text-gray-700">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
