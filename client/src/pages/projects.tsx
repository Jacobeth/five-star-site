import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import img3528 from "@assets/IMG_3528_1772252654756.JPG";
import img3604 from "@assets/IMG_3604_1772252654758.JPG";
import img3723 from "@assets/IMG_3723_1772252654758.JPG";
import img3981 from "@assets/IMG_3981_1772252654759.JPG";
import img3982 from "@assets/IMG_3982_1772252654769.JPG";
import img4413 from "@assets/IMG_4413_1772252654769.JPG";
import img4496 from "@assets/IMG_4496_1772252654770.JPG";
import Layout from "@/components/layout";

const projects = [
  {
    title: "ADA Handicap Stencil",
    category: "ADA Compliance",
    desc: "Crisp blue and white handicap stencil application with clean edges on fresh asphalt.",
    image: img3528,
  },
  {
    title: "No-Parking Zone Markings",
    category: "Custom Stenciling",
    desc: "Bold yellow chevron markings to clearly designate no-parking and traffic flow zones.",
    image: img3604,
  },
  {
    title: "Church Parking Lot",
    category: "New Layout",
    desc: "Full ADA-compliant layout with handicap spaces, access aisles, and fresh white striping on a newly paved lot.",
    image: img3723,
  },
  {
    title: "Directional Arrows",
    category: "Custom Stenciling",
    desc: "Bright yellow directional arrows guiding traffic flow through a commercial retail lot.",
    image: img3981,
  },
  {
    title: "Handicap Space with Access Aisle",
    category: "ADA Compliance",
    desc: "Blue and yellow handicap marking with properly dimensioned access aisles meeting all ADA specifications.",
    image: img3982,
  },
  {
    title: "Office Building ADA Upgrade",
    category: "ADA Compliance",
    desc: "Multiple ADA-compliant handicap spaces with fresh blue stencils, white striping, and proper signage placement at an office building.",
    image: img4413,
  },
  {
    title: "Directional Arrow Stencil",
    category: "Re-Striping",
    desc: "Clean white directional arrow on dark asphalt for clear traffic guidance in a commercial parking facility.",
    image: img4496,
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
