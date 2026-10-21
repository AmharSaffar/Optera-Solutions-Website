import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src="src/assets/logo-transparent.png"
            alt="Optera Solutions"
            className="h-10 w-auto object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            We design, build, and scale custom web applications, enterprise management systems and AI products for ambitious modern Businesses.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Facebook, Github, Instagram].map((Icon, i) => (
              <a key={i} href={`https://www.${["linkedin", "facebook", "github", "instagram"][i]}.com/optera.solutions`} aria-label="Social profile" className="rounded-lg border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}><Link to="/services" hash={s.slug} className="hover:text-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm text-muted-foreground">Monthly notes on engineering and growth.</p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!/^\S+@\S+\.\S+$/.test(email)) { toast.error("Please enter a valid email"); return; }
              toast.success("You're subscribed!");
              setEmail("");
            }}
          >
            <Input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
            <Button type="submit">Join</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Optera Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
