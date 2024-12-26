import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div>
        <div className="flex flex-wrap">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          
         
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-3xl lg:text-5xl font-bold">
            Techno Turning: Revolutionizing the  <span className="text-myLightPr">future </span>
              with precision and innovation
            
           
            </h1>
            <div className="w-20 h-2 bg-myLightPr my-4" />
            <p className="text-xl mb-10">
            Techno Turning: Shaping the future with precision engineering and AI innovation.
            Empowering industries with cutting-edge technology and intelligent solutions.
            </p>
            <a
             href='/Blogs'
            className="bg-myLightPr hover:bg-myDarkPr text-white text-2xl font-medium px-4 py-2 rounded shadow">
              Learn More
            </a>
          </div>
        </header>
      </div>
    </div>
    <Image
      src={"/picture/image.png"}
      alt="Hero Image"
      width={600}
      height={400}
      className="w-full lg:h-[600px] sm:h-screen sm:w-4/12"
    />
  </div>
  </div>
  )
}

export default Hero


