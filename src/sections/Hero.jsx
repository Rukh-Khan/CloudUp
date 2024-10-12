import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen max-container overflow-hidden flex max-md:flex-wrap flex-row mx-auto items-center justify-center mt-10" id="hero">
      <div className="relative flex flex-col lg:w-3/5 w-full max-[640px]:mx-auto max-md:ml-5 max-md:-top-40 space-y-7 z-10 md:justify-center md:-top-20 lg:-top-1 lg:space-y-7 lg:tracking-widest">
          <p className="text-rose-400 max-md:whitespace-nowrap max-md:mt-60 z-10 text-xl 
          md:mt-20 md:text-2xl lg:text-xl lg:mt-5">Beyond Cloud Storage</p>
          <p className="mb-6 max-md:font-extrabold max-md:text-5xl bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent z-10 md:w-96 md:h2 lg:w-[500px]">AI POWERED DIGITAL STORER & <span className='lg:whitespace-nowrap'>WORK SPACE</span></p>
          <p className="
          before:content-['Store_,_organize_,_and_discover_your_content_with_intelligent_assistance_that_understands_your_needs_._Let_Ai_guard_&_manage_your_digital_workspace']
          before:text-black

          after:content-['_From_Automatic_organization_to_predictive_file_suggestions_AND_more']
          after:text-rose-500
          z-10
          text-xl

          md:text-4xl
          md:w-80
          md:-right-80
          md:top-32
          md:relative
          tracking-widest

          lg:text-[17px]
          lg:top-0
          lg:left-0
          lg:tracking-tight
          lg:leading-normal
          lg:w-96
          "></p>

          <div className="flex flex-row gap-3 font-medium 
          md:relative md:-top-72 lg:-top-0">
            <button className='border-2 md:border-4 border-blue-500 rounded-full h-10 w-24 z-10 
            md:h-20 md:w-28 md:text-2xl lg:border-2 lg:text-xl lg:h-10 lg:w-28 lg:font-thin'>Free Trial</button>
            <button className='border-2 md:border-4 border-blue-500 rounded-full h-10 w-24 z-10 
            md:h-20 md:w-32 md:text-2xl md:whitespace-nowrap lg:border-2 lg:text-xl lg:h-10 lg:w-28 lg:font-thin'>See Demo</button>
          </div>
      </div>

      <div className="max-lg:absolute hero-img_res mobileXL xl:mt-10 xl:scale-150 xl:mr-28 2xl:mr-20 2xl:scale-110 2xl:mt-8">
        <img
          src='assets/image.png' 
          className='md:scale-150'
        />
      </div>

      <div className='absolute -z-10 xl:top-16 xl:ml-24 xl:h-96 xl:w-96 max-xl:hidden 2xl:top-10'>
        <img
          src='assets/BlueBall22.png'        
        />
      </div>
    </section>
  )
}

export default Hero;

