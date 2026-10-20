import { Code2, Boxes, PenTool, BrainCircuit, TrendingUp, type LucideIcon } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import team from "@/assets/team.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    tagline: "High-performance Web Applications, E-commerce and Cloud POS platforms",
    description:
      "We design and engineer fast, resilient web applications and portals tailored to convert visitors into recurring customers.",
    offerings: ["Corporate websites", "E-commerce websites", "Web applications", "POS systems"],
  },
  {
    slug: "business-systems",
    icon: Boxes,
    title: "Management & Business Systems",
    tagline: "Tailored ERPs, Custom CRMs and Internal workflow automation",
    description:
      "Streamline operations and modernize internal workflows with scalable enterprise software built specifically for your business processes.",
    offerings: ["ERP platforms", "Inventory & Procurement", "HR &  Payroll tools", "Workflow automation"],
  },
  {
    slug: "design",
    icon: PenTool,
    title: "Design & Brand Experience",
    tagline: "User-centric UI/UX interface design, Design systems and Digital branding",
    description:
      "Research-led product design and component systems that keep your brand consistent across every screen.",
    offerings: ["UX research", "UI design", "Design systems", "Brand identity"],
  },
  {
    slug: "ai-solutions",
    icon: BrainCircuit,
    title: "AI Solutions",
    tagline: "Custom LLMs, Intelligent workflow automation and Predictive analytics",
    description:
      "Integrate artificial intelligence models directly into your core business operations to drive speed and automation.",
    offerings: ["LLM integrations", "AI chat assistants", "Document automation", "Predictive analytics"],
  },
  {
    slug: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Data-driven growth campaigns, technical SEO and conversion funnels",
    description:
      "Scale your digital footprint and generate qualified leads through technical search optimization and high-converting funnel strategies.",
    offerings: ["Technical SEO Optimization", "Content strategy", "Paid campaigns", "Analytics & Reporting"],
  },
];

export type Project = { title: string; category: string; summary: string; image: string };

export const projectCategories = ["All", "Web Apps", "AI Solutions", "E-commerce"] as const;

export const projects: Project[] = [
  { title: "Flowie Analytics", category: "Web Apps", summary: "Real-time revenue dashboard for a growing SaaS team.", image: p1 },
  { title: "Nexora Store", category: "E-commerce", summary: "Mobile-first storefront with one-tap checkout.", image: p2 },
  { title: "Brew POS", category: "Web Apps", summary: "Tablet point-of-sale for a multi-branch café chain.", image: p3 },
  { title: "DocuMind", category: "AI Solutions", summary: "AI that reads and routes thousands of invoices a day.", image: team },
  { title: "Atlas ERP", category: "Web Apps", summary: "Unified inventory, HR and finance for a manufacturer.", image: p1 },
  { title: "Support Copilot", category: "AI Solutions", summary: "LLM assistant grounded in a 10k-article help center.", image: p3 },
];

export const testimonials = [
  { name: "Dilini Perera", role: "COO, Brewline Cafés", quote: "Our new POS cut checkout time in half. Optera understood our floor operations better than any vendor before.", rating: 5 },
  { name: "Marcus Hale", role: "Founder, Nexora", quote: "They shipped our store in six weeks and conversions jumped 38% in the first month.", rating: 5 },
  { name: "Aisha Rahman", role: "Head of Ops, Atlas Mfg.", quote: "The ERP replaced eleven spreadsheets. Clear communication from day one to launch.", rating: 5 },
];

export const clients = ["Brewline", "Nexora", "Atlas", "Lumen", "Vertex", "Kairo"];
