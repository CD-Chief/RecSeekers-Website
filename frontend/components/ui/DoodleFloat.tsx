"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

interface DoodleFloatProps {
	name: string;
	size?: number;
	className?: string;
	delay?: number;
	float?: boolean;
}

export function DoodleFloat({
	name,
	size = 48,
	className = "",
	delay = 0,
	float = true,
}: DoodleFloatProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, []);

	const style: CSSProperties = {
		animationDelay: `${delay * 0.3}s`,
	};

	const imageStyle: CSSProperties = {
		width: `${size}px`,
		height: "auto",
	};

	return (
		<div
			ref={ref}
			className={`z-80 opacity-0 translate-y-8 ${isVisible ? "animate-float-in" : ""} ${className} z-80`}
			style={style}
		>
			<div className={isVisible && float ? "animate-float float-random" : ""}>
				<Image
					src={`/floats/${name}.svg`}
					alt={`${name} doodle`}
					width={size}
					height={size}
					className="select-none pointer-events-none"
					style={imageStyle}
					draggable={false}
				/>
			</div>
		</div>
	);
}

export default DoodleFloat;
