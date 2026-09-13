const footerGroups = [
  { title: "PRODUCT", links: ["Home", "Technologies", "Projects"] },
  { title: "COMPANY", links: ["About", "Contact", "Careers"] },
  { title: "LEGAL", links: ["Privacy Policy", "Terms of Service"] },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#edf0f4]">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-semibold text-[#111827]">
            <span className="grid h-[25px] w-[25px] place-items-center rounded-[6px] gradient-bg text-[8px] font-bold text-white">
              DS
            </span>
            <span className="text-[14px]">
              Dev <span className="gradient-text">Stack</span>
            </span>
          </div>
          <p className="mt-4 max-w-[330px] text-[10px] leading-[1.7] text-[#7b8799]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex gap-4 text-[9px] font-medium text-[#536174]">
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[9px] font-bold tracking-wide text-[#273247]">
              {group.title}
            </h3>
            <div className="mt-4 space-y-3">
              {group.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-[9px] text-[#7b8799] hover:text-[#e52c84]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container-shell flex flex-col gap-3 border-t border-[#edf0f4] py-5 text-[9px] text-[#a1adbd] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
