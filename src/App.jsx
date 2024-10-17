import Pricing from "./sections/Pricing";
import Feature from "./sections/Feature";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import Avail from "./sections/Avail";
import Footer from "./sections/Footer";
function App () {
  return (
    <main className="relative">
      <Header/>
      <Hero/>
      <Feature/>
      <Pricing/>
      <FAQ/>
      <Testimonials/>
      <Avail/>
      <Footer/>
    </main>
  )
}

export default App;
