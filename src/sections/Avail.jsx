import {logo} from "../constants";
const Avail = () => { 
  return (
    <section className="xl:bg-gradient-to-r from-gray-100 to-blue-100">
        <div className="relative max-container min-h-screen max-md:mt-40 md:mt-20 xl:mt-0">
            <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                <div className='ml-10 space-y-4'>
                    <div className='inline-flex items-center gap-4'>
                        <img src='assets/cloudDruIco.png' width={50} height={55} alt="CloudUp"/>
                        <p className="h3 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">CloudUp</p>
                    </div>
                    <p className="body-1 mb-10 max-w-xs">
                        Try it now for free on iOS, Android, PC, Web - whatever your
                        flavor, we've got you covered.
                    </p>

                    <div className="flex flex-row max-sm:gap-5 gap-8">
                        {
                            logo.map((item, index) => (
                                <img key={index} src={item} width={50} height={55}/>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-28">
                    <img src='../../assets/BigPic.PNG' className='w-full border-l-2 lg:rounded-3xl xl:mt-28 2xl:mt-20 relative xl:top-4 xl:-right-20'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Avail;