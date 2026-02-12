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
      
      {/* Container to stack the headings vertically */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        <h1
          className={`
            text-9xl 
            font-bold
            italic
            text-primary
            -tracking-[0.04em]
            [-webkit-text-stroke:8.56px_black]
            hover:[]
            transition-all duration-300 ease-in-out
            cursor-default
            ${cooper.className}
          `}
        >
          RecSeekers
        </h1>

        <h2
          className={`
            text-6xl 
            font-bold 
            text-black 
            -mt-3 
            ${cooper.className}
          `}
        >
          "Recruiters for Recruiters"
        </h2>
        
      </div>
    </main>
  );
}