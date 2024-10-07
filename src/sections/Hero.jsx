import React from 'react';

const Hero = () => {
  return (
    <section className="h-[90vh] max-container overflow-hidden flex-row flex relative mx-auto bg-gradient-to-l from-blue-100 to-gray-100" id="hero">

      <div className='relative ml-14 flex flex-col items-center justify-center w-1/2'>
        <div className='p-8 flex flex-col'>
          <p className="small-2 text-rose-400 ml-4 mb-4">Beyond Cloud Storage</p>
          <p className=" h1 mb-6 uppercase bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">AI-Powered Digital Storage</p>
          {/* <p className="body-1 text-black">❝ Let AI transform how you manage your digital world - From Automatic Organization to Predictive File Suggestions ❞
          </p> */}

          <p className="
          before:content-['Let_AI_transform_how_you_manage_your_digital_world']
          before:text-black

          after:content-['_From_automatic_organization_to_predictive_file_suggestions']
          after:text-rose-400
          text-xl
          tracking-wide
          "></p>

          <div className='flex flex-row gap-3 mt-7'>
            <button className='border-2  border-blue-600 rounded-3xl w-72 h-12'>Free Trial for 30 days</button> 
            <button className='border-2  border-blue-600 rounded-3xl w-72 h-12'>See Demo</button>
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 bg-no-repeat bg-right-top rounded-3xl scale-img_lg"
        style={{
          backgroundImage: 'url(assets/image.png)',
          backgroundSize: 'auto 100%',
        }}
      >
        <div className='relative inset-0 bg-no-repeat left-[690px] top-24 h-60 w-60' style={{backgroundImage: 'url(assets/BlueBall22.png)', backgroundSize: 'auto 100%'}}></div>
      </div>
    </section>
  )
}

export default Hero;

