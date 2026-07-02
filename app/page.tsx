import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import ProblemSection from "@/components/ProblemSection";
import OperatingLoop from "@/components/OperatingLoop";
import ForFirms from "@/components/ForFirms";
import FounderSection from "@/components/FounderSection";
import ComplianceBoundary from "@/components/ComplianceBoundary";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PositioningStrip />
        <ProblemSection />
        <OperatingLoop />
        <ForFirms />
        <FounderSection />
        <ComplianceBoundary />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
