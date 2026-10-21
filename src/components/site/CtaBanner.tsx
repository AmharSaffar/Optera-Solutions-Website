import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-5xl">Have a product in mind? Let's build it right.</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-90">Book a free 30-minute discovery call and get a clear plan, timeline and estimation.</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3 font-semibold text-foreground transition-transform hover:-translate-y-0.5"
        >
          Start your project <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
