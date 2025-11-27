import Image from "next/image";

export default function ContactSection() {
    const contacts = [
        {
            label: "Gmail",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=pika2prod@gmail.com"
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/share/1DFCaj91K6/"
        },
        {
            label: "Tiktok",
            href: "https://www.tiktok.com/@pikapika.prod?_r=1&_t=ZS-91jdiFCgn9F"
        }
    ];

    return (
        <section
            id="contact"
            className="min-h-screen px-6 md:px-20 py-20 flex items-center justify-center relative"
        >
            <div className="bg-[#FFE4C4] w-full max-w-xl rounded-[30px] shadow-lg p-10 relative">

                {/* Small image on top with wiggle animation */}
                <div className="flex justify-center">
                    <Image
                        src="/images/hd.png"
                        alt="Pika Icon"
                        width={120}
                        height={120}
                        className="opacity-90 animate-wiggle"
                    />
                </div>

                <h2 className="text-center text-orange-400 font-bold text-4xl mb-4 tracking-wide">
                    CONTACT
                </h2>

                <p className="text-center text-orange-600 text-sm mb-8">
                    We&apos;d love to hear from you. <br /> Visit our socials and get in touch with us!
                </p>

                <div className="flex flex-col gap-6">
                    {contacts.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-b from-orange-400 to-orange-500 p-4 rounded-2xl shadow-md
                                       hover:opacity-90 transition transform hover:scale-105 hover:-translate-y-1 duration-300 text-center"
                        >
                            <p className="text-white font-medium text-lg">
                                {item.label}
                            </p>
                        </a>
                    ))}
                </div>

                <p className="text-center text-orange-600 text-sm mt-12 mb-12">
                    Pika-Pika Productions
                </p>
            </div>
        </section>
    );
}
