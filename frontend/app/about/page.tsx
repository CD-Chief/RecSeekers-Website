import localFont from 'next/font/local';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ValuesSection } from '@/components/About/ValuesSection';
import { TeamSection } from '@/components/About/TeamSection';

const cooper = localFont({
  src: '../fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
});

const statCards = [
  {
    title: "Recruitment Industry Experts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "15+ Years Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "High Energy Start-up",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="relative w-full">
      {/* --- Hero / Heading Section --- */}
      <section
        className="min-h-[75vh] flex flex-col items-center justify-center px-8 pt-24 pb-12"
        style={{ background: '#FFFFFF' }}
      >
        <div className="max-w-6xl w-full">
          <h1 className={`${cooper.className} text-7xl md:text-8xl text-black mb-12 leading-tight`}>
            Who are we?
          </h1>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-24 items-start">

            {/* Left: subtext (2/3) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <div className="relative pl-7">
                {/* Animated rounded accent bar */}
                <div
                  className="accent-bar absolute left-0 top-0 w-[7px] rounded-full bg-[#da8da0]"
                  style={{ height: 0 }}
                />
                <p className="text-xl md:text-2xl text-black leading-relaxed">
                  At RecSeekers, we specialise in connecting top-tier recruitment professionals
                  with the best opportunities in the industry. As a rec2rec agency, we pride
                  ourselves on understanding the unique needs of both candidates and clients,
                  ensuring the perfect match every time. Our expert team leverages deep industry
                  insights and a vast network to support the growth and success of recruitment
                  professionals across various sectors. Partner with RecSeekers and take the
                  next step in your recruitment career or find the ideal addition to your team.
                </p>
              </div>

              <Link href="/contact" className="group self-start">
                <Button className={`${cooper.className} px-10 py-4 bg-[#1e293b] text-white text-lg tracking-wider rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all`}>
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Right: stat cards (1/3) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {statCards.map((card, i) => (
                <div
                  key={card.title}
                  className="flex items-center gap-5 p-6 border-4 rounded-4xl bg-[#ffa4bb]"
                  style={{
                    animation: `slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl border-4 border-black bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black">
                    {card.icon}
                  </div>
                  <p className={`${cooper.className} text-lg leading-snug text-black`}>
                    {card.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <ValuesSection />
      <TeamSection />
    </main>
  );
}
