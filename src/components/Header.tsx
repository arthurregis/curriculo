import '../index.css'

import { useState } from 'react';
import { TbMenuDeep } from "react-icons/tb";

import { Link } from "react-router-dom";

const Header = () => {

    {/* Modal Header Navbar */ }
    const [isModalNavOpen, setModalNavOpen] = useState<boolean>(false);

    const modalHandle = ():void => {

        setModalNavOpen(!isModalNavOpen);
    };

    const [clicked, setClicked] = useState<boolean>(false);

    const handleIconClick = ():void => {
        setClicked(!clicked);
    };

    const iconColor:string = clicked ? 'var(--nav-button-color)' : 'white';

    return (
        <header className="flex justify-end">

            <div
                onClick={modalHandle}
                className='flex fixed right-6 justify-end z-20 md:hidden'>

                <TbMenuDeep className='w-8 h-8' onClick={handleIconClick} style={{ color: iconColor }} />

            </div>
            
            {isModalNavOpen && (
            <div className='fixed z-10 w-[7.5rem] rounded-b px-6 pb-4 pt-20 right-0 top-0 text-right bg-purple-bg-light'>
              <ul className="flex flex-col justify-end gap-7 text-white md:flex">
                <Link to="/"><li className='cursor-pointer font-AbrilFatFace active:text-click-active'>Home</li></Link>
                <Link to="/aboutme"><li className='cursor-pointer font-AbrilFatFace active:text-click-active'>About me</li></Link>
                <Link to="/projects"><li className='cursor-pointer font-AbrilFatFace active:text-click-active'>Projects</li></Link>
                <Link to="/contacts"><li className='cursor-pointer font-AbrilFatFace active:text-click-active'>Contacts</li></Link>
              </ul>
            </div>
          )}

            <div className='flex items-center'>
                <ul className="hidden justify-end gap-12 text-white md:flex md:text-lg lg:gap-28 lg:text-xl">
                    <Link to="/"><li className='cursor-pointer font-AbrilFatFace hover:text-purple-bg-dark active:text-click-active'>Home</li></Link>
                    <Link to="/aboutme"><li className='cursor-pointer font-AbrilFatFace hover:text-purple-bg-dark active:text-click-active'>About me</li></Link>                   
                    <Link to="/projects"><li className='cursor-pointer font-AbrilFatFace hover:text-purple-bg-dark active:text-click-active'>Projects</li></Link>
                    <Link to="/contacts"><li className='cursor-pointer font-AbrilFatFace hover:text-purple-bg-dark active:text-click-active'>Contacts</li></Link>
                </ul>
            </div>

        </header>
    )
}

export default Header;