import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projectCategories, projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Optera Solutions" },
      { name: "description", content: "Browse web apps, AI solutions and e-commerce builds delivered by Optera Solutions." },
      { property: "og:title", content: "Projects — Optera Solutions" },
      { property: "og:description", content: "A filterable portfolio of software we've engineered." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="Portfolio" title="Software we've shipped" />
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist">
        {projectCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${filter === c ? "border-primary bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div key={p.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
