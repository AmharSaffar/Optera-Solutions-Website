import { Code2, Boxes, PenTool, BrainCircuit, TrendingUp, type LucideIcon } from "lucide-react";
import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";


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
    offerings: ["Landing Page Websites","Corporate Websites", "E-commerce Websites", "Custom Web Applications", "POS Systems", "Website Maintenance"],
  },
  {
    slug: "business-systems",
    icon: Boxes,
    title: "Management & Business Systems",
    tagline: "Tailored ERPs, Custom CRMs and Internal workflow automation",
    description:
      "Streamline operations and modernize internal workflows with scalable enterprise software built specifically for your business processes.",
    offerings: ["ERP Systems", "CRM Systems", "HR &  Payroll Systems", "Workflow Automations",],
  },
  {
    slug: "design",
    icon: PenTool,
    title: "Branding & Creative Solutions",
    tagline: "User-centric UI/UX interface design, Design systems and Digital branding",
    description:
      "Research-led product design and component systems that keep your brand consistent across every screen.",
    offerings: ["Logo & Brand Identity Design", "Brand Strategy & Guidelines", "Graphic Design", "Social Media Creatives", "Packaging Design", "Marketing Materials"],
  },
  {
    slug: "ai-solutions",
    icon: BrainCircuit,
    title: "AI Solutions",
    tagline: "Custom LLMs, Intelligent workflow automation and Predictive analytics",
    description:
      "Integrate artificial intelligence models directly into your core business operations to drive speed and automation.",
    offerings: ["AI-Powered Customer Support", "AI chat assistants", "AI-Powered Business Tools", "AI Workflow Integration"],
  },
  {
    slug: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    tagline: "Data-driven growth campaigns, technical SEO and conversion funnels",
    description:
      "Scale your digital footprint and generate qualified leads through technical search optimization and high-converting funnel strategies.",
    offerings: ["Social Media Management", "Search Engine Optimization", "Google Ads & Meta Ads", "Digital Marketing Strategy", "Content Marketing", "Performance Reporting"],
  },
  
];

export type Project = { title: string; category: string; summary: string; image: string };

export const projectCategories = ["All", "Web Apps", "AI Solutions", "E-commerce"] as const;

export const projects: Project[] = [
  { title: "99 Stores", category: "Digital Marketing", summary: "Scaling online revenue and foot-traffic with technical SEO and conversion-focused performance marketing.", image: p1 },
  { title: "Mr Spice Export", category: "Website", summary: "A high-performance, international B2B export website built for global wholesale inquiries and catalog showcase.", image: p2 },
  { title: "Apple Plaza", category: "Digital Marketing", summary: "Driving local foot traffic and digital inquiry funnels through technical local SEO and hyper-targeted lead generation.", image: p4 },
  { title: "Royal Treats", category: "Branding", summary: "Designing a brand identity, visual style guide and cohesive packaging design system.", image: p3 },
  { title: "Zero Kids", category: "Digital Marketing", summary: "A comprehensive digital marketing strategy to engage and convert young audiences.", image: p5 },
];


export const clients = ["Brewline", "Nexora", "Atlas", "Lumen", "Vertex", "Kairo"];

export const testimonials = [
  
  { 
    name: "Muhammad Asif", 
    role: "Founder, Tapito", 
    quote: "Optera completely transformed our digital presence. The website is lightning-fast and gives us an immediate enterprise-level competitive edge.", 
    rating: 5 
  },
  { 
    name: "Danushka Perera", 
    role: "Owner, IMobile", 
    quote: "Our new POS cut checkout time in half. Optera understood our floor operations better than any vendor before.", 
    rating: 4.5 
  },
  { 
    name: "Balakrishnan Ramasamy", 
    role: "Founder, Bala Traders", 
    quote: "The ERP replaced eleven spreadsheets. Clear communication from day one to launch.", 
    rating: 5 
  },
];