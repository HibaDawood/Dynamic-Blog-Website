import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center"></nav>
            <header className="container px-4 lg:flex mt-10 4xl:-mt-2 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1
                  style={{
                    fontFamily: "Lobster",
                    fontWeight: 500,
                  }}
                  className="text-3xl lg:text-5xl font-bold 4xl:text-6xl tracking-wide"
                >
                  Techno Blogs: Revolutionizing the{" "}
                  <span className="text-myLightPr">future </span>
                  with precision and innovation
                </h1>
                <div className="w-20 4xl:w-40 h-2 bg-myLightPr my-4" />
                <p
                  style={{
                    fontFamily: "Saira",
                    fontWeight: 500,
                  }}
                  className="text-xl mb-10 4xl:text-2xl tracking-tight"
                >
                  Techno Blogs: Shaping the future with precision engineering
                  and AI innovation. Empowering industries with cutting-edge
                  technology and intelligent solutions.
                </p>
                <a
                  style={{
                    fontFamily: "Saira",
                    fontWeight: 500,
                  }}
                  href="/Blogs"
                  className="bg-myLightPr tracking-tight hover:bg-myDarkPr text-white text-xl font-medium
                   px-3 py-1 rounded shadow 4xl:px-6 4xl:py-4"
                >
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
          className="w-full lg:h-[550px] md:h-[480px] sm:h-screen sm:w-4/12"
        />
      </div>
    </div>
  );
};

export default Hero;
