
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="reviews">
          <ClientReviews />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
