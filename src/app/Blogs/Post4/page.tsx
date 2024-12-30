import React from "react";
import Image from "next/image";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import CommentSection from "@/app/Components/CommentSection";

const Post2 = () => {
  return (
    <div className="mx-72">
      {/* Post 1 */}
      <h1
        style={{
          fontFamily: "Lobster",
          fontWeight: 500,
        }}
        className="text-5xl tracking-wide font-semibold text-myDarkestPr text-center mt-8"
      >
        What is Artificial Intelligence(AI)?
      </h1>
      <div
        style={{
          fontFamily: "Saira",
          fontWeight: 500,
        }}
        className="text-myDarkestPr flex tracking-wide mt-8"
      >
        <span className="text-xl text-myDarkPr pr-2">
          <MdOutlinePersonOutline />
        </span>
        By Anonymous
        <span className="text-xl text-myDarkPr pl-6 pr-2">
          <RxCalendar />
        </span>
        18/12/2024
      </div>
      <Image
        src={"/picture/card4.png"}
        alt="What is Artificial Intelligence(AI)?"
        width={400}
        height={400}
        className="lg:h-80 w-[770px] mx-auto mt-3 mb-10"
      />
      <p
        style={{
          fontFamily: "Saira",
          fontWeight: 500,
        }}
        className="tracking-wide text-balance font-medium text-[18px] mb-10 text-myDarkestPr"
      >
        Artificial Intelligence (AI) is the simulation of human intelligence by
        machines. It enables systems to perform tasks that typically require
        human cognition, such as learning, reasoning, problem-solving, and
        decision-making. <br />
        <br />
        AI comes in various forms, including: <br />
        📌 Machine Learning (ML): Where machines learn from data to make
        predictions or decisions. <br />
        📌Natural Language Processing (NLP): Enabling computers to understand
        and interact using human language. <br />
        📌Computer Vision: Allowing machines to interpret visual data like
        images and videos. <br />
        <br />
        From chatbots and virtual assistants to self-driving cars and medical
        diagnosis systems, AI is transforming industries by making processes
        faster, smarter, and more efficient. In essence, AI is about empowering
        machines to think and act intelligently, making it a cornerstone of
        modern technology.
      </p>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Post2;
