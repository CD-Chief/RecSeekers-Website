import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";
import { HeroSection } from "@/components/Hero/HeroSection";
import localFont from 'next/font/local';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DoodleFloat } from "@/components/ui/DoodleFloat";
import { WhoWeWorkWithCard } from "@/components/Home/WhoWeWorkWithCard";

const placeHolderProfile = '/profile.png';

const cooper = localFont({
  src: './fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
})

export { cooper };

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
    <main className="relative w-full bg-white">
      {/* --- HERO SECTION (two-stage scroll-hijacked hero) --- */}
      <div className="min-h-screen">
        <HeroSection />
      </div>

      {/* --- Who We Work With --- */}
      <section className="relative z-20 bg-gray-100 pt-4 pb-10 lg:pt-6 lg:pb-14 px-6 md:px-10 flex flex-col items-center border-t-4 border-black overflow-hidden">
        {/* Soft background blob accents (matched to employers page language) */}
        <div className="absolute -bottom-20 right-0 w-120 h-120 rounded-full blur-2xl pointer-events-none" />
        <DoodleFloat
          name="paper-plane"
          size={140}
          delay={0.1}
          className="absolute -top-4 right-2 lg:top-2 lg:right-8 hidden md:block pointer-events-none"
        />
        <DoodleFloat
          name="pencil-1"
          size={150}
          delay={0.4}
          className="absolute bottom-10 left-2 lg:bottom-14 lg:left-8 hidden md:block pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl w-full">
          <div className="flex flex-col gap-4 mb-8 lg:mb-10">
            <h2 className={`text-5xl lg:text-6xl leading-tight text-primary-dark ${cooper.className}`}>
              Who We Work With
            </h2>
            <p className="text-base text-primary-dark/80 max-w-3xl leading-relaxed">
              Relationship-led, specialist support for both sides of the education recruitment market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8 lg:gap-10 justify-items-center">
            <WhoWeWorkWithCard
              title="Education recruitment agencies"
              description="We help agency leaders hire proven consultants and team builders who can scale high-performing desks, launch new offices, and accelerate revenue with less hiring risk."
              ctaLabel="Find Your Next Top Recruiter"
              href="/employers"
              cooperClassName={cooper.className}
              illustrationSrc="/Illustrations/office.svg"
              cardBgClassName="bg-tertiary"
            />

            <WhoWeWorkWithCard
              title="Education recruiters"
              description="We support top billers with confidential, strategic career moves across the UK and Australia, focused on stronger earnings, better progression, and the right cultural fit."
              ctaLabel="Elevate Your Career"
              href="/candidates"
              cooperClassName={cooper.className}
              illustrationSrc="/Illustrations/communicator2.svg"
              cardBgClassName="bg-tertiary"
            />
          </div>
        </div>
      </section>

      
      {/* --- Contact Section ---*/}
      <section className="relative z-20 min-h-screen bg-white py-24 md:py-28 px-6 md:px-10 flex flex-col items-center">
        <div className="max-w-7xl w-full">
          <h2 className={`text-5xl mb-16 text-black ${cooper.className}`}>
            Contact Us
          </h2>
        </div>
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start gap-16 lg:gap-20">  
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
              <Button variant="primary" size="xl" className={cooper.className}>
                Get In Touch!
              </Button>
            </Link>
          </div>          
        </div>
      </section>
      
    </main>
  );
}