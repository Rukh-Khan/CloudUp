import { socials } from "../constants";

const Footer = () => {
    return (
        <footer>
            <div className="container py-10">
                <div className="flex w-full max-md:flex-col max-lg:gap-2">
                    <div className="min-md:text-xs lg:text-xl flex flex-1 flex-wrap items-center justify-center">
                        <p className="opacity-70">© Copyright, CloudUp 2024</p>
                    </div>
                    <div className="min-md:text-xs lg:text-xl flex items-center justify-center sm:ml-auto">
                        <p className="relative mr-9 transition-all duration-500 hover:text-blue-400">
                        Privacy Policy
                        </p>
                        <p className="transition-all duration-500 hover:text-blue-400">
                        Terms of Use
                        </p>
                    </div>

                    <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                        {socials.map((item) => (
                        <li>
                            <a href="/" className="hover:opacity-70">
                            <img
                                src={item}
                                className="size-10 max-lg:size-4/5 object-contain"
                            />
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;