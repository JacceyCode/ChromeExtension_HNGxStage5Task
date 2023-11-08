import Header from "../features/Header";
import Hero from "../features/Hero";
import Features from "../features/Features";
import HowItWorks from "../features/HowItWorks";

function Home() {
  return (
    <section className="m-auto max-w-[90rem]">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
    </section>
  );
}

export default Home;
