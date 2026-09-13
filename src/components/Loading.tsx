import { LoaderCircle } from "lucide-react";

export function Loading() {
  return (
    <div className="flex min-h-[360px] items-center justify-center rounded-[12px] border border-[#e7eaf0] bg-white">
      <div className="flex flex-col items-center gap-3 text-[#667085]">
        <LoaderCircle className="animate-spin" size={24} />
        <span className="text-sm">Loading technologies...</span>
      </div>
    </div>
  );
}
