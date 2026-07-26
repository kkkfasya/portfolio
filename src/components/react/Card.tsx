import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useCuelume } from "@/hooks/useCuelume";

const { play } = useCuelume();

interface AmericanPsychoCardProps {
	className?: string;
	name?: string;
	title?: string;
	company?: string;
	phone?: string;
	address?: string;
	fax?: string;
	telex?: string;
	role?: string;
	backContent?: React.ReactNode;
}

export function AmericanPsychoCard({
	name = "PATRICK BATEMAN",
	title = "Vice President",
	company = "Pierce & Pierce",
	phone = "212 555 6342",
	address = "358 Exchange Place New York, N.Y. 10099",
	fax = "fax 212 555 6390",
	telex = "telex 10 4534",
	role = "Mergers and Acquisitions",
	className,
	backContent,
}: AmericanPsychoCardProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div
			className={cn(
				"relative w-[clamp(340px,90vw,560px)] aspect-1.75/1 cursor-pointer",
				className,
			)}
			style={{ perspective: "1400px" }}
			onClick={() => {
				setIsFlipped((prev) => !prev);
				play("whisper");
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setIsFlipped((prev) => !prev);
				}
			}}
			role="button"
			tabIndex={0}
			aria-label={isFlipped ? "Show front of card" : "Show back of card"}
		>
			<motion.div
				className="relative h-full w-full transform-3d"
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{
					type: "spring",
					stiffness: 70,
					damping: 18,
					mass: 1,
				}}
			>
				{/* ================= FRONT ================= */}
				<div className="absolute inset-0 backface-hidden">
					<div className="flex h-full w-full flex-col justify-between border border-[#e8e0d4]/60 bg-[#F5F0E9] p-6 md:p-8 lg:p-10 font-serif text-[#1a1a1a] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)]">
						{/* Paper texture */}
						<div
							className="pointer-events-none absolute inset-0 opacity-[0.035]"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
							}}
						/>

						{/* Top row */}
						<div className="relative flex items-start justify-between text-[12px] md:text-[13px] lg:text-[15px] tracking-[0.12em]">
							<span className="font-medium">{phone}</span>
							<div className="text-right leading-tight">
								<div className="font-medium">{company}</div>
								<div className="mt-0.5 text-[11px] md:text-[12px] lg:text-[14px] font-semibold opacity-80">
									{role}
								</div>
							</div>
						</div>

						{/* Center */}
						<div className="relative -mt-2 flex flex-col items-center text-center">
							<h2 className="text-[22px] md:text-[26px] lg:text-[32px] font-medium leading-none tracking-[0.18em]">
								{name}
							</h2>
							<p className="mt-2 text-[13px] md:text-[14px] lg:text-[16px] font-semibold uppercase tracking-[0.22em] opacity-90">
								{title}
							</p>
						</div>

						{/* Bottom */}
						<div className="relative text-center text-[11px] md:text-[12px] lg:text-[14px] leading-relaxed tracking-[0.08em] opacity-85">
							<div>{address}</div>
							<div className="mt-0.5">
								{fax}&nbsp;&nbsp;{telex}
							</div>
						</div>
					</div>
				</div>

				{/* ================= BACK ================= */}
				<div className="absolute inset-0 backface-hidden" style={{ transform: "rotateY(180deg)" }}>
					<div className="flex h-full w-full items-center justify-center border border-[#e8e0d4]/60 bg-[#F5F0E9] p-8 md:p-10 lg:p-12 font-serif text-[#1a1a1a] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)]">
						<div
							className="pointer-events-none absolute inset-0 opacity-[0.035]"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
							}}
						/>

						{backContent ? (
							backContent
						) : (
							<div className="relative space-y-4 text-center">
								<div className="text-[14px] md:text-[15px] lg:text-[17px] font-semibold uppercase tracking-[0.25em] opacity-70">
									{company}
								</div>
								<div className="mx-auto h-px w-12 md:w-14 lg:w-16 bg-[#1a1a1a]/30" />
								<div className="text-[12px] md:text-[13px] lg:text-[15px] font-semibold leading-relaxed tracking-[0.15em] opacity-80">
									{role}
								</div>
								<div className="pt-4 text-[11px] md:text-[12px] lg:text-[14px] tracking-[0.12em] opacity-60">
									{address}
								</div>
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
