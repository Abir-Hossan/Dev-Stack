import { X } from "lucide-react";
import type { Technology } from "../types/technology";

interface StackSidebarProps {
  selected: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export function StackSidebar({
  selected,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="soft-card h-fit p-[16px] xl:sticky xl:top-[92px]">
      <h2 className="text-[14px] font-bold text-[#172033]">Your Stack</h2>
      {selected.length === 0 ? (
        <>
          <p className="mt-1 text-[10px] text-[#98a2b3]">
            No technologies selected yet.
          </p>
          <div className="mt-[18px] grid h-[66px] place-items-center rounded-[10px] border border-dashed border-[#dbe2eb] text-[10px] text-[#98a2b3]">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-[10px] text-[#98a2b3]">
            {selected.length} Technologies Selected
          </p>
          <div className="mt-[14px] space-y-2">
            {selected.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-[8px] border border-[#e0e5ec] px-3 py-[8px]"
              >
                <img
                  src={technology.icon}
                  alt=""
                  className="h-[22px] w-[22px] object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-semibold text-[#172033]">
                    {technology.name}
                  </p>
                  <p className="text-[8px] text-[#7b8799]">
                    {technology.category}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  className="text-[#9aa6b6] hover:text-[#ef476f]"
                >
                  <X size={16} strokeWidth={1.7} />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={onRemoveAll}
            className="mt-8 h-[31px] w-full rounded-[7px] border border-[#ff9ca4] bg-white text-[10px] font-semibold text-[#f04444] hover:bg-[#fff6f6]"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
