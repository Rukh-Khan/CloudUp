import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="max-md:bg-black/5">
      <div className="relative max-container flex md:flex-row items-center justify-center max-md:mt-10 max-lg:mt-10 pointer-events-auto max-sm:p-2">
        <div className="relative flex flex-col w-full lg:w-3/5  max-[640px]:mx-auto p-2 lg:ml-10 max-md:-top-40 space-y-7 z-10 md:justify-center md:space-y-10 lg:-top-1 lg:space-y-7 lg:tracking-widest">
          <p className="text-rose-400 max-md:whitespace-nowrap max-md:mt-60 z-10 text-xl md:mt-20 md:text-3xl lg:text-xl max-lg:max-w-80">
            Beyond Cloud Storage
          </p>
          <p className="mb-6 max-md:font-extrabold max-md:text-5xl bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent z-10 md:h2 lg:h3 xl:h22 max-xl:max-w-80 xl:max-w-96">
            AI POWERED DIGITAL STORER &{" "}
            <span className="lg:whitespace-nowrap">WORK SPACE</span>
          </p>

          <div className="max-2xl:max-w-80 font-sans z-10 body-1 hero_sub_head">
            <p>
              Store organize and discover your content with intelligent
              assistance that understands your needs. Let Ai guard manage your
              digital workspace.
            </p>
            <p className="text-rose-500">
              From Automatic organization to predictive file suggestions AND
              more
            </p>
          </div>

          <div className="flex flex-row gap-3 font-medium md:relative lg:-top-0">
            <button className="hero_btn">Free Trial </button>
            <button className="hero_btn">See Demo</button>
          </div>
        </div>

        <div className="max-lg:absolute hero-img_res hero_img">
          <img src="../../assets/image.png" className="md:scale-150" />
        </div>

        <div className="absolute -z-10 hero_ball">
          <img src="../../assets/BlueBall22.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
