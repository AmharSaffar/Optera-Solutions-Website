import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Optera Solutions" },
      { name: "description", content: "Web development, ERP & business systems, UI/UX design, AI solutions and digital marketing." },
      { property: "og:title", content: "Services — Optera Solutions" },
      { property: "og:description", content: "Five core services to design, build and grow your digital products." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-20">
        <SectionHeading eyebrow="Services" title="Everything you need to ship and scale" subtitle="Pick one discipline or combine them — we plug in where you need us." />
      </section>
      <div className="mx-auto max-w-7xl space-y-6 px-5 pb-8">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <section id={s.slug} className="scroll-mt-24 grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-12">
              <div>
                <span className="text-sm font-semibold text-muted-foreground">0{i + 1}</span>
                <div className="mt-4 inline-flex rounded-xl bg-accent p-3 text-accent-foreground">
                  <s.icon className="size-7" strokeWidth={1.5} />
                </div>
                <h2 className="mt-5 text-2xl font-bold md:text-3xl">{s.title}</h2>
                <p className="mt-1 font-medium text-primary">{s.tagline}</p>
                <p className="mt-4 text-muted-foreground">{s.description}</p>
              </div>
              <ul className="grid content-center gap-3 sm:grid-cols-2">
                {s.offerings.map((o) => (
                  <li key={o} className="flex items-center gap-3 rounded-xl border bg-background p-4 text-sm font-medium">
                    <Check className="size-4 shrink-0 text-primary" /> {o}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
      <CtaBanner />
    </>
  );
}
