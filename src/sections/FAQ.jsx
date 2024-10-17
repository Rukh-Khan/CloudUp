import FaqItem from '../components/FaqItem';
import {faq} from '../constants';

const FAQ = () => { 
    const halfLength = Math.floor(faq.length / 2);
    return (
        <section className='xl:bg-gradient-to-r from-gray-100 to-blue-100 p-2' id="faq">
            <div className='max-container min-h-screen max-lg:mt-20 lg:my-20'>
                <div className='text-center flex justify-center md:mb-10'>
                    <h1 className='h1 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent uppercase'>FAQs</h1>
                </div>

                <div className='flex max-lg:flex-col lg:gap-20 gap-5 container xl:justify-between'>
                    <div className='flex gap-3 flex-col lg:pt-16 space-y-4'>
                        {
                            faq.slice(0, halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={index}/>
                            ))
                        }
                    </div>

                    <div className='flex gap-3 flex-col lg:pt-16 space-y-4'>
                        {
                            faq.slice(halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={halfLength+index}/>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ;