// const Subscribe = () => { 
//   return (
//     <section className='relative xl:bg-gradient-to-r from-gray-100 to-blue-100'>
//         <div className="container min-h-screen lg:mt-20 xl:mt-0 z-10">
//             <div className='flex flex-col lg:flex-row justify-center items-center'>
//                 <div className="bg-[url('../../assets/heroFolder.png')] max-lg:bg-cover bg-center bg-contain bg-no-repeat min-h-screen w-full relative xl:-left-72 2xl:-left-80 z-10">

//                     <div className='relative min-h-screen w-1/2 max-lg:mx-auto xl:left-[60em] 2xl:left-[66em] xl:bg-inherit mt-20 md:ml-10'>
//                         <div className='flex flex-col justify-center items-center relative top-40'>
//                             <div className='relative flex flex-col justify-center items-center max-md:-top-48 md:gap-4 md:scale-150 lg:scale-110'>
//                                 <p className='h1'>Subscribe</p>
//                                 <p className='body-1 lg:max-w-xs w-80 lg:ml-12 mt-2 max-lg:ml-12'>Sign up to our newsletter for features updates and our underlying love.</p>
//                                 <input type="text" placeholder="Email Address" className='border-2 border-blue-400 p-2 m-2 mr-48 lg:mr-20 mt-4 rounded-3xl max-lg:w-72 lg:w-96 h-12 ml-48 max-lg:rotate-1'/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Subscribe;

import React from 'react';

const Subscribe = () => {
  return (
    <section className='relative bg-gradient-to-r from-gray-100 to-blue-100'>
      <div className="container min-h-screen lg:mt-20 xl:mt-0 z-10">
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
          <div className="max-lg:hidden bg-[url('../../assets/heroFolder.png')] bg-center bg-contain lg:bg-cover bg-no-repeat min-h-screen w-full relative xl:-left-48 z-10"/>

          <div className='w-full lg:w-1/2 mt-20 lg:mt-0 px-4 lg:px-0'>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-center lg:text-left'>
                <h1 className='h1 mb-4 text-blue-500'>Subscribe</h1>
                <p className='body-1 mb-6 max-w-md'>Sign up to our newsletter for features updates and our underlying love.</p>
                <input 
                  type="text" 
                  placeholder="Email Address" 
                  className='border-2 border-blue-400 p-2 rounded-full w-full max-w-md h-12'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;