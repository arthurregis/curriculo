import './index.css'


import { Link } from "react-router-dom";
import imgPerfil from "./assets/Arthur_Regis.jpg"
import curriculo from "./assets/Currículo.pdf"

import { IoIosArrowForward } from "react-icons/io";

import { FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Header from "./components/Header.jsx"


function App() {

  return (
    <div className="w-full p-6 min-h-screen md:px-16 xl:px-28 bg-texture">
      <Header />

      <main className='w-full'>

        <div className='flex flex-col pt-8 gap-0 text-white-ice items-center md:flex-row md:justify-between md:pt-12 '>

          <section className='flex md:order-2 md:justify-center items-center md:flex-col md:gap-[4.8rem] lg:gap-[3.62rem] xl:gap-[1.6rem]'>
            <div className='w-60 h-60 rounded-full overflow-hidden shadow-2xl shadow-purple-bg-light md:w-[17rem] md:h-[17rem] lg:w-80 lg:h-80 xl:w-[26rem] xl:h-[26rem]'>
              <img className='w-full h-full object-cover' src={imgPerfil} alt="foto de perfil" />
            </div>
            <Link to="/contacts" className='flex justify-center items-center gap-2 bg-button-bg rounded-xl w-60 h-10 cursor-pointer hover:scale-105 duration-200 hover:bg-purple-bg-light active:bg-button-bg max-md:hidden xl:h-14'>
              <button className='text-lg xl:text-xl'>Follow me on: </button>
              <FaLinkedin className='w-6 h-6' />
              <FaGithub className='w-6 h-6' />
            </Link>
          </section>

          <section className='flex flex-col'>
            <div className='text-lg text-center p-5 md:text-left md:p-0 md:pb-4 lg:text-2xl xl:text-3xl'>
              <p>Hi, I'm</p>
              <p>Arthur Régis</p>
            </div>

            <div className='flex gap-2 justify-center text-2xl pb-5 text-center md:flex-col md:text-left md:justify-start md:text-5xl lg:text-7xl xl:text-8xl'>
              <h1 className=''>Developer</h1>
              <h1 className=''>Front End</h1>
            </div>

            <div className='text-center text-lg pb-5 md:text-left md:w-80 lg:text-2xl lg:w-[30rem] xl:text-3xl xl:w-[37rem] md:pb-[4.5rem] lg:pb-8'>
              <p>Passionate and dedicated technology enthusiast, always seeking challenges and opportunities for learning and growth.</p>
            </div>

            <div className='flex justify-between max-md:hidden'>
              <Link to="mailto:arthurregiswork@gmail.com" className='flex justify-center items-center gap-2 bg-button-bg rounded-xl w-32 h-10 cursor-pointer hover:scale-105 duration-200 hover:bg-purple-bg-light active:bg-button-bg xl:h-14'>
                <button className='text-lg xl:text-xl'>Lets Talk</button>
                <IoIosArrowForward className='w-6 h-6' />
              </Link>
              <a href={curriculo} download className='flex justify-center items-center gap-2 bg-button-bg rounded-xl w-40 h-10 cursor-pointer hover:scale-105 duration-200 hover:bg-purple-bg-light active:bg-button-bg xl:h-14 lg:w-44'>
                <button className='text-lg xl:text-xl'>Download CV</button>
                <FiDownload className='w-6 h-6' />
              </a>
            </div>
          </section>
        </div>

        {/* MOBILE */}
        <section className='flex flex-col justify-between items-center gap-8 text-white-ice md:hidden'>
          <Link to="mailto:arthurregiswork@gmail.com" className='flex justify-center items-center gap-2  bg-button-bg rounded-xl w-60 h-10 cursor-pointer active:bg-purple-bg-light'>
            <button className='text-lg'>Lets Talk</button>
            <IoIosArrowForward className='w-6 h-6' />
          </Link>

          <a href={curriculo} download className='flex justify-center items-center gap-2 bg-button-bg rounded-xl w-60 h-10 cursor-pointer active:bg-purple-bg-light'>
            <button className='text-lg'>Download CV</button>
            <FiDownload className='w-6 h-6' />
          </a>

          <Link to="/contacts" className='flex justify-center items-center gap-2 bg-button-bg rounded-xl w-60 h-10 cursor-pointer active:bg-purple-bg-light'>

              <button className='text-lg'>Follow me on: </button>
              <FaLinkedin className='w-6 h-6' />
              <FaGithub className='w-6 h-6' />

          </Link>
        </section>
      </main>
    </div>
  )
}

export default App;
