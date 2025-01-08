// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import ExplorePage from "./explore-page";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExplorePage />
      {/* <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq /> */}
      {/* <Footer /> */}
    </>
  );
}
