import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Optera Solutions | Software Development Company in Sri Lanka" },
      { name: "description", content: "Tell us about your project and get a plan, timeline and estimate from Optera Solutions." },
      { property: "og:title", content: "Optera Solutions | Software Development Company in Sri Lanka" },
      { property: "og:description", content: "Start your project with Optera Solutions." },
    ],
  }),
  component: Contact,
});

const budgets = ["< LKR 60,000", "LKR 60,000 – LKR 150,000", "LKR 150,000 – LKR 500,000", "LKR 500,000+"];

function Contact() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!service || !budget) { toast.error("Please choose a service and budget"); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! We'll reply within one business day.");
      (e.target as HTMLFormElement).reset();
      setService("");
      setBudget("");
    }, 700);
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-5">
      <Reveal className="lg:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Let's talk about your project</h1>
        <p className="mt-4 text-muted-foreground">Share a few details and we'll come back with next steps.</p>
        <ul className="mt-10 space-y-4">
          <li className="flex items-start gap-4 rounded-2xl border bg-card p-5">
            <Mail className="mt-0.5 size-5 text-primary" />
            <div><p className="font-semibold">Email</p><a href="mailto:info@opterasolutions.com" className="text-sm text-muted-foreground hover:text-foreground">info@opterasolutions.com</a></div>
          </li>
          <li className="flex items-start gap-4 rounded-2xl border bg-card p-5">
            <MapPin className="mt-0.5 size-5 text-primary" />
            <div><p className="font-semibold">Location</p><p className="text-sm text-muted-foreground">23/1 Mawathagama, Kurunegala.</p></div>
          </li>
          <li className="flex items-start gap-4 rounded-2xl border bg-primary p-5 text-primary-foreground">
            <CalendarDays className="mt-0.5 size-5" />
            <div><p className="font-semibold">Prefer a call?</p><p className="text-sm opacity-90">Book a free 30-minute discovery meeting.</p></div>
          </li>
        </ul>
      </Reveal>

      {/* Added mt-8 lg:mt-12 here to push the form down */}
      <Reveal delay={0.1} className="mt-8 lg:mt-12 lg:col-span-3">
        <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border bg-card p-6 sm:grid-cols-2 md:p-10">
          <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required maxLength={100} placeholder="Kamal Dev" /></div>
          <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required maxLength={255} placeholder="kamal@gmail.com" /></div>
          <div className="space-y-2">
            <Label>Service</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="w-full"><SelectValue placeholder="Select a service" /></SelectTrigger>
              <SelectContent>{services.map((s) => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Project budget</Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="w-full"><SelectValue placeholder="Select a budget" /></SelectTrigger>
              <SelectContent>{budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2 sm:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" required maxLength={2000} rows={6} placeholder="Tell us about your goals, timeline and anything else." /></div>
          <Button type="submit" size="lg" disabled={sending} className="sm:col-span-2">{sending ? "Sending…" : "Send Inquiry"}</Button>
        </form>
      </Reveal>
    </section>
  );
}
