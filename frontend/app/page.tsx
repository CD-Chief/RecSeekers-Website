import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";
import { BlobField } from "@/components/Blob/Blob";
import localFont from 'next/font/local';

const cooper = localFont({
  src: './fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
})

export default async function HomePage() {
  return (
    <main className="relative w-full">
      {/* --- HERO SECTION: sticky, lower z-index so content scrolls over it --- */}
      <section 
        className="sticky top-0 z-10 isolate min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: '#da8da0' }}
      >
        <BlobField />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src="/RecLogo.svg"
            alt="RecSeekers"
            className="w-auto max-w-2xl my-3.5"
          />

          <h2
            className={`
              text-6xl font-bold text-black -mt-4 
              ${cooper.className}
            `}
          >
            "Recruiters for Recruiters"
          </h2>
        </div>
      </section>

      {/* --- FEATURES SECTION: higher z-index, scrolls up and covers hero --- */}
      <section className="relative z-20 min-h-screen rounded-t-4xl bg-pink-300 py-24 px-8 flex flex-col items-center shadow-[0_-16px_40px_0_rgba(0,0,0,0.35)]">
        <div className="max-w-6xl w-full">
          <h2 className={`text-5xl mb-16 text-black ${cooper.className}`}>
            Why RecSeekers?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#f3f3f3]">
              <h3 className={`text-2xl text-black mb-4 ${cooper.className}`}>Expert Sourcing</h3>
              <p className="text-lg text-black leading-relaxed">
                We don't just find candidates; we find the people who find the people.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#f3f3f3]">
              <h3 className={`text-2xl text-black mb-4 ${cooper.className}`}>Vetted Talent</h3>
              <p className="text-lg  text-black leading-relaxed">
                Every recruiter in our network is hand-picked for their niche expertise.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#f3f3f3]">
              <h3 className={`text-2xl text-black mb-4 ${cooper.className}`}>Global Reach</h3>
              <p className="text-lg  text-black leading-relaxed">
                Connecting top-tier talent across borders with local precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}