import {socials} from "../constants";
const Footer = () => { 
  return (
    <footer className='relative bg-gradient-to-r from-gray-100 to-blue-100'>
        <div className=" max-container min-h-screen lg:mt-20 xl:mt-0 z-10">
            <div className='flex max-lg:flex-col flex-row justify-center items-center'>
                <div className="bg-[url('../../assets/heroFolder.png')] max-lg:bg-cover bg-center bg-contain bg-no-repeat min-h-screen w-full relative xl:-left-72 2xl:-left-80 z-10">
                    <div className='relative flex flex-row justify-center items-center font-bold opacity-60 footer_txt'>
                        <p>© Copyright CloudUp, LLC. </p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>

                    <div className='relative min-h-screen w-1/2 max-lg:mx-auto xl:left-[60em] 2xl:left-[66em] xl:bg-blue-400 2xl:bg-inherit'>
                        <div className='flex flex-col justify-center items-center relative top-40'>
                            <div className='relative flex flex-col justify-center items-center max-md:-top-48 md:gap-4 md:scale-150 lg:scale-110'>
                                <p className='h1'>Subscribe</p>
                                <p className='body-1 lg:max-w-xs w-80 lg:ml-12 mt-2 max-lg:ml-12'>Sign up to our newsletter for features updates and our underlying love.</p>
                                <input type="text" placeholder="Email Address" className='border-2 border-blue-400 p-2 m-2 mr-48 lg:mr-20 mt-4 rounded-3xl max-lg:w-72 lg:w-96 h-12 ml-48 max-lg:rotate-1'/>
                            </div>
                            <div className="flex justify-center items-center gap-1 md:gap-10 lg:gap-5 max-md:mt-[10em] md:justify-end md:mt-[26em] md:mx-auto lg:ml-44 2xl:ml-56 xl:mt-[17em] 2xl:mt-[10em]">
                                {
                                    socials.map((item) => (
                                        <a href="/" className="hover:scale-110 transition ease-out duration-500">
                                            <img src={item}/> 
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;