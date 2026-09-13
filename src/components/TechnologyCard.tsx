import { Check, Star } from "lucide-react";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  selected: boolean;
  onAdd: (technology: Technology) => void;
}

export function TechnologyCard({
  technology,
  selected,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="soft-card flex min-h-[246px] flex-col p-[16px]">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-[24px] w-[24px] object-contain"
          loading="lazy"
        />
        {technology.badge && (
          <span className="rounded-full border border-[#dce7f7] bg-[#f4f8ff] px-[9px] py-[4px] text-[9px] font-medium text-[#3997d8]">
            {technology.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-[14px] font-bold text-[#172033]">
        {technology.name}
      </h3>
      <p className="mt-2 min-h-[49px] text-[10px] leading-[1.55] text-[#7b8799]">
        {technology.description}
      </p>

      <div className="mt-auto pt-3">
        <div className="flex items-center justify-between gap-2 border-t border-[#f1f3f6] pt-3">
          <span className="meta-pill">{technology.category}</span>
          <span className="text-[9px] text-[#7b8799]">
            {technology.difficulty}
          </span>
          <span className="flex items-center gap-1 text-[9px] font-medium text-[#667085]">
            <Star size={10} fill="#F6B91A" strokeWidth={0} />
            {technology.rating}
          </span>
        </div>
        <button
          onClick={() => onAdd(technology)}
          disabled={selected}
          className={`mt-3 flex h-[31px] w-full items-center justify-center rounded-[6px] text-[10px] font-medium transition ${selected ? "cursor-not-allowed bg-[#eef1f5] text-[#64748b]" : "bg-[#0d1320] text-white hover:bg-[#171f30]"}`}
        >
          {selected ? (
            <>
              <Check size={12} className="mr-1" />
              Added to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </article>
  );
}
