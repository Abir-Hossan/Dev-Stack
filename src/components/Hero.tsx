const illustration = new URL(
  "../assets/stack-illustration.png",
  import.meta.url,
).href;

export function Hero() {
  return (
    <section
      id="home"
      className="container-shell grid min-h-[485px] items-center gap-10 pb-8 pt-16 md:grid-cols-[1.15fr_.85fr] md:pt-12"
    >
      <div className="max-w-[640px]">
        <h1 className="text-[40px] font-extrabold leading-[1.04] tracking-[-1.8px] text-[#111827] md:text-[52px]">
          Build Your Ideal
          <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="mt-5 max-w-[620px] text-[14px] leading-[1.65] text-[#667085] md:text-[15px]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="gradient-bg rounded-[7px] px-[17px] py-[10px] text-[12px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-[1px]"
          >
            Explore Technologies
          </a>
          <a
            href="#technologies"
            className="rounded-[7px] border border-[#e1e5eb] bg-white px-[28px] py-[10px] text-[12px] font-medium text-[#536174] hover:border-[#cbd2dc]"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={illustration}
          alt="Layered development stack illustration"
          className="w-[300px] max-w-full md:w-[365px]"
        />
      </div>
    </section>
  );
}
