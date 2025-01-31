import React from 'react'
import Button1 from '../../assets/Button/Button1'

function About() {
    return (
        <div id='about' className="relative font-saira flex flex-col md:flex-row min-h-screen  justify-around items-center py-14 md:py-8 bg-[#030303]">
            {/* "About Me" Title */}
            <h1 className="text-center text-[2rem] sm:text-[2.9rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.7rem] 2xl:text-[3.9rem] 
                   text-blue-700 font-bold md:rotate-90 w-max">
                About Me
            </h1>

            {/* Info Section */}
            <div className="flex flex-col pl-3 justify-center items-center md:items-start gap-3 md:gap-4 w-full flex-1 pt-10 xsm:pt-16 md:pt-3">
                <h1 className="text-white text-2xl md:text-4xl font-bold ">Mahmood Ahmad</h1>
                <h1 className="text-white text-2xl md:text-4xl font-bold ">20 Years Old</h1>
                <h1 className="text-white text-xl md:text-3xl font-bold">
                    From: <span className="text-blue-700">Lahore, Pakistan</span>
                </h1>

                <p className="text-white text-xl md:text-2xl font-bold text-center md:text-start pt-4">
                    A passionate <span className='text-blue-700 font-shadows'> Android Developer</span> with expertise in building modern, high-performing applications.
                </p>

                {/* Skills Section */}
                <div className="flex flex-col items-center md:items-start pt-4">
                    <h3 className="text-white border-b-2 text-2xl font-bold pb-2">Technical Skills:</h3>
                    <ul className=" flex flex-wrap items-center justify-center md:justify-start md:items-start gap-4 pt-4">
                        <li><Button1 txt="Kotlin" hide="block" /></li>
                        <li><Button1 txt="Java" hide="block" /></li>
                        <li><Button1 txt="Jetpack Compose" hide="block" /></li>
                        <li><Button1 txt="XML" hide="block" /></li>
                        <li><Button1 txt="Firebase" hide="block" /></li>
                        <li><Button1 txt="API Integration" hide="block" /></li>
                        <li><Button1 txt="Coroutines" hide="block" /></li>
                        <li><Button1 txt="Room Database" hide="block" /></li>
                        <li><Button1 txt="Android Studio" hide="block" /></li>
                        <li><Button1 txt="Dagger Hilt" hide="block" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default About