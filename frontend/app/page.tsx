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
    <main
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#da8da0' }}
    >
      <BlobField />
      <h1
       className={
        `relative z-10 
      
        text-7xl 
      
        font-bold
      
        italic
      
        text-pink-300
        
        [-webkit-text-stroke:3px_black]
        
        hover:[-webkit-text-stroke:3.5px_black]

        transition-all duration-300 ease-in-out
        
        cursor-default
        
        ${cooper.className}`}>
        {/* ^^ had to remove mix-blend-difference bc pink wasnt working */}
        
        Template Ready
      </h1>
    </main>
  );
}
