"use client"
import Hero from "./hero/Hero";
import Target from "./target/Target";
import About from "./about/About";
import Services from "./services/Services";
import Gallery from "./gallery/Gallery";
import Clients from "./clients/Clients";
import Footer from "./components/Footer";
import ContactForm from "./contact/ContactForm";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      {show && <ContactForm />}
      <About />
      <Gallery />
      <Services />
      <Clients />
      <Target />
      <Footer />
    </main>
  );
}
