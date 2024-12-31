import React from "react";
import Image from "next/image";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import CommentSection from "@/app/Components/CommentSection";

const Post2 = () => {
  return (
    <div className="xs:mx-4 sm:mx-8 md:mx-16 l:mx-72 ">
      {/* Post 1 */}
      <h1
        style={{
          fontFamily: "Lobster",
          fontWeight: 500,
        }}
        className="text-5xl tracking-wide font-semibold text-myDarkestPr text-center mt-8"
      >
        AI in Space: Transforming Exploration
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
        src={"/picture/card5.png"}
        alt="AI in space"
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
        Artificial Intelligence (AI) is a game-changer in space exploration,
        enabling missions to go further and achieve more. <br />
        <br />
        📌Autonomous Navigation: AI powers spacecraft and rovers to make
        real-time decisions, crucial for navigating distant planets and moons.{" "}
        <br />
        📌Data Processing: AI analyzes vast amounts of data from telescopes and
        sensors, uncovering insights faster than human capability. <br />
        📌Satellite Management: AI ensures efficient satellite operations, from
        orbit adjustments to debris avoidance. <br />
        📌Search for Life: AI scans signals from space to identify potential
        signs of extraterrestrial life. <br />
        AI is revolutionizing how we explore the cosmos, unlocking new
        possibilities in the quest to understand the universe.
      </p>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Post2;
