import localFont from 'next/font/local';

const cooper = localFont({
  src: '../fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
});

export default function AboutPage() {
  return (
    <main className="relative w-full">
      {/* --- Hero / Heading Section --- */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-8 py-24"
        style={{ background: '#FFFFFF' }}
      >
        <div className="max-w-4xl w-full">
          <h1 className={`${cooper.className} text-7xl md:text-8xl text-black mb-12 leading-tight`}>
            Who are we?
          </h1>

          <div className="p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
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
        </div>
      </section>
    </main>
  );
}
