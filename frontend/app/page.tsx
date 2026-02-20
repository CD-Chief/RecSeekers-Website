import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";
import { BlobField } from "@/components/Blob/Blob";
import localFont from 'next/font/local';
import Image from "next/image";

const placeHolderProfile = '/profile.png';

const cooper = localFont({
  src: './fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
})

// Testimonials Component to reuse
// Testimonials Component to reuse
const TestimonialCard = ({ name, text, image }: { name: string, text: string, image: string }) => {
    
  // Logic to determine which source to use 
  const imageSrc = (image !== "no image" && image !==  "" && image !== " ") ? image : placeHolderProfile;

  return (
    <div className="relative flex flex-col items-center p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white w-full max-w-xs min-h-[450px]">
      
      {/* 1. Name of person (in Cooper Black) */}
      <h3 className={`${cooper.className} text-3xl text-black text-center mb-10`}>
        {name}
      </h3>

      {/* 2. Profile Image Circle */}
      <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden mb-10 bg-gray-100 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Image
          src={imageSrc} 
          alt={name} 
          width={256}
          height={256} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 3. Testimonial Text */}
      <p className="text-center text-black text-xl leading-relaxed italic">
        {text}
      </p>
    </div>
  );
};

export default async function HomePage() {

  // Add testimonial boxes here
  /* For having DEFAULT image:
     "no image",
      "",
      " "
  */
  const testimonials = [
    { 
      name: "Barack Obama",
      text: "\"Very good guy\"",
      image: "no image",
   
    },
    { 
      name: "Barack Obama",
      text: "\"Very good guy\"",
      image: " "
    },
    { 
      name: "Barack Obama",
      text: "\"Very good guy\"",
      image: ""
    }
  ]

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
      {/* --- Testimonials Section --- */}
      <section className="relative min-h-screen bg-pink-300 px-8 flex flex-col items-center snap-start">
        <div className="max-w-6xl w-full">
          <h2 className={`text-5xl mb-16 text-black ${cooper.className}`}>
            Our Clients
          </h2>
          
          <div className="flex flex-wrap justify-center gap-16">
            {testimonials.map((t, i) => (
              <TestimonialCard 
                key={i} 
                name={t.name} 
                text={t.text} 
                image={t.image} 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}