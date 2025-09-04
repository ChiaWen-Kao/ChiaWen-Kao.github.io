// Import components
import Image from "next/image";
import Hero from "../components/hero";
import { Button } from "../components/button";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about-me" className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-telugu text-2xl mb-10">
              Passionate designer with expertise in user-centred design
            </h2>
            <p className="font-montserrat text-sm leading-[200%] mb-10">
              I’m a problem solver who loves addressing users’ pain points and
              turning them into meaningful solutions. During the design process,
              I continuously ask “why” and validate decisions through user
              testing to ensure the best possible experience.
            </p>
            <Button variant="borderedIcon" colour="cta" icon="link">
              read more about me
            </Button>
          </div>
          <div className="hidden md:columns-3xs md:block">
            <div className="aspect-3/2 overflow-hidden mb-4">
              <Image src="/imgs/zenzzz.png" alt="ZenZzz UIUX Project" />
            </div>
            <div className="aspect-square overflow-hidden mb-4">
              <Image src="/imgs/chilling-coffee.jpg" alt="Chilling Coffee Logo Design Project" />
            </div>
            <div className="aspect-square overflow-hidden mb-4">
              <Image src="/imgs/tnvr.jpg" alt="TNVR Logo Design Project" />
            </div>
            <div className="aspect-3/2 overflow-hidden mb-4">
              <Image src="/imgs/sereno.png" alt="Sereno Web Design Project" />
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto md:hidden">
            <div className="aspect-3/2 overflow-hidden flex-shrink-0 w-64">
              <Image src="/imgs/zenzzz.png" alt="ZenZzz UIUX Project" />
            </div>
            <div className="aspect-square overflow-hidden flex-shrink-0 w-64">
              <Image src="/imgs/chilling-coffee.jpg" alt="Chilling Coffee Logo Design Project" />
            </div>
            <div className="aspect-square overflow-hidden flex-shrink-0 w-64">
              <Image src="/imgs/tnvr.jpg" alt="TNVR Logo Design Project" />
            </div>
            <div className="aspect-3/2 overflow-hidden flex-shrink-0 w-64">
              <Image src="/imgs/sereno.png" alt="Sereno Web Design Project" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
