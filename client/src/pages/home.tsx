import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, HardHat, PaintRoller, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/images/hero-parking-lines.jpg";
import workerImg from "@/assets/images/worker-striping.jpg";
import handicapImg from "@/assets/images/handicap-space.jpg";
import logoImg from "@assets/StarYellow_1772248806006.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-asphalt-texture">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="PrecisionLine Logo" className="h-10 w-auto object-contain" />
            <span className="font-display font-black text-2xl tracking-tighter uppercase">
              Five Star <span className="text-primary">Line Striping</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>
          <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" data-testid="button-quote-nav">
            Get Estimate
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Freshly painted yellow parking lines" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block border-l-4 border-primary pl-4 mb-6">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Quality Line Striping</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              Make Your <br />
              <span className="text-primary">First Impression</span> <br />
              Count.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
              Crisp, clear, and durable parking lot striping that ensures safety, compliance, and maximizes your property's curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-8 text-lg font-bold uppercase tracking-wider group" data-testid="button-quote-hero">
                Request Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border-2 border-white/20 hover:bg-white/5 h-16 px-8 text-lg font-bold uppercase tracking-wider" data-testid="button-services-hero">
                Our Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative stripe */}
        <div className="absolute bottom-0 left-0 w-full h-4 diagonal-stripes z-20" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Core <span className="text-primary text-stroke-primary">Services</span></h2>
              <p className="text-muted-foreground text-lg max-w-xl">We provide comprehensive pavement marking solutions for commercial, industrial, and residential properties.</p>
            </div>
            <Button variant="link" className="text-primary hover:text-primary/80 uppercase font-bold tracking-wider" data-testid="link-all-services">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New Layouts",
                desc: "Design and execution of completely new parking lot layouts optimized for traffic flow and maximum capacity.",
                icon: PaintRoller
              },
              {
                title: "Re-Striping",
                desc: "Refreshing faded lines to restore safety, visibility, and aesthetics to your existing parking facility.",
                icon: HardHat
              },
              {
                title: "ADA Compliance",
                desc: "Expert application of handicap accessible spaces, crosswalks, and stenciling to ensure full legal compliance.",
                icon: ShieldCheck
              }
            ].map((service, i) => (
              <Card key={i} className="bg-card border-white/5 rounded-none hover:border-primary/50 transition-colors group">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{service.desc}</p>
                  <div className="h-1 w-12 bg-primary/20 group-hover:w-full group-hover:bg-primary transition-all duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 translate-x-4 translate-y-4" />
              <img 
                src={workerImg} 
                alt="Professional line striping" 
                className="relative z-10 w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 -right-8 z-20 bg-primary text-primary-foreground p-6 max-w-xs shadow-2xl">
                <p className="font-display font-black text-3xl mb-2">15+ Years</p>
                <p className="font-bold uppercase tracking-wider text-sm">Industry Experience</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Why Trust <span className="text-primary">Five Star</span>?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We use commercial-grade airless striping equipment and premium traffic paint to deliver laser-straight lines that withstand heavy traffic and harsh weather.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Premium traffic-rated paint formulations",
                  "Laser-guided airless spray equipment",
                  "Fully licensed, bonded, and insured",
                  "Minimal disruption to your business operations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADA Compliance Highlight */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Strict <span className="text-blue-500">ADA</span> Compliance</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Navigating ADA regulations can be complex. We ensure your property meets all federal, state, and local accessibility requirements.
              </p>
              <Button variant="outline" className="rounded-none border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white uppercase font-bold tracking-wider" data-testid="button-ada-guide">
                Read ADA Guidelines
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/3] bg-blue-900/20 absolute inset-0 transform rotate-3" />
              <img 
                src={handicapImg} 
                alt="ADA Handicap Parking Space" 
                className="relative z-10 w-full object-cover aspect-[4/3] border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-black">Ready to Draw the Line?</h2>
          <p className="text-2xl font-medium mb-12 max-w-2xl mx-auto text-black/80">
            Contact us today for a free, no-obligation estimate on your next pavement marking project.
          </p>
          <Button size="lg" className="rounded-none bg-black text-white hover:bg-black/90 h-16 px-12 text-xl font-black uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all" data-testid="button-final-cta">
            Schedule Your Estimate
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={logoImg} alt="PrecisionLine Logo" className="h-8 w-auto object-contain" />
                <span className="font-display font-black text-xl tracking-tighter uppercase">
                  Five Star <span className="text-primary">Line Striping</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Setting the standard in professional parking lot striping, pavement marking, and maintenance.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  801-885-8316
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  info@fivestar.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  123 Industrial Pkwy, City, ST
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">New Layouts</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Re-Striping</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ADA Compliance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Stenciling</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
            <p>&copy; {new Date().getFullYear()} Five Star Line Striping. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}