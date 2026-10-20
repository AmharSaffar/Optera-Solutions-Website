import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Gauge, Handshake, ShieldCheck, Users } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Optera Solutions" },
      { name: "description", content: "Our mission, vision, engineering culture and values at Optera Solutions." },
      { property: "og:title", content: "About — Optera Solutions" },
      { property: "og:description", content: "Why Optera Solutions stands out in software development." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Gauge, title: "Performance by default", text: "Every build is measured — load time, accessibility and uptime are part of done." },
  { icon: ShieldCheck, title: "Built to last", text: "Typed code, automated tests and clean architecture your team can own." },
  { icon: Handshake, title: "Radical transparency", text: "Weekly demos, shared boards and honest estimates. No black boxes." },
  { icon: Users, title: "Small senior teams", text: "Engineers who talk to clients directly and own outcomes, not tickets." },
];

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About us</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">A studio of engineers who care about outcomes</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Optera Solutions is a young software company helping startups and enterprises turn ideas into reliable, revenue-driving products.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <img src={team} alt="The Optera Solutions team collaborating" width={1200} height={800} className="rounded-3xl border object-cover" />
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2">
        {[
          { icon: Compass, title: "Our mission", text: "To give every ambitious business access to world-class engineering — fast, transparent and accountable." },
          { icon: Eye, title: "Our vision", text: "A future where software is a company's sharpest advantage, not its biggest bottleneck." },
        ].map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border bg-card p-8">
              <b.icon className="size-8 text-primary" strokeWidth={1.5} />
              <h2 className="mt-4 text-2xl font-bold">{b.title}</h2>
              <p className="mt-3 text-muted-foreground">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading eyebrow="Culture & values" title="How we engineer" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border bg-card p-6">
                <v.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
