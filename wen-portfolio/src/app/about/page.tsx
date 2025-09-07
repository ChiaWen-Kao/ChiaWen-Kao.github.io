import Image from "next/image";

// Import components
import ImageHero from "../../components/imageHero";

export default function About() {
  return (
    <>
      <ImageHero />
      
      <div className="grid grid-cols-3 gap-4px-8 mt-[-100px] z-10 relative">
        <div className="font-telugu font-bold text-8xl uppercase">About</div>
        <div className="col-span-2"></div>
        <div></div>
        <div className="col-span-2 font-montserrat text-foreground text-sm leading-[200%]">
          UI/UX Designer and Full-Stack Web Developer with a strong foundation
          in user-centred design and frontend/backend development. Experienced
          in delivering responsive web applications using React, Django, Figma,
          and SQL-based database. Passionate about creating intuitive,
          accessible digital product that improve people’s lives. Known for
          being a fast learner with the ability to quickly adapt to new tools
          and technologies as project needs evolve.
        </div>
      </div>
      <div className="relative z-3 h-[150px] mt-[-150px] bg-gradient-to-b from-background/0 from-[0%] via-background/50 via-[30%] via-background/100 via-[60%] to-background/100 to-[100%] -mx-10 lg:-mx-20"></div>
    </>
  );
}
