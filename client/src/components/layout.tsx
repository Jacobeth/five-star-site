import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@assets/StarYellow_1772248806006.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-asphalt-texture">
      <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <img src={logoImg} alt="Five Star Line Striping Logo" className="h-10 w-auto object-contain" />
            <span className="font-display font-black text-2xl tracking-tighter uppercase">
              Five Star <span className="text-primary">Line Striping</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors ${location === link.href ? "text-primary" : ""}`}
                data-testid={`link-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/quote">
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" data-testid="button-quote-nav">
              Get Estimate
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-20 flex-1">{children}</main>

      <footer className="bg-background border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img src={logoImg} alt="Five Star Line Striping Logo" className="h-8 w-auto object-contain" />
                <span className="font-display font-black text-xl tracking-tighter uppercase">
                  Five Star <span className="text-primary">Line Striping</span>
                </span>
              </Link>
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
                  fivestarlinestripingutah@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  Utah
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="/services" className="hover:text-primary transition-colors">New Layouts</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Re-Striping</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">ADA Compliance</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Custom Stenciling</Link></li>
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
