import Blogs from "./Components/Blogs";
import Hero from "./Components/Hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <h1 className='text-myDarkestPr font-bold text-4xl text-center mt-14 tracking-tight mx-48'>
        Techno Turing: Shaping the Future of Artificial Intelligence</h1>
        <p className='text-myDarkestPr font-medium text-lg text-center mx-48 mt-5'>
          The AI Revolution is reshaping industries, driving innovation, and transforming our daily lives. 
          From personalized experiences to groundbreaking technologies, AI is the engine behind modern progress.</p>
      <Blogs />
      
    </div>
  );
}
