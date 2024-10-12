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
    <section className='relative overflow-hidden max-container min-h-screen'>
      <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-10'>
        <div className='relative col-span-1 flex flex-col gap-10 p-2 md:py-1 md:rounded-none'> 
            {
              features.map((item) => (
                <div className='p-5 w-full flex flex-col sm:flex-row justify-center gap-10 items-center border-2 border-rose-200 max-md:rounded-3xl' key={item.id}>
                  <divc className='flex flex-col gap-5 text-2xl'>
                        <div className='inline-flex gap-4 items-center'>
                          <CircleCheck/>
                          <h3 className='font-extrabold text-rose-400 tracking-wide'>{item.title}</h3>
                        </div>
                      
                        <p>→ {item.text}</p>
                        <p>→ {item.line}</p>
                    </divc>
                    <img src={item.img} className='w-96 h-80 object-cover rounded-3xl border-2 border-blue-100 bg-blue-200'/>
                </div>
              ))
            }
        </div>

        <div className='col-span-1'>
          {/* <video src='assets/featuresIMG/cloudVideo.mp4' autoPlay loop muted className='w-full'/> */}
        </div>
      </div>
    </section>
  )
}

export default Feature;