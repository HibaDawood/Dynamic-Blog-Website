import React from "react";
import Image from "next/image";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import CommentSection from "@/app/Components/CommentSection";

const Post2 = () => {
  return (
    <div className="mx-72">
      {/* Post 1 */}
      <h1 className="text-5xl font-semibold text-myDarkestPr text-center mt-8">
      AI in Arts: Transforming Creativity
      </h1>
      <div className="text-myDarkestPr flex tracking-wide mt-8">
        <span className="text-xl text-myDarkPr pr-2">
          <MdOutlinePersonOutline />
        </span>
        By Anonymous
        <span className="text-xl text-myDarkPr pl-6 pr-2">
          <RxCalendar />
        </span>
        20/12/2024
      </div>
      <Image
        src={"/picture/card6.png"}
        alt="AI in Agricultral Field"
        width={400}
        height={400}
        className="lg:h-80 w-[770px] mx-auto mt-3 mb-10"
      />
      <p className="tracking-wide text-balance font-medium text-[18px] mb-10 text-myDarkestPr">
    AI is revolutionizing the art world by offering new ways to create, express, and experience art.
    Tools like DALL·E and DeepArt use advanced algorithms to generate unique visual artworks, turning text 
    prompts or existing images into stunning pieces of art. Similarly, AI programs like MuseNet and Googles 
    Magenta compose music across various genres, blending the styles of renowned composers with new, imaginative 
    compositions. <br /><br />
    This innovation is not just limited to artists; it is democratizing creativity, enabling anyone to 
    experiment with visual and musical creation, regardless of skill level. AI offers new perspectives 
    by enhancing traditional art forms and providing fresh ideas and inspirations. By analyzing vast 
    amounts of data, AI can mimic historical art styles or invent entirely new ones, pushing the boundaries 
    of what is possible. <br /><br />
    While some argue that AI-generated art lacks the emotional depth of human-created pieces, many see AI 
    as a valuable tool for artists, helping them expand their creative horizons. Far from replacing artists, 
    AI amplifies their potential, opening up opportunities for collaboration between humans and machines. As 
    AI technology advances, it will continue to reshape the artistic landscape, transforming how we create, 
    interpret, and engage with art in the future.
      </p>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
};

export default Post2;
