import localFont from 'next/font/local';
import Image from 'next/image';

const cooper = localFont({
  src: '../../app/fonts/cooper-black-cdnfonts/coopbl.ttf',
  display: 'swap',
});

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface BlobPortraitProps {
  member: TeamMember;
  index?: number;
  imageSide?: 'left' | 'right';
}

export function BlobPortrait({ member, index = 0, imageSide = 'left' }: BlobPortraitProps) {
  const num = String(index + 1).padStart(2, '0');

  const imageCol = (
    <div className="relative flex flex-col items-center justify-center gap-6 py-12 px-8 bg-primary-dark min-h-[340px] h-full">
      {/* Large decorative number
      <span
        className={`${cooper.className} absolute top-4 left-6 text-7xl leading-none text-white/10 select-none`}
      >
        {num}
      </span> */}
      <div className="blob-portrait relative z-10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover scale-110"
          sizes="352px"
        />
      </div>
      {/* Name + role badge */}
      <div className="z-10 text-center">
        <h3 className={`${cooper.className} text-3xl text-white leading-tight`}>
          {member.name}
        </h3>
        <span
          className={`${cooper.className} inline-block mt-2 px-4 py-1 bg-[#da8da0] border-2 border-white text-black text-sm`}
        >
          {member.role}
        </span>
      </div>
    </div>
  );

  const bioCol = (
    <div className="flex flex-col justify-center gap-4 bg-white px-10 py-12 h-full">
      {/* Decorative quote mark */}
      <span className={`${cooper.className} text-7xl leading-none text-[#da8da0] select-none -mb-4`}>&ldquo;</span>
      <p className="text-lg text-black leading-relaxed">
        {member.bio}
      </p>
      {/* Bottom accent */}
      <div className="mt-4 w-16 h-1.5 bg-[#da8da0]" />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0 items-stretch h-full">
      {imageSide === 'left' ? (
        <>
          {imageCol}
          {bioCol}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1 lg:col-span-1">{bioCol}</div>
          <div className="order-1 lg:order-2 lg:col-span-1">{imageCol}</div>
        </>
      )}
    </div>
  );
}
