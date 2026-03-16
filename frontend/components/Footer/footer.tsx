import { cooper } from '@/app/page';

import Link from 'next/link';

export default function Footer() {
    return (

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
                &quot;Recruiters for Recruiters&quot;
            </p>
            </div>

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
    );
}