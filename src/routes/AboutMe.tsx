import Header from "../components/Header";
import '../index.css'

import htmlImage from '../assets/aboutme-img/html.png'
import css from '../assets/aboutme-img/html.png'
import js from '../assets/aboutme-img/html.png'
import ts from '../assets/aboutme-img/html.png'
import react from '../assets/aboutme-img/html.png'
import tailwind from '../assets/aboutme-img/html.png'

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
                        Me chamo Arthur Oliveira, tenho 24 anos e cursei Engenharia de Software na Universidade Federal do Ceará por 4 anos. Durante minha graduação, fui bolsista da coordenadora do curso por 1 ano, onde organizei palestras, rodas de conversa e eventos relacionados à área da tecnologia.

                        Sou apaixonado por tecnologia e estudo diariamente sobre desenvolvimento web. Tenho um bom conhecimento de HTML, CSS, JavaScript, React e Tailwind CSS, e já desenvolvi projetos utilizando essas tecnologias. Atualmente, estou aprendendo TypeScript, Vue.js e Angular, e também estou explorando conceitos de bancos de dados, desenvolvimento ágil e engenharia de software.

                        Tenho planos de expandir meu conhecimento para incluir linguagens de back-end, como Node.js, no futuro. Estou sempre em busca de me aperfeiçoar e adquirir novas habilidades para enfrentar novos desafios na área de tecnologia.
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