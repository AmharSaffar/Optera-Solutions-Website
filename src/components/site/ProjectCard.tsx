import type { Project } from "@/lib/site-data";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg">
      <div className="aspect-[3/2] overflow-hidden bg-muted">
        <img src={p.image} alt={p.title} loading="lazy" width={1200} height={800} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">{p.category}</span>
        <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
      </div>
    </article>
  );
}
