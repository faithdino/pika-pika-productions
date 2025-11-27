"use client";

import { useState } from "react";
import SectionTitle from "@/Components/UI/SectionTitle";

type Work = {
    id: number;
    title: string;
    short: string;
    hoverText: string;
    long: string;
    thumbnail?: string;
    extra1?: string;
    extra2?: string;
};

const works: Work[] = [
    {
        id: 1,
        title: "The Perfect Home",
        short: "The first 3D animated film",
        hoverText: "A film about perfectionism and it's effect on familial relationship.",
        long: "The first 3D animated film created by the team. The story follows a family of beavers who are in pursuit in finding the perfect home.",
        thumbnail: "/WorkAssets/PIKA PIKA POSTER.png",
        extra1: "/WorkAssets/CHARAC.png",
        extra2: "/WorkAssets/prop.png",
    },
    {
        id: 2,
        title: "Agiw",
        short: "The first 2D animated film",
        hoverText: "A film about the effects of chronically online or the obsessive use of the internet.",
        long: "The Story follows a young man who is chronically online in and his pet spider who gradually torments him, losing grasp on what is real or not.",
        thumbnail: "/WorkAssets/Agiw-Poster.png",
        extra1: "/WorkAssets/Martin.png",
        extra2: "/WorkAssets/bg-1-normal ver.png",
    },
    {
        id: 3,
        title: "Si Langgam at Si Tipaklong ",
        short: "Augmented reality children's book",
        hoverText: "About two insects with different moral codes and ways of doing things.",
        long: "A tale of a careless grasshopper who plays and a diligent ant who stores food for winter...",
        thumbnail: "/WorkAssets/AR_COVER.png",
        extra1: "/WorkAssets/page_2.png",
        extra2: "/WorkAssets/page_3.png",
    },
];

export default function WorksSection() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedWork = works.find((w) => w.id === selectedId) || null;

    const closeModal = () => setSelectedId(null);

    return (
        <section id="works" className="min-h-screen px-6 md:px-20 py-20">
            <SectionTitle title="Works" />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {works.map((work) => {
                    const isActive = activeId === work.id;

                    return (
                        <div
                            key={work.id}
                            className={`group relative flex flex-col items-center rounded-3xl bg-[#FFE4C4] shadow-lg transition-all duration-300 ease-out hover:shadow-2xl ${
                                isActive ? "md:scale-105 md:-translate-y-2" : ""
                            }`}
                            onMouseEnter={() => setActiveId(work.id)}
                            onMouseLeave={() => setActiveId(null)}
                        >
                            <div className="w-full aspect-[3/4] rounded-2xl bg-orange-100/70 flex items-center justify-center overflow-hidden">
                                {work.thumbnail ? (
                                    <img src={work.thumbnail} alt={work.title} className="h-full w-full object-cover" />
                                ) : (
                                    <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">Image Here</span>
                                )}
                            </div>

                            <div className="w-full px-5 py-4 text-left">
                                <h3 className="font-semibold text-lg text-[#ff7a00]">{work.title}</h3>
                                <p className="mt-1 text-sm text-gray-600">{work.short}</p>

                                {/* FIXED: NO NEWLINES in className */}
                                <div className="mt-3 max-h-0 opacity-0 overflow-hidden text-xs text-gray-500 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                                    <p>{work.hoverText}</p>

                                    {/* FIXED: NO NEWLINES in className */}
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex items-center rounded-full bg-[#ffb347] px-3 py-1 text-xs font-semibold text-white shadow-sm transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedId(work.id);
                                        }}
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedWork && (
                <div className="fixed inset-0 z-40 flex items-center justify-center px-4 md:px-8" onClick={closeModal}>
                    <div className="absolute inset-0 bg-black/40" />

                    <div
                        className="relative z-50 max-w-5xl w-full rounded-3xl bg-[#FFE4C4] p-6 md:p-8 shadow-2xl grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="absolute top-3 right-3 rounded-full bg-black/10 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-black/20"
                            onClick={closeModal}
                        >
                            ✕ Close
                        </button>

                        <div>
                            <h3 className="text-2xl font-semibold text-[#ff7a00]">{selectedWork.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-gray-700">{selectedWork.long}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="aspect-[4/3] rounded-2xl bg-orange-100/70 overflow-hidden">
                                {selectedWork.extra1 ? (
                                    <img src={selectedWork.extra1} alt={`${selectedWork.title} extra 1`} className="h-full w-full object-cover" />
                                ) : (
                                    <span className="flex h-full items-center justify-center text-[10px] tracking-[0.25em] text-gray-400 uppercase">Extra Image</span>
                                )}
                            </div>

                            <div className="aspect-[4/3] rounded-2xl bg-orange-100/70 overflow-hidden">
                                {selectedWork.extra2 ? (
                                    <img src={selectedWork.extra2} alt={`${selectedWork.title} extra 2`} className="h-full w-full object-cover" />
                                ) : (
                                    <span className="flex h-full items-center justify-center text-[10px] tracking-[0.25em] text-gray-400 uppercase">Extra Image</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
