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
  imageSide?: 'left' | 'right';
}

export function BlobPortrait({ member, imageSide = 'left' }: BlobPortraitProps) {
  const imageCol = (
    <div className="flex flex-col items-center gap-4 py-6 px-8">
      {/* relative wrapper required for Next.js fill */}
      <div className="blob-portrait relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover scale-110"
          sizes="352px"
        />
      </div>
      <div className="text-center">
        <h3 className={`${cooper.className} text-3xl text-black leading-tight`}>
          {member.name}
        </h3>
        <p className={`${cooper.className} text-lg text-[#8b3a52] mt-1`}>
          {member.role}
        </p>
      </div>
    </div>
  );

  const bioCol = (
    <div className="flex items-center px-8 py-6">
      <p className="text-lg text-black leading-relaxed">
        {member.bio}
      </p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
      {imageSide === 'left' ? (
        <>
          {imageCol}
          {bioCol}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{bioCol}</div>
          <div className="order-1 lg:order-2">{imageCol}</div>
        </>
      )}
    </div>
  );
}
