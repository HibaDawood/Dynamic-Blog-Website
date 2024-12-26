import React from 'react';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

const Blogs = () => {
  return (
    <div>
        <section className="text-myDarkestPr body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 hover:shadow-2xl rounded-lg overflow-hidden shadow-xl border-purple-300">
         <Image
         src={"/picture/card1.png"}
         alt='AI in Medical Field'
         width={720}
         height={400}
         className='lg:h-48 md:h-36 w-full object-center'
         />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-myDarkestPr mb-3 -mt-1">
                AI in Medical Field
            </h2>
            
            <p className="leading-relaxed mb-10 line-clamp-3 font-medium">
            AI revolutionizes the medical field by enhancing diagnostics, personalizing treatments, 
            and accelerating research.
            </p>
            <div className="flex items-center flex-wrap ">
              <a
              href='/Blogs/Post1'
              className="text-myLightPr inline-flex items-center md:mb-2 lg:mb-0 font-medium
               hover:text-myDarkPr
              cursor-pointer">
                Learn More
                <span className='pl-2 text-lg'>
                <IoArrowForward /></span>
              </a>
              <span className="text-myDarkPr cursor-pointer mr-3 inline-flex items-center lg:ml-auto md:ml-0 
              ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-myDarkestPr hover:text-myDarkestPr">
                <span className='text-base pr-1'>
                <FaEye />
                </span>
                1.2K
              </span>
              <span className="text-myDarkPr hover:text-myDarkestPr inline-flex items-center leading-none text-sm">
              <span className='text-base pr-1'>
              <FiMessageCircle />
              </span>
                12
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 hover:shadow-2xl rounded-lg overflow-hidden shadow-xl border-purple-300">
        <Image
         src={"/picture/card2.png"}
         alt='AI in Agricultral Field'
         width={720}
         height={400}
         className='lg:h-48 md:h-36 w-full object-center'
         />
          <div className="p-6">
          <h2 className="text-2xl font-semibold text-myDarkestPr mb-3 -mt-1">
              AI in Agricultral Field
            </h2>
            
            <p className="leading-relaxed mb-10 line-clamp-3 font-medium">
            AI in the agricultural field enhances crop monitoring, precision farming, and resource
             optimization for improved productivity.
            </p>
            <div className="flex items-center flex-wrap ">
              <a 
               href='/Blogs/Post2'
              className="text-myLightPr inline-flex items-center md:mb-2 lg:mb-0 font-medium hover:text-myDarkPr
              cursor-pointer">
                Learn More
                <span className='pl-2 text-lg'>
                <IoArrowForward /></span>
              </a>
              <span className="text-myDarkPr cursor-pointer mr-3 inline-flex items-center lg:ml-auto md:ml-0 
              ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-myDarkestPr hover:text-myDarkestPr">
                 <span className='text-base pr-1'>
                <FaEye />
                </span>
                1.7K
              </span>
              <span className="text-myDarkPr hover:text-myDarkestPr inline-flex items-center leading-none text-sm">
              <span className='text-base pr-1'>
              <FiMessageCircle />
              </span>
                70
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 shadow-xl border-purple-300 rounded-lg overflow-hidden hover:shadow-2xl">
        <Image
         src={"/picture/card3.png"}
         alt='AI in Building Proects'
         width={720}
         height={400}
         className='lg:h-48 md:h-36 w-full object-center'
         />
          <div className="p-6">
          <h2 className="text-2xl font-semibold text-myDarkestPr mb-3 -mt-1">
          AI in Project Development
            </h2>
            
            <p className="leading-relaxed mb-10 line-clamp-3 font-medium">
            AI in project development streamlines planning, automates workflows, and improves 
            decision-making for efficient project execution.
            </p>
            <div className="flex items-center flex-wrap ">
              <a
              href='/Blogs/Post3'
              className="text-myLightPr inline-flex items-center md:mb-2 lg:mb-0 font-medium hover:text-myDarkPr
              cursor-pointer">
                Learn More
                <span className='pl-2 text-lg'>
                <IoArrowForward /></span>
              </a>
              <span className="text-myDarkPr cursor-pointer mr-3 inline-flex items-center lg:ml-auto md:ml-0 
              ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-myDarkestPr hover:text-myDarkestPr">
                 <span className='text-base pr-1'>
                <FaEye />
                </span>
                2K
              </span>
              <span className="text-myDarkPr hover:text-myDarkestPr inline-flex items-center leading-none text-sm">
              <span className='text-base pr-1'>
              <FiMessageCircle />
              </span>
                30
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Blogs