import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface WhoWeWorkWithCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  cooperClassName: string;
  illustrationSrc?: string;
  cardBgClassName?: string;
}

export function WhoWeWorkWithCard({
  title,
  description,
  ctaLabel,
  href,
  cooperClassName,
  illustrationSrc = "/file.svg",
  cardBgClassName = "bg-white",
}: WhoWeWorkWithCardProps) {
  return (
    <article className="relative h-full group">
      <div className="absolute inset-0 rounded-3xl border-4 border-primary-dark translate-x-3 translate-y-3 transition-transform duration-200 group-hover:translate-x-2 group-hover:translate-y-2" />

      <div className={`relative h-full border-4 border-primary-dark rounded-3xl p-8 md:p-10 flex flex-col ${cardBgClassName}`}>
        <div className="relative w-full aspect-video rounded-2xl border-2 border-primary-dark overflow-hidden bg-white mb-7">
          <Image
            src={illustrationSrc}
            alt="Audience illustration"
            fill
            className="object-cover"
          />
        </div>

        <h3 className={`text-3xl text-primary-dark mb-4 leading-tight ${cooperClassName}`}>
          {title}
        </h3>

        <p className="text-primary-dark/85 text-lg leading-relaxed mb-8">
          {description}
        </p>

        <Link href={href} className="mt-auto inline-block">
          <Button
            variant="secondary"
            size="lg"
            className={`${cooperClassName} bg-primary-dark! focus:ring-primary-dark!`}
          >
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </article>
  );
}
