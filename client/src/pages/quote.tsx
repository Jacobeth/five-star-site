import { Phone, Mail } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import Layout from "@/components/layout";

export default function Quote() {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block border-l-4 border-primary pl-4 mb-6">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Contact Us</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Get Your <span className="text-primary">Free Estimate</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Fill out the form and we'll get back to you within 24 hours with a detailed quote for your project.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-bold">Call Us Directly</p>
                    <a href="tel:801-885-8316" className="text-primary text-lg font-bold hover:underline" data-testid="link-phone">801-885-8316</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-bold">Email Us</p>
                    <a href="mailto:fivestarlinestripingutah@gmail.com" className="text-primary hover:underline" data-testid="link-email">fivestarlinestripingutah@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
