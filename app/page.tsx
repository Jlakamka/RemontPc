import About from "@/public/components/about/About";
import Example from "@/public/components/example/Example";
import Footer from "@/public/components/footer/Footer";
import Header from "@/public/components/header/Header";
import Information from "@/public/components/information/Information";
import Services from "@/public/components/services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Information />
      <Example />
      <Services />
      {/* <About /> */}
      <Footer />
    </>
  );
}
