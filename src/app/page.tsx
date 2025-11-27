import HomeSection from "@/sections/Home/HomeSection";
import AboutSection from "@/sections/About/AboutSection";
import WorksSection from "@/sections/Works/WorksSection";
import ContactSection from "@/sections/Contact/ContactSection";

export default function Home() {
    return (
        <main
            className="bg-[url('/AboutAssets/BG.png')] bg-cover bg-center bg-fixed"
        >
            <HomeSection />
            <AboutSection />
            <WorksSection />
            <ContactSection />
        </main>
    );
}
