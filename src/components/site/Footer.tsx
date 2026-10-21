
import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/optera-solutions-sl/",
      Icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/optera.solutions",
      Icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/optera.solutions",
      Icon: Instagram,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@optera.solutions",
      Icon: FaTiktok,
    },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand Section */}
        <div className="lg:col-span-2">
          <img
            src="/logo-transparent.png"
            alt="Optera Solutions"
            className="h-10 w-auto object-contain"
            width={160}
            height={40}
          />

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We design, build, and scale custom web applications,
            enterprise management systems, and AI products for
            ambitious modern businesses.
          </p>

          {/* Social Media Links */}
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Optera Solutions on ${name}`}
                title={name}
                className="rounded-[100px] border bg-background p-2.5 text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            Company
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                to="/about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="transition-colors hover:text-primary"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            Services
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t bg-muted/40">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Optera Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
