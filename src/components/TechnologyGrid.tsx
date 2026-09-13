import type { Technology } from "../types/technology";
import { TechnologyCard } from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  selectedIds: string[];
  onAdd: (technology: Technology) => void;
}

export function TechnologyGrid({
  technologies,
  selectedIds,
  onAdd,
}: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          selected={selectedIds.includes(technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
