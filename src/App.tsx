import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import technologiesData from "./data/technologies.json";
import type { Technology } from "./types/technology";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechnologyGrid } from "./components/TechnologyGrid";
import { StackSidebar } from "./components/StackSidebar";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selected, setSelected] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTechnologies(technologiesData as Technology[]);
      setLoading(false);
    }, 650);
    return () => window.clearTimeout(timer);
  }, []);

  const selectedIds = useMemo(() => selected.map(({ id }) => id), [selected]);

  const addTechnology = (technology: Technology) => {
    if (selectedIds.includes(technology.id)) {
      toast.warning("Technology already exists");
      return;
    }
    setSelected((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const removeTechnology = (id: string) => {
    setSelected((current) =>
      current.filter((technology) => technology.id !== id),
    );
    toast.info("Technology removed");
  };

  const removeAllTechnology = () => {
    if (!selected.length) return;
    setSelected([]);
    toast.info("Stack cleared");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="container-shell pb-2 pt-5">
          <div className="mb-7">
            <h2 className="text-[26px] font-extrabold tracking-[-.8px] text-[#172033] md:text-[30px]">
              Explore the <span className="gradient-text">Technologies</span>
            </h2>
            <p className="mt-1 text-[11px] text-[#8490a2]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="grid items-start gap-[16px] xl:grid-cols-[1fr_240px]">
              <TechnologyGrid
                technologies={technologies}
                selectedIds={selectedIds}
                onAdd={addTechnology}
              />
              <StackSidebar
                selected={selected}
                onRemove={removeTechnology}
                onRemoveAll={removeAllTechnology}
              />
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        hideProgressBar
        theme="light"
        toastStyle={{ fontSize: 12, borderRadius: 8 }}
      />
    </div>
  );
}

export default App;
