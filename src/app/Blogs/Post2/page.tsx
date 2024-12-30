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
        AI in Agriculture: Revolutionizing the Way We Grow
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
        22/12/2024
      </div>
      <Image
        src={"/picture/card2.png"}
        alt="AI in Agricultral Field"
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
        Agriculture the backbone of many economies, is undergoing a profound
        transformation thanks to Artificial Intelligence (AI). As global
        challenges like climate change, population growth, and food security
        intensify, AI is stepping in to revolutionize the way we grow, manage,
        and harvest crops.Precision Farming AI enables farmers to make
        data-driven decisions through precision farming. With the help of
        AI-powered drones, sensors, and satellite imagery, farmers can monitor
        soil health, moisture levels, and crop conditions in real-time. <br />{" "}
        This ensures optimal use of resources like water, fertilizers, and
        pesticides, reducing waste and increasing yields.Pest and Disease
        Control AI algorithms can identify pests and diseases early by analyzing
        images of crops. Smart systems recommend targeted interventions,
        minimizing crop loss and reducing the environmental impact of excessive
        pesticide use. <br />
        <br /> Predictive Analytics Weather patterns are unpredictable, but
        AI-powered models can forecast them with remarkable accuracy. By
        analyzing historical data and real-time environmental conditions,
        farmers can plan sowing, irrigation, and harvesting schedules to avoid
        adverse weather effects.Autonomous Farming Equipment Self-driving
        tractors and AI-enabled harvesters are making farming more
        efficient.Sustainable Practices AI supports sustainable agriculture by
        optimizing resource utilization and reducing the carbon footprint.As
        innovations continue, AI will empower farmers worldwide, ensuring food
        security while preserving the planet. Embracing AI is not just an
        option; its the future of farming.
      </p>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Post2;
