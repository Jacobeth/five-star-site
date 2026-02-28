import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import workerImg from "@assets/IMG_4413_1772252654769.JPG";
import Layout from "@/components/layout";

export default function About() {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <div className="inline-block border-l-4 border-primary pl-4 mb-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Who We Are</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              About <span className="text-primary">Five Star</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a Utah-based parking lot striping company built on precision, reliability, and doing the job right the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 translate-x-4 translate-y-4" />
              <img
                src={workerImg}
                alt="Five Star crew at work"
                className="relative z-10 w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 -right-8 z-20 bg-primary text-primary-foreground p-6 max-w-xs shadow-2xl">
                <p className="font-display font-black text-3xl mb-2">1 Year</p>
                <p className="font-bold uppercase tracking-wider text-sm">And Growing Strong</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                Why Trust <span className="text-primary">Five Star</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We use commercial-grade airless striping equipment and premium traffic paint to deliver laser-straight lines that withstand heavy traffic and harsh weather. Our team treats every lot like it's our own property.
              </p>

              <ul className="space-y-6">
                {[
                  "Premium traffic-rated paint formulations",
                  "Laser-guided airless spray equipment",
                  "Fully licensed, bonded, and insured",
                  "Minimal disruption to your business operations",
                  "Free on-site estimates with fast turnaround",
                  "Serving all of Utah",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Our <span className="text-primary">Commitment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              At Five Star Line Striping, we believe a well-marked parking lot is more than just paint on pavement — it's the first thing your customers see. We're committed to making that first impression count with crisp, durable lines and professional service every time.
            </p>
            <Link href="/quote">
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold uppercase tracking-wider group" data-testid="button-about-quote">
                Work With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
