import { HeroSection } from "@/components/Hero/HeroSection";
import localFont from 'next/font/local';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// Assuming you have the same profile placeholder and font setup
const placeHolderProfile = '/profile.png';

const cooper = localFont({
  src: '../fonts/cooper-black-cdnfonts/coopbl.ttf', // Adjust path if necessary
  display: 'swap',
});

// --- Mock Data ---
const sectors = [
  { name: "IT & Technology", desc: "Software engineering, data science, and infrastructure leadership roles." },
  { name: "Finance & Banking", desc: "Connecting quantitative analysts, advisors, and executive finance talent." },
  { name: "Marketing & Sales", desc: "Growth hackers, CMOs, and top-tier sales directors." },
  { name: "Healthcare", desc: "Specialized medical device sales, clinical researchers, and leadership." },
  { name: "Engineering", desc: "Civil, mechanical, and electrical engineering professionals." },
];

const candidates = [
  { name: "Sarah Jenkins", role: "Senior Tech Recruiter", text: "\"RecSeekers found me a role that perfectly aligned with my ambition. The process was seamless and incredibly supportive.\"" },
  { name: "David Chen", role: "Finance Headhunter", text: "\"I was looking for a step up in the banking sector. Their team understood exactly what I needed and delivered fast.\"" },
  { name: "Emily Rogers", role: "Marketing Talent Lead", text: "\"15 years of experience really shows. They placed me at an agency where my skills are truly valued and utilized.\"" },
  { name: "Marcus Johnson", role: "Executive Search", text: "\"A game-changer for my career. The vetted agencies they work with are top-notch.\"" },
];

export default function Candidates() {

  // Reusable style for the Figma headers (Pink fill, black stroke, drop shadow)
  const headingStyle = `text-5xl mb-16 text-black ${cooper.className}`;

  const headingStyle3D = `text-6xl mb:text-6xl text-[var(--primary-logo)] [-webkit-text-stroke:3.5px_black] drop-shadow-[3px_4px_0_rgba(0,0,0,1)]  ${cooper.className}`;

  return (
    <main className="relative w-full bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="snap-start relative z-20 min-h-[80vh] bg-white py-24 px-8 flex flex-col justify-center items-center shadow-[0_16px_40px_0_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
            <h1 className={headingStyle3D}>
              Find the perfect role with us 
            </h1>
            <p className="text-lg text-black font-medium leading-relaxed">
              On the hunt for the perfect agency recruitment job? <br/><br/>
              We believe in helping talented recruiters fulfill their potential by getting them into the right industry, company, and role for them.
            </p>
            <p className="text-lg text-black font-medium leading-relaxed">
              RecSeekers specializes in Rec2Rec, connecting exceptional recruiters with top-tier agencies. Let us help you find a role that aligns with your ambitions and expertise.
            </p>
          </div>
          {/* Right Image (Man on ladder) */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Replace /ladder-guy.svg with your actual asset */}
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image 
                src="/ladder-guy.svg" 
                alt="Find the perfect role"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT SETS US APART SECTION --- */}
      <section className="snap-start relative z-20 min-h-screen bg-white py-24 px-8 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h2 className={`${headingStyle} mb-16 text-center`}>
            What sets us apart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-[#c28f9c] p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {/* Box 1 */}
            <div className="flex flex-col items-center text-center text-white gap-4">
              <div className="w-20 h-20 mb-2">
                 <Image src="/icon-stairs.svg" alt="Market Leading" width={80} height={80} className="object-contain filter invert"/>
              </div>
              <h3 className={`text-2xl ${cooper.className}`}>Market Leading<br/>Candidates</h3>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center text-center text-white gap-4">
              <div className="w-20 h-20 mb-2">
                 <Image src="/icon-selection.svg" alt="Wide Selection" width={80} height={80} className="object-contain filter invert"/>
              </div>
              <h3 className={`text-2xl ${cooper.className}`}>Wide Selection of<br/>Industries</h3>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center text-center text-white gap-4">
              <div className="w-20 h-20 mb-2">
                 <Image src="/icon-clock.svg" alt="15 Years Experience" width={80} height={80} className="object-contain filter invert"/>
              </div>
              <h3 className={`text-2xl ${cooper.className}`}>15 years of Recruitment<br/>Experience</h3>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREVIOUS CANDIDATES SECTION --- */}
      <section className="snap-start relative z-20 min-h-[80vh] bg-pink-300 py-24 px-8 flex flex-col items-center border-t-4 border-black">
        <div className="max-w-6xl w-full">
          <div className="flex justify-between items-end mb-16">
            <h2 className={headingStyle}>
              Our previous candidates
            </h2>
            <span className="hidden md:block text-black font-bold text-lg italic [-webkit-text-stroke:0.5px_black]">
              LinkedIn recommendations &rarr;
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {candidates.map((cand, i) => (
              <div key={i} className="relative group/cand w-72 h-40 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-6 flex flex-col justify-center items-center cursor-pointer transition-all">
                
                {/* Default State (Collapsed) */}
                <div className="flex items-center gap-4 w-full group-hover/cand:opacity-0 transition-opacity duration-200">
                  <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image src={placeHolderProfile} alt={cand.name} width={64} height={64} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className={`text-xl text-black ${cooper.className}`}>{cand.name}</h3>
                    <div className="w-full h-2 bg-gray-300 mt-2 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-gray-300 mt-1 rounded-full"></div>
                  </div>
                </div>

                {/* Hover Pop-out State (Full text + Title) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 opacity-0 pointer-events-none group-hover/cand:opacity-100 group-hover/cand:pointer-events-auto transition-all duration-300 z-30 flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-gray-100">
                    <Image src={placeHolderProfile} alt={cand.name} width={64} height={64} />
                  </div>
                  <h3 className={`text-xl text-black ${cooper.className}`}>{cand.name}</h3>
                  <span className="bg-[var(--primary-logo)] text-black px-3 py-1 text-sm font-bold border-2 border-black -mt-2">
                    {cand.role}
                  </span>
                  <p className="text-sm font-medium italic mt-2 text-black leading-relaxed">
                    {cand.text}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT US SECTION --- */}
      <section className="relative z-20 min-h-[60vh] bg-white py-24 px-8 flex flex-col items-center snap-start border-t-4 border-black shadow-[0_-16px_40px_0_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          <h2 className={`${headingStyle} mb-8`}>
            Ready to find your perfect role?
          </h2>
          <p className="text-xl text-black font-medium mb-12 max-w-2xl leading-relaxed">
            Reach out to our team today. We'll confidentially discuss your experience, your ambitions, and match you with agencies that value your expertise.
          </p>
          {/* Split Button Container */}
            <Link href="/contact">
              <Button variant="primary" size="xl" className={cooper.className}>
                Get In Touch!
              </Button>
            </Link>
        </div>
      </section>
      
    </main>
  );
}