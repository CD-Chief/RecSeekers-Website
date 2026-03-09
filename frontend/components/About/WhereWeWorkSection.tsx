import localFont from 'next/font/local';

const cooper = localFont({
  src: '../../app/fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
});

const countries = [
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Our home base — connecting the best recruitment talent across London, Manchester, and beyond.',
    viewBox: '0 0 120 180',
    path: 'M78 5 L90 12 L95 28 L97 42 L100 55 L104 70 L108 85 L112 98 L110 112 L115 125 L108 138 L95 148 L72 154 L62 148 L55 140 L48 132 L42 120 L48 105 L52 92 L55 82 L52 68 L50 55 L46 42 L45 30 L52 22 L58 15 L65 8 Z',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    description: 'Bridging the gap for recruitment professionals seeking opportunities across the Atlantic.',
    viewBox: '0 0 200 178',
    path: 'M8 22 L42 18 L88 15 L135 15 L172 18 L178 25 L192 30 L196 45 L190 58 L185 72 L183 88 L180 105 L177 120 L174 135 L172 145 L175 158 L170 168 L162 172 L148 168 L135 162 L118 165 L100 168 L82 168 L65 162 L48 158 L32 152 L18 138 L10 118 L10 102 L8 82 L6 58 L8 38 Z',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Supporting the thriving Australian recruitment market across Sydney, Melbourne and beyond.',
    viewBox: '0 0 205 178',
    path: 'M25 68 L48 50 L72 35 L92 22 L108 20 L112 22 L115 45 L122 52 L132 42 L140 28 L152 18 L165 15 L172 32 L178 55 L182 85 L185 118 L180 148 L172 162 L155 168 L135 165 L108 162 L82 158 L58 162 L38 155 L22 140 L18 118 L16 90 L18 72 Z',
  },
];

export function WhereWeWorkSection() {
  return (
    <section className="relative z-10 bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className={`${cooper.className} text-lg text-black/40 uppercase tracking-widest mb-2`}>
            Our reach
          </p>
          <h2 className={`${cooper.className} text-6xl md:text-7xl text-black`}>
            Where We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group flex flex-col items-center p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all duration-150 bg-white cursor-default"
            >
              {/* SVG country outline */}
              <div className="flex items-center justify-center w-full h-48 mb-6">
                <svg
                  viewBox={country.viewBox}
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d={country.path}
                    className="fill-primary"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Divider */}
              <div className="w-full border-t-4 border-black mb-6" />

              {/* Text */}
              <div className="text-center">
                <h3 className={`${cooper.className} text-2xl text-black mb-3`}>
                  {country.flag} {country.name}
                </h3>
                <p className="text-base text-black/70 leading-relaxed">
                  {country.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
