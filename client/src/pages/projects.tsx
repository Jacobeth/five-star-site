import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/images/hero-parking-lines.jpg";
import workerImg from "@/assets/images/worker-striping.jpg";
import handicapImg from "@/assets/images/handicap-space.jpg";
import Layout from "@/components/layout";

const projects = [
  {
    title: "Commercial Retail Center",
    category: "New Layout",
    desc: "Full parking lot layout for a 200-space retail center including fire lanes, ADA spaces, directional arrows, and loading zones.",
    image: heroImg,
  },
  {
    title: "Industrial Warehouse Complex",
    category: "Re-Striping",
    desc: "Complete re-stripe of a 3-building warehouse facility with safety lanes, pedestrian walkways, and forklift paths.",
    image: workerImg,
  },
  {
    title: "Medical Office Park",
    category: "ADA Compliance",
    desc: "ADA compliance upgrade for a medical campus — handicap spaces, access aisles, crosswalks, and compliant signage stenciling.",
    image: handicapImg,
  },
  {
    title: "Grocery Store Lot",
    category: "Re-Striping",
    desc: "Overnight re-stripe of a busy grocery store lot with zero business disruption. 150+ spaces completed before morning opening.",
    image: heroImg,
  },
  {
    title: "Church Parking Lot",
    category: "New Layout",
    desc: "Brand new layout design and striping for a newly paved church lot, maximizing capacity while maintaining easy traffic flow.",
    image: workerImg,
  },
  {
    title: "Apartment Complex",
    category: "Custom Stenciling",
    desc: "Numbered reserved spaces, visitor parking, fire lane markings, and speed limit stenciling for a 300-unit apartment community.",
    image: handicapImg,
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <div className="inline-block border-l-4 border-primary pl-4 mb-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Recent <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Here's a look at some of the parking lots and facilities we've striped across Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden border border-white/5 hover:border-primary/50 transition-colors" data-testid={`card-project-${i}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6 bg-card">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Your Project Could Be Next</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether it's a small lot or a large commercial property, we deliver the same five-star quality every time.
            </p>
            <Link href="/quote">
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold uppercase tracking-wider group" data-testid="button-projects-quote">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
