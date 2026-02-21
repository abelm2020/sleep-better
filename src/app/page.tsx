import Hero from "@/components/Marketing/Hero";
import HowItWorks from "@/components/Marketing/HowItWorks";
import WhatsInside from "@/components/Marketing/WhatsInside";
import Testimonials from "@/components/Marketing/Testimonials";
import Pricing from "@/components/Marketing/Pricing";
import FAQ from "@/components/Marketing/FAQ";
import Guarantee from "@/components/Marketing/Guarantee";
import Waitlist from "@/components/Marketing/Waitlist";
import Contact from "@/components/Marketing/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <WhatsInside />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Guarantee />
      <Waitlist />
      <Contact />
    </main>
  );
}