import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar"; // make sure this path matches your actual folder names

export const metadata: Metadata = {
    title: "Pika-Pika Productions",
    description: "Group portfolio website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    );
}
