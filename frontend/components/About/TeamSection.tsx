import localFont from 'next/font/local';
import { BlobPortrait } from './BlobPortrait';
import type { TeamMember } from './BlobPortrait';

const cooper = localFont({
  src: '../../app/fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
});

const teamMembers: TeamMember[] = [
  {
    name: 'Sam Lawless',
    role: 'Founder',
    image: '/profile.png',
    bio: "From a young age, my love for sales was clear, starting with selling sweets in school and later managing an online clothing business. After spending 2.5 years traveling across Australia it feels as though all roads were leading me to recruitment. Over the past two years, recruitment has become my primary focus and my greatest success. I am extremely passionate about recruitment and building relationships. Starting RecSeekers was a no brainer for me, there's a huge gap in the market for outright quality Rec2Rec's and we're here to make a statement.",
  },
  {
    name: 'Jed Corner',
    role: 'Co-Founder',
    image: '/profile.png',
    bio: "Having 10+ years experience in the customer facing industry, I've always had an idea of building a successful, ethical business from scratch. RecSeekers was born through my own personal experience of seeing the recruiter to client relationship neglected due to the corporate nature of agencies. Building and maintaining this relationship is at the forefront of what RecSeekers do, allowing us to provide a personalised service to every client.",
  },
  {
    name: 'Ciaran Turton',
    role: 'Co-Founder',
    image: '/profile.png',
    bio: "Following university, I took up a recruitment role as a short term fix. However, five years later, it has developed into a passion and a successful career. Having recently left a senior management role at a corporate agency, I am excited to use my skills to make RecSeekers a company that both our clients and candidates are proud to be a part of. I believe that the synergy of our core values blended with our competitive nature and our know-how will help us build something special.",
  },
];

export function TeamSection() {
  return (
    <section className="relative z-10 bg-[#da8da0] pt-12 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className={`${cooper.className} text-6xl md:text-7xl text-black`}>
            Meet the Team
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="rounded-3xl border border-gray-200 bg-white overflow-hidden"
              style={{
                opacity: 0,
                animation: 'slideInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <BlobPortrait
                member={member}
                imageSide={i % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
