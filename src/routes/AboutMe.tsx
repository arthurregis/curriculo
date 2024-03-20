import Header from "../components/Header";
import '../index.css'

import htmlImage from '../assets/aboutme-img/html.png'
import css from '../assets/aboutme-img/CSS.png'
import js from '../assets/aboutme-img/js.png'
import ts from '../assets/aboutme-img/TS.png'
import react from '../assets/aboutme-img/react.png'
import tailwind from '../assets/aboutme-img/Tailwind.png'

import { GoDash } from "react-icons/go";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageInfo {
    url: string;
    alt: string;
}

const AboutMe = () => {

    const images: ImageInfo[] = [
        { url: htmlImage, alt: 'html-5' },
        { url: css, alt: 'css' },
        { url: js, alt: 'javascript' },
        { url: ts, alt: 'typeScript' },
        { url: react, alt: 'react' },
        { url: tailwind, alt: 'tailwind' },
    ];

    return (
        <div className="w-full p-6 min-h-screen bg-texture md:px-16 xl:px-28">
            <div className="flex justify-between">
                <div className="flex items-center h-[2rem]">
                    <GoDash className=" text-white overflow-hidden" size={60} />
                    <h2 className="text-white text-2xl">About Me</h2>
                </div>
                <Header />
            </div>
            <div className="flex flex-col gap-14 pt-10 justify-center items-center md:pt-12 md:gap-10 xl:pt-16 xl:gap-14">
                <div className="text-center text-white text-lg md:text-xl xl:text-2xl">
                    <h3>
                        My name is Arthur Oliveira, I'm 24 years old and I studied Software Engineering at the Federal University of Ceará for 4 years. During my undergraduate studies, I was a scholarship holder under the course coordinator for 1 year, where I organized lectures, discussion groups, and events related to the technology field. I'm passionate about technology and I study web development daily. I have a good knowledge of HTML, CSS, JavaScript, React, and Tailwind CSS, and I've already developed projects using these technologies. Currently, I'm learning TypeScript, Vue.js, and Angular, and I'm also exploring database concepts, agile development, and software engineering. I have plans to expand my knowledge to include backend languages like Node.js in the future. I'm always seeking to improve and acquire new skills to tackle new challenges in the technology field.
                    </h3>
                </div>

                <div className="w-64 md:w-[40rem] lg:w-[50rem]">
                    <Swiper

                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={40}
                        navigation
                        autoplay
                    >
                        {images.map((imageUrl, index) => (
                            <SwiperSlide
                                className="p-10 lg:p-14"
                                key={index}>
                                <img className="rounded object-cover" src={imageUrl.url} alt={imageUrl.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;