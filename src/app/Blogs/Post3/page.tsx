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
        className="text-5xl font-semibold tracking-wide text-myDarkestPr text-center mt-8"
      >
        AI in Project Development: Transforming Ideas into Reality
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
        src={"/picture/card3.png"}
        alt="AI in Project Development"
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
        AI in Project Development: Transforming Ideas into Reality Artificial
        Intelligence (AI) is reshaping project development across industries by
        streamlining workflows, enhancing decision-making, and improving
        outcomes. Heres how AI is making an impact: <br />
        <br />
        <span className="text-lg font-semibold">1. Efficient Planning</span>
        AI-powered tools analyze data to create detailed project plans, optimize
        timelines, and allocate resources effectively. This ensures projects
        start on a strong foundation. <br />
        <br />
        <span className="text-lg font-semibold">2. Smart Collaboration</span>
        AI enhances communication through tools like chatbots and real-time
        translation, making global collaboration seamless. It also integrates
        with platforms to track progress and resolve issues quickly. <br />
        <br />
        <span className="text-lg font-semibold">3. Predictive Analytics</span>
        AI identifies potential risks by analyzing historical data and project
        trends, helping teams anticipate challenges and implement proactive
        solutions. <br />
        <br />
        <span className="text-lg font-semibold">4. Automation of Tasks </span>
        From automating repetitive tasks to managing schedules and reporting, AI
        allows teams to focus on creative and strategic aspects of the project.{" "}
        <br />
        <br />
        <span className="text-lg font-semibold">
          5. Enhanced Quality Assurance{" "}
        </span>
        AI-driven testing tools detect errors faster and more accurately,
        ensuring high-quality deliverables with minimal manual effort. <br />
        <br />
        <span className="text-lg font-semibold">A Smarter Future </span>
        AI is not just a tool; it is a partner in project development, turning
        ambitious ideas into successful realities with efficiency and precision.
        Embracing AI accelerates innovation and paves the way for smarter, more
        agile projects.
      </p>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Post2;
