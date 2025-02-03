import Particle from '../Particle/Particle';
import RotatingDashedBox from '../RotatingDashedBox/RotatingDashedBox';
import Button1 from '../../assets/Button/Button1';
import heroImage from '/hero-image2.png';

function HomePage() {
  const AppsLinks = [
    ["Linkedin", "https://www.linkedin.com/in/mahmood-ahmad-a6a234291"],
    ["Github", "https://github.com/MahmoodAhmad648"],
    ["Instagram", "https://www.instagram.com/mahmoodahmad08"],
  ]
  return (
    <div id='home' className='overflow-hidden '>
      <Particle />
<div className='flex items-center py-30 px-3 lg:px-12 lg:pr-6 xl:pr-16 bg-black'>
      <div className=" flex  md:flex-row w-full lg:w-1/2 flex-col-reverse max-w-screen min-h-screen justify-center md:justify-start items-start md:items-center ">
        <ul className=" pt-10 md:pt-0 md:mt-0  flex w-[80%] xsm:w-[60%] sm:w-[55%] md:w-[7rem] h-8  md:h-[14rem] flex-row md:flex-col gap-2 md:gap-0 justify-between items-center">
          {AppsLinks.map((app, index) => (
            <li
              key={index}
              className="relative pl-3.5 md:pl-4 transform  md:-rotate-90 flex justify-center items-center"
            >
              <RotatingDashedBox />
              <a
                className="font-saira text-white hover:text-blue-500 pl-1.5 transition-colors duration-200"
                href={`${app[1]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {app[0]}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex  md:mt-0 flex-col w-full justify-center items-start md:items-start '>
          <div className='flex flex-col justify-center items-start '>
            <h1 className='text-white  font-bold text-3xl xxsm:text-4xl sm:text-6xl lg:text-6xl font-saira'>
              Mahmood Ahmad
            </h1>
            <h1 className="text-black  text-stroke-white text-2xl xxsm:text-3xl sm:text-5xl lg:text-5xl font-bold font-saira">
              Android Developer
            </h1>
            <h2 className="relative mt-4 md:mt-6 w-[max-content] max-w-[52.5rem]  font-saira text-white text-[0.80rem] sm:text-sm  md:text-xl xl:text-2xl  before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
              {`Passionate about building mobile apps that solve problems. ..`}
            </h2>
          </div>
          <div className='flex flex-row gap-3 sm:gap-5 mt-8'>
            <Button1
             txt={"About Me"}
            link={"about"}
            hide='block'
            />
            <Button1 txt={"My Resume"}
            link={"/MahmoodAhmad-Resume.pdf"}
            hide='block'
            />
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex xl:justify-items-end  justify-end items-center h-[75vh] lg:w-10/12 xl:w-11/12 ">
      <img
        src={heroImage}
        alt="Hero Image"
        className="animate-bounce2 h-auto w-8/12 object-cover max-w-[48 0px]  object-center rounded-2xl shadow-lg "
      />
    </div>
    </div>

    </div>
  )
}

export default HomePage