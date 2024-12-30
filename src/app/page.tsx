import Blogs from "./Components/Blogs";
import Hero from "./Components/Hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <h1
          style={{
            fontFamily: "Lobster",
            fontWeight: 500,
          }}
          className="text-myDarkestPr font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wide"
        >
          Techno Blogs: Shaping the Future of Artificial Intelligence
        </h1>
        <p
          style={{
            fontFamily: "Saira",
            fontWeight: 500,
          }}
          className="text-myDarkestPr font-medium text-base sm:text-lg md:text-xl text-center mt-3 sm:mt-4 md:mt-5 max-w-4xl mx-auto"
        >
          The AI Revolution is reshaping industries, driving innovation, and
          transforming our daily lives. From personalized experiences to
          groundbreaking technologies, AI is the engine behind modern progress.
        </p>
      </div>
      <Blogs />
    </div>
  );
}
