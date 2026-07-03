import { BetaModalProvider } from "@/components/beta/BetaAccess";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import ProblemSection from "@/components/ProblemSection";
import OperatingLoop from "@/components/OperatingLoop";
import DataLayer from "@/components/DataLayer";
import ForFirms from "@/components/ForFirms";
import FounderSection from "@/components/FounderSection";
import ComplianceBoundary from "@/components/ComplianceBoundary";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <BetaModalProvider>
      <Nav />
      <main>
        <Hero />
        <PositioningStrip />
        <ProblemSection />
        <OperatingLoop />
        <DataLayer />
        <ForFirms />
        <FounderSection />
        <ComplianceBoundary />
        <CTA />
      </main>
      <Footer />
    </BetaModalProvider>
  );
}
