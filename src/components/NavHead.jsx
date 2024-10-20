import React, { useEffect, useState } from 'react';

const NavHead = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > lastScrollY) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
            setIsVisible(true);
        }

        setLastScrollY(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div>
            <nav className={`bg-customSecondaryCyprus p-4 fixed top-0 left-0 w-full shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="container mx-auto flex justify-between items-center ">
                    <div className="text-white font-bold text-lg">
                        LEAF
                    </div>
                    <div className={`w-full md:flex md:items-center md:w-auto`}>
                        <ul className="md:flex md:space-x-6">
                            <li><a href="#" className="block
                text-white
                px-3 pt-2
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:bg-customTertiaryGreen
                hover:before:w-full
                hover:before:opacity-100">Home</a></li>
                            <li><a href="#" className="block
                text-white
                px-3 pt-2
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:bg-customTertiaryGreen
                hover:before:w-full
                hover:before:opacity-100">About</a></li>
                            <li><a href="#" className="block
                text-white
                px-3 pt-2
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:bg-customTertiaryGreen
                hover:before:w-full
                hover:before:opacity-100">Services</a></li>
                            <li><a href="#" className="block
                text-white
                px-3 pt-2
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:bg-customTertiaryGreen
                hover:before:w-full
                hover:before:opacity-100">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <button
                            className="bg-customTertiaryGreen border border-transparent font-bold text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white hover:border-customTertiaryGreen hover:text-customTertiaryGreen">Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
};



export default NavHead;