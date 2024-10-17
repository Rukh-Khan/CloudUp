import { AlertCircle, ArrowUpRightFromCircleIcon, CheckCircle } from "lucide-react";
import { pricing} from "../constants";
import { useState } from "react";
import CountUp from "react-countup";
import clsx from "clsx";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleOnClick = () => {
    if (isMonthly) {

    }
  }
  return (
    <section id="pricing"> 
      <div className="max-container min-h-screen max-md:mt-20 lg:mt-20 max-sm:p-1">
        <div className='text-center flex flex-col justify-center gap-2'>
            <h1 className='h1 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent uppercase'>Pricing</h1>
            <p className='h3 lg:h1'>Your <span className='blue-highlight-with-line max-md:pb-[0.3em]'> All-in-One</span> AI Storage Solution: Boost Productivity by 27%</p>

            <div className='relative flex flex-row max-md:w-4/5 mx-auto mt-10 gap-2 mb-2 border-4 border-black rounded-xl h-16'>
              <button className={clsx('month_btn', isMonthly && "font-bold text-white")} onClick={() => setIsMonthly(true)}>Monthly</button>
              <button className={clsx('month_btn', !isMonthly && "font-bold text-white")}onClick={() => setIsMonthly(false)}>Annual</button>
              <div
                className={clsx(
                  "slide_month_btn",
                  !isMonthly && "translate-x-full",
                )}
              />
            </div>
        </div>

        <div className='grid xl:grid-cols-3 grid-cols-1 mx-auto mt-10 max-lg:m-2 max-lg:p-2'>
          {
            pricing.map((item) => (
              <div>
                  <div className="lg:min-h-96 lg:w-4/5 lg:m-1 w-full m-2 text-white bg-gradient-to-r from-blue-400 to-black max-md:mx-auto rounded-3xl text-center col-span-1 lg:relative left-10">

                    <p className='text-2xl font-bold text-rose-400'>{item.title}</p>
                    <p className='h1-small'>$ <CountUp 
                    start={0} 
                    end={isMonthly ? `${item.priceMonthly}` : `${item.priceYearly}`}
                    duration={0.6}
                    useEasing={false}
                    preserveValue
                    decimals={2 }
                    />
                      <sup> /mo</sup>
                    </p>
                    {item.id === 2 && <p className='text-white text-2xl'>Most Popular</p>}
                    <hr className='bg-blue-700 h-1 shadow-md shadow-rose-400'></hr>
                    <ul className="flex flex-col space-y-5 mx-5">
                        {
                            item.features.map((feature) => (
                              <li className="inline-flex items-center gap-5 mt-10 body-1 text-white">
                                <CheckCircle/>
                                <p>{feature}</p>
                              </li>
                            ))
                        }                       
                    </ul>

                    <div className="inline-flex items-center gap-3 max-lg:mb-4 lg:mb-2 mt-10 border-2 md:mx-4 p-2 justify-center">
                      <button className="text-xl font-bold">Choose The Plan</button>
                      <ArrowUpRightFromCircleIcon/>
                    </div>
                  </div>
              </div>
            ))
          }
          </div>
        </div>
    </section>
  )
}

export default Pricing;