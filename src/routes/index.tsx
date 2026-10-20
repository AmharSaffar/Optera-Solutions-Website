import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ProjectCard } from "@/components/site/ProjectCard";
import { clients, projects, services, testimonials } from "@/lib/site-data";
import store99Logo from "@/assets/99Stores.png";
import royalTreatsLogo from "@/assets/RoyalTreats.png";
import applePlazaLogo from "@/assets/ApplePlaza.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Optera Solutions — Engineering digital excellence" },
      { name: "description", content: "Web development, business systems, UI/UX, AI solutions and digital marketing for modern enterprises." },
      { property: "og:title", content: "Optera Solutions — Engineering digital excellence" },
      { property: "og:description", content: "Web, business systems, design, AI and marketing — engineered by Optera Solutions." },
    ],
  }),
  component: Home,
});

const bentoSpan = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2"];
const clientLogos = [
  { name: "99 Store", src: store99Logo },
  { name: "Royal Treats", src: royalTreatsLogo },
  { name: "99 Store", src: store99Logo },
  { name: "Apple Plaza", src: applePlazaLogo },
];

function Home() {
  return (
    <>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="src\assets\bgvideo.mp4" type="video/mp4" />
        </video>

        {/* Black overlay to keep text readable */}
        <div className="absolute inset-0 -z-10 bg-black/55" />

        {/* Optional grid effect */}
        {/* <div
    className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-30"
    aria-hidden="true"
  /> */}

        {/* Hero content */}
        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-20 text-center md:pb-28 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
        <Sparkles className="size-4 text-primary" />
        Full-stack product studio · Web · ERP · AI
      </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-13 text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white"
          >
            Turning Your{" "}
            <span className="text-primary/80">
            complex
            </span>{" "}
             Business <span className="text-primary/80"> ideas </span> into <span className="text-primary/80"> scalable </span> digital products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-15 max-w-2xl text-lg text-white/50"
          >
            We design, build and deploy enterprise web applications, internal systems and automated AI workflows
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            {/* <Button asChild size="lg">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link to="/projects">View our work</Link>
            </Button> */}
          </motion.div>
        </div>
      </section>


      {/* Clients */}
      {/* <section className="border-y bg-card py-10 overflow-hidden">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by Startups & Businesses
        </p> */}

      {/* Infinite Marquee Wrapper */}
      {/* <div className="relative mt-8 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"> */}
      {/* First Track */}
      {/* <div className="flex min-w-full shrink-0 items-center justify-around gap-16 animate-marquee">
            {clientLogos.map((logo, i) => (
              <div key={`${logo.name}-${i}`} className="flex items-center justify-center h-25 w-36">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto max-w-full object-contain mix-blend-multiply dark:mix-blend-screen dark:brightness-125 dark:contrast-125 opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div> */}

      {/* Duplicate Track for Smooth Loop */}
      {/* <div className="flex min-w-full shrink-0 items-center justify-around gap-16 animate-marquee" aria-hidden="true">
            {clientLogos.map((logo, i) => (
              <div key={`${logo.name}-dup-${i}`} className="flex items-center justify-center h-full w-36">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto max-w-full object-contain mix-blend-multiply dark:mix-blend-screen dark:brightness-125 dark:contrast-125 opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services bento */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading eyebrow="Our Services" title="Five disciplines. At one accountable team" subtitle="From the first wireframe to the growth campaign  everything under one roof." />
        <div className="grid gap-4 md:grid-cols-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06} className={bentoSpan[i]}>
              <Link to="/services" hash={s.slug} className={`group flex h-full flex-col justify-between rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg ${i === 0 ? "bg-brand-gradient text-primary-foreground" : "bg-card"}`}>
                <s.icon className={`size-9 ${i === 0 ? "" : "text-primary"}`} strokeWidth={1.5} />
                <div className="mt-10">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className={`mt-2 text-sm ${i === 0 ? "opacity-90" : "text-muted-foreground"}`}>{s.tagline}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Recent work" title="Engineered deliverables" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}><ProjectCard p={p} /></Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline"><Link to="/projects">All projects <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading eyebrow="Highlights from the feed" title="What our clients say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border bg-card p-7">
                <div className="flex gap-1 text-primary" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="size-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
