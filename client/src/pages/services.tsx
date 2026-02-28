import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PaintRoller, HardHat, ShieldCheck, Ruler, PaintBucket, Layers, ChevronDown } from "lucide-react";
import Layout from "@/components/layout";

const services = [
  {
    title: "New Layouts",
    desc: "Complete design and execution of brand-new parking lot layouts. We optimize for traffic flow, maximize space capacity, and ensure full code compliance from the ground up.",
    details: "Our new layout service includes an on-site consultation where we assess your lot dimensions, local code requirements, and traffic patterns. We then create a detailed layout plan showing every stall, lane, and marking before any paint hits the ground. We handle everything from standard angled and perpendicular parking to complex multi-level and high-traffic configurations. All layouts are designed to maximize your available space while maintaining safe driving lanes and pedestrian paths.",
    icon: PaintRoller,
  },
  {
    title: "Re-Striping",
    desc: "Refreshing faded lines to restore safety, visibility, and aesthetics to your existing parking facility. We prep the surface, lay crisp new lines, and get you back in business fast.",
    details: "Over time, sun, weather, and traffic wear down your lot markings. Our re-striping process starts with thorough surface prep — cleaning and, if needed, removing old markings that have shifted or become confusing. We then apply fresh, high-visibility traffic paint using precision airless equipment. Most re-striping jobs can be completed overnight so your business doesn't skip a beat. We recommend re-striping every 18–24 months to maintain sharp visibility.",
    icon: HardHat,
  },
  {
    title: "ADA Compliance",
    desc: "Expert application of handicap accessible spaces, crosswalks, loading zones, and proper signage stenciling to ensure your property meets all federal, state, and local accessibility requirements.",
    details: "ADA violations can result in significant fines and legal liability. Our team stays current on all federal ADA Standards for Accessible Design and Utah-specific accessibility codes. We ensure the correct number of accessible spaces based on your total lot capacity, proper access aisle widths, correct signage placement and stencil dimensions, van-accessible designations, and compliant crosswalk markings connecting to building entrances. We provide documentation of all work completed for your records.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Stenciling",
    desc: "Directional arrows, 'No Parking' zones, fire lanes, reserved spots, and company logos. We handle all specialty stenciling to keep your lot organized and professional.",
    details: "Beyond standard lines, clear stenciling makes your lot easier to navigate and keeps traffic flowing safely. We offer a full catalog of professional stencils including directional arrows, speed bumps, stop bars, yield markings, 'Reserved' and 'Visitor' labels, numbered spaces, fire lane lettering, and even custom company logos or branding elements painted directly onto the pavement. All stenciling is done with commercial-grade templates for clean, consistent results every time.",
    icon: Layers,
  },
  {
    title: "Curb Painting",
    desc: "Color-coded curb painting for fire lanes (red), loading zones (yellow), handicap (blue), and no-parking areas. Clear curb markings keep your lot safe and compliant.",
    details: "Properly painted curbs communicate important information at a glance. Red curbs mark fire lanes and no-stopping zones required by fire code. Yellow curbs designate loading and unloading areas with time limits. Blue curbs indicate handicap-accessible zones. White curbs mark passenger loading only. We use durable, weather-resistant curb paint that stays visible through Utah's tough seasons, and we ensure all colors match current municipal and fire department codes for your area.",
    icon: PaintBucket,
  },
  {
    title: "Warehouse & Industrial",
    desc: "Safety lanes, pedestrian walkways, forklift paths, and hazard zones for warehouses, factories, and industrial facilities. OSHA-compliant markings that protect your team.",
    details: "Industrial facilities have unique marking requirements that go beyond standard parking lots. We specialize in OSHA-compliant floor and pavement markings including forklift traffic lanes, pedestrian walkways, hazard zones, equipment boundaries, loading dock markings, and emergency exit paths. We use heavy-duty industrial coatings designed to withstand forklift traffic, chemical exposure, and extreme wear. Our team works around your production schedule to minimize downtime.",
    icon: Ruler,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="bg-card border-white/5 rounded-none hover:border-primary/50 transition-colors group" data-testid={`card-service-${index}`}>
      <CardContent className="p-8">
        <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6">{service.desc}</p>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:text-primary/80 transition-colors cursor-pointer mb-4"
          data-testid={`button-details-${index}`}
        >
          {open ? "Show Less" : "Learn More"}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/10 pt-4">
              {service.details}
            </p>
          </div>
        </div>

        <div className="h-1 w-12 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-300" />
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <div className="inline-block border-l-4 border-primary pl-4 mb-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">What We Do</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From fresh layouts to faded-line touch-ups, Five Star Line Striping delivers professional pavement marking solutions for every property type.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Need Something Specific?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Every lot is different. Contact us and we'll put together a custom plan for your property.
            </p>
            <Link href="/quote">
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold uppercase tracking-wider group" data-testid="button-services-quote">
                Get a Free Estimate
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
