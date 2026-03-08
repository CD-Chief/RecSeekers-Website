'use client';

import { useState } from 'react';
import localFont from 'next/font/local';

const cooper = localFont({
  src: '../../app/fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
});

type Value = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

const values: Value[] = [
  {
    name: 'Reliability',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    description:
      'Always delivering our services on time and in a professional manner. We hold ourselves to the highest standards, ensuring every commitment we make is a commitment we keep — whether it\'s a candidate update, a client brief, or a promised callback. In an industry built on trust, our word is our bond.',
  },
  {
    name: 'Resourcefulness',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    description:
      'Our creative and ambitious team specialise in finding solutions to any problem. Where others see roadblocks, we see opportunities. We bring ingenuity and determination to every challenge — thinking outside conventional hiring frameworks to deliver results that other agencies simply can\'t.',
  },
  {
    name: 'Recognition',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    description:
      'Recognising the talent that our candidates possess to help them unlock their full career potential. We see beyond CVs and job titles — we see the person, their ambitions, and what they\'re truly capable of. Our job is to make sure the right people in the market know exactly how exceptional you are.',
  },
  {
    name: 'Rationale',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
    description:
      'Always offering our experienced judgement with well-balanced advice for both candidates and employers. Our decisions are grounded in deep industry knowledge and a genuine understanding of what makes both sides thrive. We don\'t just tell you what you want to hear — we tell you what you need to know.',
  },
  {
    name: 'Resilience',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    description:
      'Proven track record of overcoming challenges and thriving where others have struggled. The recruitment world moves fast and demands adaptability — qualities that are embedded in everything we do at RecSeekers. We push through adversity with energy and optimism, emerging stronger every time.',
  },
  {
    name: 'Rapport',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    description:
      'Long-term relationships are at the heart of what we do. Building trust and deep understanding over time means our candidates and clients return to us again and again — not because they have to, but because they want to. At RecSeekers, every interaction is the start of something lasting.',
  },
];

export function ValuesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 bg-primary-dark py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className={`${cooper.className} text-6xl md:text-7xl text-white mb-16`}>
          Our Core Values
        </h2>

        {/* Value tab buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          {values.map((value, i) => (
            <button
              key={value.name}
              onClick={() => setActive(i)}
              className={`
                flex items-center gap-3 px-6 py-4 border-4 text-lg
                transition-all duration-150 cursor-pointer
                ${active === i
                  ? 'bg-[#da8da0] border-[#da8da0] text-black translate-x-1 translate-y-1 shadow-none'
                  : 'bg-transparent border-white text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.6)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.6)]'
                }
              `}
            >
              <span className="shrink-0">{value.icon}</span>
              <span className={cooper.className}>{value.name}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          key={active}
          className="border-4 border-white/30 p-10 md:p-14 bg-white/5"
          style={{ animation: 'slideInRight 0.35s cubic-bezier(0.22, 1, 0.36, 1) both' }}
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="shrink-0 w-14 h-14 bg-[#da8da0] border-4 border-white flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
              {values[active].icon}
            </div>
            <h3 className={`${cooper.className} text-5xl md:text-6xl text-[#da8da0] leading-none`}>
              {values[active].name}
            </h3>
          </div>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
            {values[active].description}
          </p>
        </div>

      </div>
    </section>
  );
}
