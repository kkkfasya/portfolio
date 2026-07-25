import { cn } from "@/lib/utils";

interface AmericanPsychoCardProps {
  name?: string;
  title?: string;
  company?: string;
  phone?: string;
  address?: string;
  fax?: string;
  telex?: string;
  className?: string;
}

export function AmericanPsychoCard({
  name = "PATRICK BATEMAN",
  title = "Vice President",
  company = "Pierce & Pierce",
  phone = "212 555 6342",
  address = "358 Exchange Place New York, N.Y. 10099",
  fax = "fax 212 555 6390",
  telex = "telex 10 4534",
  className,
}: AmericanPsychoCardProps) {
  return (
    <div
      className={cn(
        "group relative w-85 aspect-1.75/1 select-none",
        "bg-[#F5F0E9] text-[#1a1a1a]",
        "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_16px_48px_rgba(0,0,0,0.06)]",
        "border border-[#e8e0d4]/60",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_32px_rgba(0,0,0,0.1),0_24px_64px_rgba(0,0,0,0.08)]",
        "font-serif",
        className
      )}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Inner content */}
      <div className="relative h-full flex flex-col justify-between p-6 tracking-wide">
        {/* Top row */}
        <div className="flex justify-between items-start text-[11px] tracking-[0.12em]">
          <span className="font-medium">{phone}</span>
          <div className="text-right leading-tight">
            <div className="font-medium">{company}</div>
            <div className="text-[10px] opacity-80 mt-0.5">Mergers and Acquisitions</div>
          </div>
        </div>

        {/* Center - Name & Title */}
        <div className="flex flex-col items-center text-center -mt-2">
          <h2 className="text-[22px] font-medium tracking-[0.18em] leading-none">
            {name}
          </h2>
          <p className="mt-2 text-[12px] tracking-[0.22em] uppercase opacity-90">
            {title}
          </p>
        </div>

        {/* Bottom */}
        <div className="text-[10px] tracking-[0.08em] text-center leading-relaxed opacity-85">
          <div>{address}</div>
          <div className="mt-0.5">
            {fax} &nbsp;&nbsp; {telex}
          </div>
        </div>
      </div>

      {/* Very subtle edge highlight for "thickness" */}
      <div className="absolute inset-0 pointer-events-none rounded-[1px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]" />
    </div>
  );
}
