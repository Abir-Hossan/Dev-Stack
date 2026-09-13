import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["Technologies", "#technologies"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#edf0f4] bg-white/95 backdrop-blur">
      <nav className="container-shell relative flex h-[72px] items-center justify-between">
        <button
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>

        <a
          href="#home"
          className="flex items-center gap-2 font-semibold text-[#111827] md:min-w-[180px] md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0"
        >
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[7px] gradient-bg text-[10px] font-bold text-white">
            DS
          </span>
          <span className="text-[16px]">
            Dev <span className="gradient-text">Stack</span>
          </span>
        </a>

        <div className="hidden items-center gap-[27px] md:flex">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`text-[12px] font-medium transition-colors hover:text-[#e62c84] ${index === 0 ? "text-[#e62c84]" : "text-[#536174]"}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex md:min-w-[180px] md:justify-end">
          <button className="text-[12px] font-medium text-[#536174] hover:text-[#111827]">
            Sign In
          </button>
          <button className="gradient-bg rounded-full px-[19px] py-[9px] text-[12px] font-semibold text-white shadow-sm">
            Sign Up
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button className="text-[11px] font-medium text-[#536174]">
            Sign In
          </button>
          <button className="gradient-bg rounded-full px-3 py-[7px] text-[10px] font-semibold text-white">
            Sign Up
          </button>
        </div>

        {open && (
          <div className="absolute left-0 right-0 top-[72px] border-b border-[#edf0f4] bg-white p-5 shadow-sm md:hidden">
            <div className="flex flex-col gap-4">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[#536174]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
