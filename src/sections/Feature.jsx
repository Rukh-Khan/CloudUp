import React from 'react'
import { features } from '../constants';
import { CircleCheckBig } from 'lucide-react';

const CircleCheck = () => {
  return (
    <div className='text-green-500'>
      <CircleCheckBig />
    </div>
  ); 
};

const Feature = () => {
  return (
    <section className='xl:bg-gradient-to-r from-gray-100 to-blue-100' id='features'>
      <div className="relative max-container min-[430px]:-mt-20 md:my-20 max-sm:p-2">
        <div className='text-center flex justify-center md:mb-10'>
          <h1 className='h1 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent uppercase'>Features</h1>
        </div>
        <div className='relative grid grid-cols-2 max-lg:grid-cols-1'>
          <div className='relative col-span-1 flex flex-col gap-10 md:p-2 md:py-1 md:rounded-none mx-auto'> 
              {
                features.map((item) => (
                  <div style={{top: `calc(64px + ${item.id*20}px)`}} className='p-5 bg-gradient-to-l from-blue-200 to-blue-500 w-full flex flex-col sticky sm:flex-row justify-center gap-10 items-center border-2 rounded-3xl' key={item.id}>
                    <div className='flex flex-col gap-5 max-lg:text-2xl lg:text-xl xl:text-2xl'>
                          <div className='inline-flex gap-4 items-center'>
                            <CircleCheck/>
                            <h3 className='text-3xl font-bold text-rose-400 tracking-wide'>{item.title}</h3>
                          </div>
                         
                          <p>→ {item.text}</p>
                          <p>→ {item.line}</p>
                      </div>
                      <img src={item.img} className='w-80 h-80 lg:w-52 lg:h-52 xl:w-80 xl:h-70 2xl:w-96 2xl:h-80 object-cover rounded-3xl border-2 border-blue-100 bg-blue-200'/>
                  </div>
                ))
              }
          </div>

          <div className="col-span-1 p-2 max-lg:hidden">
            <img src='../../assets/uploadYourFolder.png' className='md:sticky md:top-16 pt-16'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;