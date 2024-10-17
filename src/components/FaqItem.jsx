import clsx from 'clsx';
import { useState } from 'react';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
const FaqItem = ({item, index}) => {
    const [activeId, setActiveId] = useState(null); 

    const active = activeId === item.id;
    return (
        <div className="group flex cursor-pointer border-2 border-blue-600 rounded-3xl p-4 bg-gradient-to-r from-blue-200 to-blue-400" onClick={() => setActiveId(activeId === item.id ? null : item.id)}>
            <div className='font-bold font-poppins flex-1'>
                <div className='mb-2 w-20 h-20 rounded-full bg-gradient-to-l from-blue-300 to-blue-600 content content-center text-center h3'>
                    {index < 10 ? '0': ''}
                    {index+1}
                </div>
                <div className="que">
                    {item.question}
                        <SlideDown className="max-lg:w-full w-96">
                            {activeId === item.id && (
                            <p className="p-4 text-xl mt-3 font-medium bg-gradient-to-r from-blue-300 to-blue-200 rounded-3xl lg:border-2 lg:border-rose-300 lg:shadow-lg lg:shadow-rose-500">
                                {item.answer}
                            </p>
                            )}
                        </SlideDown>
                    </div>
            </div>

            <div className={clsx("faq-icon relative flex size-12 items-center justify-center rounded-full border-2 shadow-lg shadow-rose-500 transition-all duration-100 group-hover:scale-110", active && "after:rotate-0")}>
                <div className="size-11/12 rounded-full shadow-300 bg-blue-500" />
            </div>
        </div>
    )
}

export default FaqItem;