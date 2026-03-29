import localFont from "next/font/local";

const cooper = localFont({
    src: "../../app/fonts/cooper-black-cdnfonts/coopbl.ttf",
    display: "swap",
});

const sectors = [
    {
        name: "IT & Technology",
        desc: "Software engineering, data science, and infrastructure leadership roles.",
    },
    {
        name: "Finance & Banking",
        desc: "Connecting quantitative analysts, advisors, and executive finance talent.",
    },
    {
        name: "Marketing & Sales",
        desc: "Growth specialists, commercial leaders, and high-performing sales teams.",
    },
    {
        name: "Healthcare",
        desc: "Medical device sales, clinical recruitment, and healthcare leadership searches.",
    },
    {
        name: "Engineering",
        desc: "Civil, mechanical, and electrical engineering recruitment specialisms.",
    },
];

export default function CandidatesCarousel() {
    return (
        <section className="relative z-20 min-h-[60vh] bg-pink-300 py-24 flex flex-col items-center justify-center border-y-4 border-black shadow-[0_-8px_0_0_rgba(0,0,0,1)]">
            <div className="w-full">
                <h2 className={`text-center mb-16 px-8 text-black text-5xl ${cooper.className}`}>
                    What do we look for?
                </h2>

                <div className="relative block w-full group/ticker py-8 bg-white border-y-4 border-black">
                    <div className="flex w-max animate-ticker group-hover/ticker:[animation-play-state:paused] gap-8 px-4">
                        {[...sectors, ...sectors, ...sectors].map((sector, idx) => (
                            <div
                                key={idx}
                                className="relative group/card shrink-0 w-64 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#f3f3f3] cursor-help transition-transform hover:-translate-y-2"
                            >
                                <h3 className={`text-2xl text-center text-black ${cooper.className}`}>
                                    {sector.name}
                                </h3>

                                <div className="absolute left-1/2 -bottom-4 translate-y-full -translate-x-1/2 w-72 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 opacity-0 pointer-events-none group-hover/card:opacity-100 group-hover/card:pointer-events-auto transition-all duration-300 z-50">
                                    <p className="text-black font-medium text-center text-sm">
                                        {sector.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
