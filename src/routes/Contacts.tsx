import "../index.css"

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoDash } from "react-icons/go";

import Header from "../components/Header";


function Contacts() {
    return (
        <div className="w-full p-6 min-h-screen bg-texture md:px-16 xl:px-28">
            <div className="flex justify-between pb-16 md:pb-14 lg:pb-20">
                <div className="flex items-center h-[2rem]">
                    <GoDash className=" text-white overflow-hidden" size={60}/>
                    <h2 className="text-white text-2xl">Contacts</h2>
                </div>
                
                <Header />
            </div>
            <div className="flex flex-col gap-16 items-center md:gap-12 lg:gap-16 xl:gap-20">
                <div className="xl:w-[70rem]">
                    <h3 className="text-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        "Let's have a chat! I'm eagerly waiting to exchange ideas, explore new possibilities, and grow together. Whether you're envisioning an innovative project or seeking to turn your aspirations into reality, I'm here to listen, brainstorm, and make it happen. You can find me at:"
                    </h3>
                </div>
                <div className="flex flex-col gap-4 text-white">
                    <div className="flex items-center gap-2">
                        <a
                            href="https://www.linkedin.com/in/arthur-oliveira-developer/"
                            target="_blank">
                            <FaLinkedin
                                className="w-12 h-12 cursor-pointer md:w-14 md:h-14 xl:w-[4rem] xl:h-[4rem]" />
                        </a>

                        <a
                            className="text-[18px] underline cursor-pointer md:text-xl lg:text-2xl xl:text-3xl"
                            href="https://www.linkedin.com/in/arthur-oliveira-developer/"
                            target="_blank"
                        >
                            linkedin.com/in/arthur-oliveira-developer/
                        </a>

                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/arthurregis"
                            target="_blank">
                            <FaGithub
                                className="w-12 h-12 cursor-pointer md:w-14 md:h-14 xl:w-[4rem] xl:h-[4rem]" />
                        </a>

                        <a
                            className="text-[18px] underline cursor-pointer md:text-xl lg:text-2xl xl:text-3xl"
                            href="https://github.com/arthurregis"
                            target="_blank"
                        >
                            github.com/arthurregis
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href="mailto:arthurregiswork@gmail.com"
                            target="_blank">
                            <MdOutlineMail
                                className="w-12 h-12 cursor-pointer md:w-14 md:h-14 xl:w-[4rem] xl:h-[4rem]" />
                        </a>

                        <a
                            className="text-[18px] underline cursor-pointer md:text-xl lg:text-2xl xl:text-3xl"
                            href="mailto:arthurregiswork@gmail.com"
                            target="_blank"
                        >
                            arthurregiswork@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;