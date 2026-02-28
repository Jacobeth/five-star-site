import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PaintRoller, HardHat, ShieldCheck, Ruler, PaintBucket, Layers } from "lucide-react";
import Layout from "@/components/layout";

const services = [
  {
    title: "New Layouts",
    desc: "Complete design and execution of brand-new parking lot layouts. We optimize for traffic flow, maximize space capacity, and ensure full code compliance from the ground up.",
    icon: PaintRoller,
  },
  {
    title: "Re-Striping",
    desc: "Refreshing faded lines to restore safety, visibility, and aesthetics to your existing parking facility. We prep the surface, lay crisp new lines, and get you back in business fast.",
    icon: HardHat,
  },
  {
    title: "ADA Compliance",
    desc: "Expert application of handicap accessible spaces, crosswalks, loading zones, and proper signage stenciling to ensure your property meets all federal, state, and local accessibility requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Stenciling",
    desc: "Directional arrows, 'No Parking' zones, fire lanes, reserved spots, and company logos. We handle all specialty stenciling to keep your lot organized and professional.",
    icon: Layers,
  },
  {
    title: "Curb Painting",
    desc: "Color-coded curb painting for fire lanes (red), loading zones (yellow), handicap (blue), and no-parking areas. Clear curb markings keep your lot safe and compliant.",
    icon: PaintBucket,
  },
  {
    title: "Warehouse & Industrial",
    desc: "Safety lanes, pedestrian walkways, forklift paths, and hazard zones for warehouses, factories, and industrial facilities. OSHA-compliant markings that protect your team.",
    icon: Ruler,
  },
];

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
              <Card key={i} className="bg-card border-white/5 rounded-none hover:border-primary/50 transition-colors group" data-testid={`card-service-${i}`}>
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <div className="h-1 w-12 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-300" />
                </CardContent>
              </Card>
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
