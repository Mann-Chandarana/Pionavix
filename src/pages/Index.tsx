
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface IndexProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Index = ({ isDark, toggleTheme }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <section id="home">
          <Hero isDark={isDark} />
        </section>
        <section id="services">
          <Services isDark={isDark} />
        </section>
        <section id="portfolio">
          <Portfolio isDark={isDark} />
        </section>
        <section id="about">
          <About isDark={isDark} />
        </section>
        <ClientReviews isDark={isDark} />
        <section id="contact">
          <Contact isDark={isDark} />
        </section>
      </main>
      <Footer isDark={isDark} />
      <ScrollToTop isDark={isDark} />
    </div>
  );
};

export default Index;
