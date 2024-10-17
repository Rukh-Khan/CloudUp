import { useState } from 'react';
import {testimonials} from '../constants';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';

const Testimonials = () => {

    const testimonialLength = testimonials.length;
    const [testimonialsIndex, setTestimonialsIndex] = useState(0);

    const handleLeftClick = () => {
        setTestimonialsIndex((prevIndex) =>
            prevIndex === 0 ? testimonialLength - 1 : prevIndex -1
        );
    }

    const handleRightClick = () => {
        setTestimonialsIndex((prevIndex) => 
            prevIndex === testimonialLength -1 ? 0 : prevIndex + 1
        );
    }

    return (
        <section className=" bg-[url('assets/hillyBack.png')] bg-center bg-cover">
            <div className='relative max-container min-h-screen max-lg:mt-40 lg:mt-20'>
                <div className='text-center justify-center md:mb-10 block space-y-2'>
                    <h1 className='text-5xl font-bold lg:h1 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent uppercase'>Testimonials</h1>
                    <p className='h3'>Words from <span className='blue-highlight-with-line'>Our Fans</span></p>
                </div>

                <div className=' relative flex flex-row max-lg:flex-col justify-center items-center min-h-screen'>
                    {/* div 1 left and right buttons */}
                    <div className='relative flex flex-row gap-2 max-lg:justify-center max-md:mt-10 lg:top-0 lg:left-72'>
                        <button onClick={handleLeftClick} className='hover:scale-110 transition ease-out duration-500 lg:hidden'><ArrowLeftCircleIcon className='h-20 w-20'/></button>
                        <button onClick={handleRightClick}><ArrowRightCircleIcon className='h-20 w-20 relative left-0'/></button>
                    </div>

                    {/* div 2 */}
                    <div className='flex flex-row relative gap-2 lg:-right-[20%] max-md:top-20 md:top-0 overflow-hidden max-lg:w-full'>
                        {
                            testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="transition duration-500 ease-in-out flex-shrink-0 w-full"
                                    style={{transform: `translateX(-${testimonialsIndex * 100}%)`}}
                                >
                                    <div style={{backgroundImage: `url(${item.img})`}} key={index} className="bg-cover z-10 bg-center relative mx-auto h-80 w-80 rounded-full"/>

                                    <div className="h-full w-full md:h-[420px] md:w-[500px] lg:h-96 lg:w-96 border-2 border-black relative bottom-20 rounded-3xl left-[10%] md:left-[26%] lg:left-[33%] 2xl:left-[37%]" >
                                        <div className="p-2 m-10 mt-20 lg:text-center">
                                            <h4 className="body-1 mb-0.5 text-p1">{item.name}</h4>
                                            <p className="uppercase">{item.role}</p>
                                            <p className="max-lg:text-xl md:font-poppins mt-2 p-2 tracking-widest 2xl:tracking-normal 2xl:text-xl">❝ {item.text} ❞</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;