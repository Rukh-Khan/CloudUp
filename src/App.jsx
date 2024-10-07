import Feature from "./sections/Feature";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App () {
  return (
    // <div className="max-w-screen-2xl mx-auto relative">
    //   <Header/>
    //   <Hero/>
    //   <Feature/>
    // </div>

    <main className="relative max-w-[90vw] mx-auto">
      <Header/>
      <section>
        <Hero/>
      </section>
      <div className="space-y-20">
        <section className="border-2 border-black">
          feature
        </section>
        <section className="border-2 border-black">
          why choose us ? 
        </section>
        <section className="border-2 border-black">
          pricing
        </section>
        <section className="border-2 border-black">
          faq
        </section>
        <section className="border-2 border-black">
          testimonials - companies
        </section>
        <section className="border-2 border-black">
          Available for professionals and available playstore section
        </section>
        <section className="border-2 border-black">
          footer
        </section>
      </div>
    </main>
  )
}

export default App;
