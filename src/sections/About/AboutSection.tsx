import SectionTitle from "@/Components/UI/SectionTitle";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen px-6 md:px-20 py-20 relative bg-cover bg-center bg-no-repeat"
        >
            <div className="relative flex justify-start mt-28 gap-8">

                <div className="absolute -top-29 -left-15 flex items-center space-x-6 z-20">
                    <img
                        src="/AboutAssets/logo-transparent.png"
                        alt="Logo"
                        className="w-45 h-48 md:w-50 md:h-50 rounded-full -mb-24"
                    />

                    <div className="absolute -top-0.5 left-53">
                        <h3 className="text-6xl md:text-6xl font-bold text-white drop-shadow-lg whitespace-nowrap">
                            ABOUT
                        </h3>
                        <p className="text-white text-l md:text-l drop-shadow-md mt-2 whitespace-nowrap">
                            PIKA-PIKA PRODUCTIONS
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 bg-[#f5f1e8]/90 p-12 rounded-2xl shadow-md text-gray-700 text-center flex flex-col items-center backdrop-blur-sm relative z-10">
                    <div className="w-full">
                        <SectionTitle title="OVERVIEW" />
                    </div>

                    <p className="text-lg md:text-xl mb-4">
                        A production team of 4th year José Rizal University
                        students under the course Bachelor of Science in
                        Entertainment Multimedia Computing Major in Digital
                        Animation Technology (BSEMC-DAT) batch A.Y 2025-2026
                    </p>

                    <p className="text-lg md:text-xl mb-10">
                        The team consists of Ruth,
                        Faith, Karl, Charles, Clarenz,
                        and Ray; young aspiring developers
                        prepared to share original stories
                        through art and animation.
                    </p>
                </div>

                <div className="w-full md:w-2/3 flex flex-col gap-6 relative">
                    <div className="grid grid-cols-1 grid-rows-2 gap-2">
                        <div className="grid grid-cols-3 grid-rows-1 gap-2">
                            <img src="/AboutAssets/1.png" alt="Image 1" className="w-full h-48 object-cover mt-4 " />
                            <img src="/AboutAssets/2.png" alt="Image 2" className="w-full h-48 object-cover mt-4" />
                            <img src="/AboutAssets/5.png" alt="Image 3" className="w-full h-48 object-cover mt-4" />
                        </div>
                        <div className="grid grid-cols-3 grid-rows-1 gap-2" style={{ marginTop: 40 }}>
                            <img src="/AboutAssets/3.png" alt="Image 4" className="w-full h-48 object-cover mt-4" />
                            <img src="/AboutAssets/4.png" alt="Image 5" className="w-full h-48 object-cover mt-4" />
                            <img src="/AboutAssets/6.png" alt="Image 6" className="w-full h-48 object-cover mt-4" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
