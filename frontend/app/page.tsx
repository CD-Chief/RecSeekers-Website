import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";
import { HeroSection } from "@/components/Hero/HeroSection";
import localFont from 'next/font/local';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const placeHolderProfile = '/profile.png';

const cooper = localFont({
  src: './fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
})

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
      {/* --- HERO SECTION (two-stage scroll-hijacked hero) --- */}
      <div className="snap-start min-h-screen">
        <HeroSection />
      </div>

      {/* --- FEATURES SECTION: higher z-index, scrolls up and covers hero --- */}
      <section className="snap-start relative z-20 min-h-screen bg-pink-300 py-24 px-8 flex flex-col items-center shadow-[0_-16px_40px_0_rgba(0,0,0,0.35)]">
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
      <section className="relative z-20 min-h-screen bg-pink-300 px-8 flex flex-col items-center snap-start">
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
      {/* --- Contact Section ---*/}
      <section className="relative z-20 min-h-screen bg-pink-300 py-24 px-8 flex flex-col items-center snap-start">
        <div className="max-w-6xl w-full">
          <h2 className={`text-5xl mb-16 text-black ${cooper.className}`}>
            Contact Us
          </h2>
        </div>
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start gap-16">  
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
              {/* Note: Update the src below to your actual image path */}
              <Image 
                src="/file.svg" 
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Text & Button */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className={`text-4xl md:text-5xl text-black mb-8 leading-tight ${cooper.className}`}>
              Bold strategies to unlock elite recruiter discovery for your growing business.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 text-black leading-relaxed font-medium">
              <p className="flex-1">
                We are advancing a pipeline of novel talent acquisition strategies by unraveling complex hiring needs. Built on pioneering recruitment science and powered by a world-class team of innovators.
              </p>
              <p className="flex-1">
                Today, our mission targets the best recruiters in the industry, while our ultimate ambition is far bolder: to fundamentally rewrite the standard of hiring.
              </p>
            </div>
            
            {/* Split Button Container */}
            <Link href="/contact">
              <Button variant="popout" size="xl" className={cooper.className}>
                Get In Touch!
              </Button>
            </Link>
          </div>          
        </div>
      </section>
      {/* --- Footer ---*/}
      <footer className="relative w-full z-20 bg-[#d940c0] py-20 px-8 border-t-2 border-black text-white snap-start">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
          {/* Logo Graphic & Motto */}
          <div className="flex flex-col items-start">
            {/* Mock Logo Box mimicking your wireframe */}
            <div className="w-20 h-12 border-4 border-white flex items-center justify-center relative mb-6">
              <div className="absolute w-[110%] h-1 bg-white rotate-[25deg]"></div>
              <div className="absolute w-[110%] h-1 bg-white -rotate-[25deg]"></div>
            </div>
            <p className={`text-xl leading-relaxed ${cooper.className} font-medium opacity-90 max-w-xs`}>
              "Recruiters for Recruiters"
            </p>
          </div>
          {/* Sitemap */}
          <div className="flex flex-col items-start md:items-center">
            <div className="flex flex-col gap-4">
              <Link href="/" className={`text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:translate-x-2 transition-all`}>
                Home
              </Link>
              <Link href="/about" className={`text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:translate-x-2 transition-all`}>
                About Us
              </Link>
              <Link href="/contact" className={`text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:translate-x-2 transition-all`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex flex-col gap-4">
              <a href="#" className={`flex items-center gap-4 text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:-translate-x-2 transition-all`}>
                Instagram
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className={`flex items-center gap-4 text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:-translate-x-2 transition-all`}>
                LinkedIn
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:hello@recseekers.com" className={`flex items-center gap-4 text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:-translate-x-2 transition-all`}>
                Email
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="tel:+1234567890" className={`flex items-center gap-4 text-lg ${cooper.className} font-medium opacity-90 hover:opacity-100 hover:-translate-x-2 transition-all`}>
                Phone
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </div>
          
        </div>
      </footer>
    </main>
  );
}