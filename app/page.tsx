import About from "./components/About";
import CoachingFormSection from "./components/CoachingFormSection";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Recipes from "./components/Recipes";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Workouts from "./components/Workouts";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Problem />
      <Services />
      <Process />
      <About />
      <Recipes />
      <Workouts />
      <Testimonials />
      <Reviews />
      <Faq />
      <CoachingFormSection />
      <Footer />
    </div>
  );
}
