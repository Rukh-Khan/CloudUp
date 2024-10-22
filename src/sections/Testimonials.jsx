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
        <section className=" bg-[url('../../assets/hillyBack.png')] bg-center bg-cover">
            <div className='relative max-container min-h-screen max-lg:mt-40 lg:mt-20'>
                <div className='text-center justify-center md:mb-10 block space-y-2'>
                    <h1 className='text-5xl font-bold lg:h1 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent uppercase'>Testimonials</h1>
                    <p className='h3'>Words from <span className='blue-highlight-with-line'>Our Fans</span></p>
                </div>

                <div className=' relative flex lg:flex-row flex-col justify-center items-center min-h-screen max-lg:mt-4'>
                    {/* div 1 left and right buttons */}
                    <div className='relative flex flex-row gap-2 max-lg:justify-center lg:left-32'>
                        <button onClick={handleLeftClick}><ArrowLeftCircleIcon className='max-sm:h-16 max-sm:w-16 h-20 w-20'/></button>
                        <button onClick={handleRightClick} className='lg:hidden'><ArrowRightCircleIcon className='max-sm:h-16 max-sm:w-16 h-20 w-20 relative left-0 lg:hidden'/></button>
                    </div>

                    {/* div 2 */}
                    <div className='flex flex-row relative sm:gap-2 max-sm:p-2 lg:-right-[20%] max-md:top-10 md:top-0 overflow-hidden max-lg:w-full'>
                        {
                            testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="transition duration-500 ease-in-out flex-shrink-0 w-full"
                                    style={{transform: `translateX(-${testimonialsIndex * 100}%)`}}
                                >
                                    <div style={{backgroundImage: `url(${item.img})`}} key={index} className="bg-cover z-10 bg-center relative mx-auto max-md:h-60 max-md:w-60 h-80 w-80 rounded-full"/>

                                    <div className="h-2/3 w-[300px] md:h-[320px] sm:w-[500px] border-2 border-black relative bottom-20 rounded-3xl max-md:mx-auto md:left-[26%] lg:left-[12%] xl:left-[28%] 2xl:left-[31%] text-center" >
                                            <h4 className="body-1 mb-0.5 mt-20">{item.name}</h4>
                                            <p className="uppercase max-sm:text-xs">{item.role}</p>
                                            <p className="body-1 mt-2">❝ {item.text} ❞</p>
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