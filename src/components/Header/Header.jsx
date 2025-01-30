import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button1 from "../../assets/Button/Button1"


function Header() {

    const menuItems = [
        ["Home", "home"],
        ["About", "about"],
        ["Projects", "projects"],
        ["Contact", "contact"],
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [logo, setLogo] = useState("48")
    const [isClicked, setIsClicked] = useState(false);

    const toggleTransform = () => {
        setIsClicked(!isClicked)
    };
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsClicked(!isClicked)
    }
    const handleNavigation = () => setIsMenuOpen(false);


    useEffect(() => {




        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false); // Close the menu if screen size is >= 768px
                setIsClicked(false)
                setLogo("56");
            } else {
                setLogo("48");
            }
        };

        // Add event listener for resizing
        window.addEventListener("resize", handleResize);
        // Call the function initially to ensure the menu is closed on page load
        handleResize();

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
            // Clean up event listener on component unmount
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>

            <div className={`w-64  ${isMenuOpen ? "left-0 fixed z-[9999]" : "-left-[30rem] absolute "}  transition-transform duration-700 ease-linear  bg-white top-0 lg:-left-[30rem] h-screen text-blue-700 flex flex-col items-center py-6`}>
                {/* Logo Section */}
                <div className="mb-8 pb-5 px-2 w-full justify-between flex flex-row border-b-2 border-blue-500 items-center space-x-6">

                    <a href="/" className="flex items-center justify-center">
                        {/* Adjust the font size dynamically according to your Name */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="160"
                            height="50"
                            viewBox="0 0 260 98"
                            role="img"
                            className="h-auto w-auto"
                        >
                            <text
                                x="40%"
                                y="54%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fontSize="50"
                                fill="#1d4ed8"
                                fontWeight="bold"
                                className="text-cyan-500 font-saira"
                            >
                                Mahmood
                            </text>
                        </svg>
                    </a>

                    <div className="flex items-center justify-end  h-12 w-full"
                        onClick={handleMenuToggle}
                    >
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="black"
                            transform="rotate(0)">
                            <g id="SVGRepo_iconCarrier"><path fill="#1d4ed8" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#1d4ed8" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                    </div>

                </div>


                {/* Navigation Links */}
                <ul className={`flex flex-col items-start w-full  space-y-2  transform transition-transform duration-700 `}>
                    {menuItems.map(([text, link], index) => (
                        <li key={index} className="w-full">
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={()=> {
                                    setIsMenuOpen(!isMenuOpen)
                                    setIsClicked(!isClicked)
                                }}
                                activeClass="text-blue-700"
                                className={`block w-full border-b-[1px] py-2 px-2 text-base font-semibold transform transition-transform duration-200
    ${scrolled ? "text-black" : "text-black"} 
    ${isMenuOpen ? "translate-y-0" : "translate-y-full"}
    ${index !== menuItems.length - 1 ? "border-black opacity-70" : "border-transparent"}`}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden block mt-10">
                    <Button1
                        className="cursor-none"
                        txt="GitHub"
                        link={"https://github.com/HammadMustafa7"}
                        hide="block"
                    />
                </div>
            </div>
            <header className={`shadow h-[6rem] border-b-2  sm:h-[6rem] font-saira transform transition-transform ease-linear delay-300  cursor-none ${scrolled ? "fixed" : "absolute"} ${isMenuOpen ? "z-0" : "z-50"} box-border w-full  flex justify-between items-center transition ease-in-out  top-0  ${scrolled ? "z-[99]" : "z-0"} ${scrolled ? "bg-black" : "bg-transparent !important "} transition-all ease-in-out delay-200
        `}>

                <nav className="flex justify-between items-center w-full px-2 sm:px-7 md:px-12 lg:px-20 xl:px-28 ">
                    {/* Logo */}
                    <div>
                        <a href="/" className="flex  items-center">
                            {/* Adjust the font size dynamically according to your Name */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="160"
                                height="56"
                                viewBox="0 0 300 100"
                                role="img"
                                className="h-auto w-auto"
                            >
                                <text
                                    x="46%"
                                    y="54%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize={`${logo}px`} // Dynamically set font size
                                    fill="#1d4ed8"
                                    fontWeight="bold"
                                    className="font-saira"
                                >
                                    Mahmood
                                </text>
                            </svg>
                        </a>
                    </div>


                    <div
                        className={"lg:flex  hidden flex-col gap-4  items-center"}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col gap-5  items-center mt-4 font-medium md:flex-row md:space-x-6 md:mt-0">
                            {menuItems.map(([text, link], index) => (
                                <li key={index} className="py-7">
                                    <Link
                                        onClick={handleNavigation}
                                        to={link}
                                        smooth={true}
                                        duration={500}
                                        activeClass="text-blue-700" // Correct way to apply styles when active
                                        className={`block h-full duration-200 text-lg py-4 lg:text-xl border-b border-gray-700
    ${scrolled ? "text-white" : "text-white"} md:hover:bg-transparent md:border-0 hover:text-blue-700`}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex items-center gap-6">
                        <div className="hidden sm:block ">
                            <Button1
                                className="cursor-none "
                                txt="GitHub"
                                link={"https://github.com/HammadMustafa7"}
                                hide="block"
                            />
                        </div>
                        <div
                            className="lg:hidden block w-8 h-8 cursor-none group items-center justify-center rounded-3xl mr-4  p-2"
                            onClick={() => {
                                handleMenuToggle();
                                toggleTransform();
                            }}
                        >


                            <div
                                className={`space-y-1.5 group cursor-none`}
                            >
                                <div className="relative w-8 h-6 flex gap-1 flex-col justify-center">
                                    <span
                                        className={`block h-1 bg-blue-700 transition-all duration-200 ease-in-out rounded-md ${isClicked
                                            ? "w-8 absolute top-1/2 -translate-y-1/2 rotate-45"
                                            : "w-8"
                                            }`}
                                    />
                                    <span
                                        className={`block h-1 bg-white transition-all duration-200 ease-in-out rounded-md ${isClicked
                                            ? "w-8 absolute top-1/2 -translate-y-1/2 -rotate-45"
                                            : "w-6"
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    );
}

export default Header;
