import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/quote-requests", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
    },
  });

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Quote Request Sent!</h3>
        <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
        <Button
          variant="outline"
          className="rounded-none uppercase font-bold tracking-wider"
          onClick={() => setSubmitted(false)}
          data-testid="button-new-quote"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase tracking-wider text-xs font-bold">Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Smith"
                    className="rounded-none bg-background border-white/20 focus:border-primary h-12"
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase tracking-wider text-xs font-bold">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@example.com"
                    className="rounded-none bg-background border-white/20 focus:border-primary h-12"
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase tracking-wider text-xs font-bold">Phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="(801) 555-1234"
                    className="rounded-none bg-background border-white/20 focus:border-primary h-12"
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase tracking-wider text-xs font-bold">Service Needed</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-none bg-background border-white/20 focus:border-primary h-12" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new-layout">New Layout</SelectItem>
                    <SelectItem value="re-striping">Re-Striping</SelectItem>
                    <SelectItem value="ada-compliance">ADA Compliance</SelectItem>
                    <SelectItem value="custom-stenciling">Custom Stenciling</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase tracking-wider text-xs font-bold">Project Details (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Tell us about your project — lot size, number of spaces, timeline, etc."
                  className="rounded-none bg-background border-white/20 focus:border-primary min-h-[120px]"
                  data-testid="textarea-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={mutation.isPending}
          className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-bold uppercase tracking-wider w-full md:w-auto"
          data-testid="button-submit-quote"
        >
          {mutation.isPending ? "Sending..." : "Send Quote Request"}
        </Button>

        {mutation.isError && (
          <p className="text-red-500 text-sm" data-testid="text-error">
            Something went wrong. Please try again or call us directly at 801-885-8316.
          </p>
        )}
      </form>
    </Form>
  );
}
