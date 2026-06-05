export default function IafeLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "lg" ? 48 : size === "sm" ? 28 : 36;
  const textSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";
  const subSize = size === "lg" ? "text-xs" : "text-[9px]";

  return (
    <div className="flex items-center gap-2" data-testid="logo">
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none">
        <line x1="24" y1="4" x2="24" y2="44" stroke="#7B2FBE" strokeWidth="4" strokeLinecap="round" />
        <line x1="5.8" y1="14" x2="42.2" y2="34" stroke="#7B2FBE" strokeWidth="4" strokeLinecap="round" />
        <line x1="5.8" y1="34" x2="42.2" y2="14" stroke="#7B2FBE" strokeWidth="4" strokeLinecap="round" />
        <circle cx="24" cy="4" r="3.5" fill="#7B2FBE" />
        <circle cx="24" cy="44" r="3.5" fill="#7B2FBE" />
        <circle cx="5.8" cy="14" r="3.5" fill="#7B2FBE" />
        <circle cx="42.2" cy="34" r="3.5" fill="#7B2FBE" />
        <circle cx="5.8" cy="34" r="3.5" fill="#7B2FBE" />
        <circle cx="42.2" cy="14" r="3.5" fill="#7B2FBE" />
        <circle cx="24" cy="24" r="5" fill="#7B2FBE" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-black text-gray-900 tracking-tight ${textSize}`}>IAFÉ</span>
        <span className={`text-purple-700 font-semibold tracking-widest ${subSize}`}>FINANCE</span>
      </div>
    </div>
  );
}
