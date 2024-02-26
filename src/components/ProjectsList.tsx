import '../index.css'

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import passGenerate from '../assets/projects-img/passGenerator.png';
import magTattoo from '../assets/projects-img/magtattoo.png';

interface ProjectInfo {
    url: string;
    alt: string;
    description: string;
    github: string;
    view: string;
}

function ProjectsList() {

    const projects: ProjectInfo[] = [
        { url: passGenerate, alt: 'password Generator', description: "The 'Password Generator' project, as the name suggests, is a tool for generating random passwords, allowing you to choose the desired size. This was one of my first projects, developed to practice DOM manipulation with JavaScript. I used pure HTML, CSS, and JavaScript to create this application.", github: "https://github.com/arthurregis/gerador-senhas", view: "#" },
        { url: magTattoo, alt: 'html-5', description: "Landing Page created with ReactJS and Tailwind, highlighting the integration of componentization and React patterns. This solo project not only tested my skills but also aims to serve as the virtual business card for an existing tattoo studio.", github: "https://github.com/arthurregis/landing-page-mag-tattoo", view: "https://mag-tattoo-studio.vercel.app/" },
    ];

    return (
        <div>
            <Swiper
                spaceBetween={10}
                modules={[Navigation]}
                navigation
                autoplay
            >
                {projects.map((project, index) => (
                    <SwiperSlide
                        className='px-12'
                        key={index}>
                        <div className="flex flex-col items-center gap-5 text-white">
                            <div className="min-w-60 max-w-[480px] pb-1">
                                <img
                                    className="object-cover rounded-md"
                                    src={project.url}
                                    alt={project.alt} />
                            </div>
                            <div className='flex flex-col gap-8 min-w-64 max-w-[600px]'>
                                <h3 className='text-center md:text-lg lg:text-xl xl:text-2xl'>{project.description}</h3>
                                <div className="flex flex-col justify-between w-full gap-4 md:flex-row">
                                    <Link to={project.github} target="_blank"><button className="flex justify-center items-center gap-2 bg-button-bg active:bg-button-bg hover:bg-purple-bg-light hover:scale-105 duration-200 w-full h-9 rounded-lg lg:cursor-pointer md:w-60 md:text-lg lg:w-56 xl:text-xl">See on GitHub<IoIosArrowForward/><FaGithub className='w-7 h-7'/></button></Link>
                                    <Link to={project.view} target="_blank"><button className="flex justify-center items-center gap-2 bg-button-bg active:bg-button-bg hover:bg-purple-bg-light hover:scale-105 duration-200 w-full h-9 rounded-lg lg:cursor-pointer md:w-24 md:text-lg lg:w-28 xl:text-xl">View<GoArrowUpRight/></button></Link>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProjectsList;