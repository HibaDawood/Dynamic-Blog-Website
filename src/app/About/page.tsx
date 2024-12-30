import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div
        id="about"
        className="relative bg-[#faeffc] overflow-hidden md:-mt-1 mt-14 mb-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-[#faeffc] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-[#faeffc] transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="pt-1" />
            <main className="xs:-mt-3 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left xs:text-center">
                <h2
                  style={{
                    fontFamily: "Lobster",
                    fontWeight: 500,
                  }}
                  className="mb-3 tracking-wide md:mb-4 mt-4 lg:text-6xl font-bold text-myDarkestPr sm:text-3xl md:text-5xl"
                >
                  About Us
                </h2>
                <div className="w-32 h-1 mb-3 lg:ml-1 md:mb-4 xs:mx-auto bg-myDarkPr rounded-xl"></div>
                <p
                  style={{
                    fontFamily: "Saira",
                    fontWeight: 500,
                  }}
                  className="lg: mr-20 text-lg text-myDarkestPr tracking-wide xs:text-center lg:text-left xs:mx-auto"
                >
                  At AI Blogs, we strive to deliver insightful, engaging, and
                  forward-thinking content about the evolving world of
                  artificial intelligence. From breakthrough innovations to
                  practical applications, our goal is to inspire and inform,
                  bridging the gap between technology and creativity. Join us as
                  we explore the endless possibilities of AI, sharing knowledge
                  that shapes the future.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:mt-4  lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={"/picture/about1.png"}
            alt="About Image"
            width={700}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
