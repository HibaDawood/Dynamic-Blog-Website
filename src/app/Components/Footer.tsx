import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { GiTechnoHeart } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
        <footer>
  <div className="bg-myLightPr py-4 text-myWhite">
    <div className="container px-4 mx-auto">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 my-4 w-full xl:w-1/5">
          <a href="/" className="w-56 mb-5 flex">
          <span className='text-4xl'>
            <GiTechnoHeart /></span>
            <h1 className='pl-2 text-2xl tracking-tight font-medium border-b-4 pb-4 border-myDarkestPr'>
            Techno Turning
            </h1>
            
          </a>
          <p className="text-justify">
          The AI Revolution is reshaping industries, driving innovation, and transforming our daily lives. 
          From personalized experiences to groundbreaking technologies, AI is the engine behind modern progress.
          </p>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-myDarkestPr">
              links
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <a href="#" className="hover:text-myDarkestPr">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-myDarkestPr">
                blogs
              </a>
            </li>
          
            <li>
              <a href="#" className="hover:text-myDarkestPr">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-myDarkestPr">
              FAQ
            </h2>
          </div>
          <ul className="leading-8">
            <li>
              <a href="#" className="hover:text-myDarkestPr">
            What is Artificial Intelligence (AI)?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-myDarkestPr">
              How is AI transforming industries?

              </a>
            </li>
            <li>
              <a href="#" className="hover:text-myDarkestPr">
              What are some examples of AI in everyday life?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-myDarkestPr">
              What is the role of AI in healthcare?
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-myDarkestPr">
                See More
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
          <div>
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-myDarkestPr">
              Connect With Us
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-myWhite rounded-full mr-1
             hover:text-myDarkestPr hover:border-myDarkestPr"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-myWhite rounded-full mr-1
             hover:text-myDarkestPr hover:border-myDarkestPr"
          >
           <FaTwitter />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-myWhite rounded-full mr-1
             hover:text-myDarkestPr hover:border-myDarkestPr"
          >
           <FaInstagram />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-myWhite rounded-full mr-1
             hover:text-myDarkestPr hover:border-myDarkestPr"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-8 w-8 border border-myWhite rounded-full
             hover:text-myDarkestPr hover:border-myDarkestPr"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-myDarkPr py-4 text-myWhite">
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Copyright © 2024 - 2025 Tailwindow. All Rights Reserved.
        </div>
        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
          Made with ❤️ by Techno Turning.
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer