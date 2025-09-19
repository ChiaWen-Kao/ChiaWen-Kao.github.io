// Import component
import WorkHero from "../../../components/workHero";
import Carousel from "../../../components/carousel";

export default function CoolHackGame() {
  const slides = [
    {
      image: "/imgs/p3/p3-home.jpg",
      title: "Decryption Mode",
      description:
        "We implemented a real-time multiplayer game mode where players compete to solve AI-generated decryption puzzles as quickly as possible. WebSocket technology was used to enable real-time interaction and ensure smooth, synchronised gameplay between participants. These puzzles aimed to help users understand various decryption methods.",
    },
    {
      image: "/imgs/p3/p3-product-detail.jpg",
      title: "Firewall Mode",
      description:
        "In this game mode, players learn cybersecurity concepts through an interactive, multi-stage experience: Recon, Exploit, and Retrieve. Players use in-game tools to identify vulnerabilities and breach firewalls, then navigate a simulated terminal to complete tasks.",
    },
    {
      image: "/imgs/p3/p3-blog.jpg",
      title: "Leaderboard",
      description:
        "To foster healthy competition and encourage user engagement, we designed a leaderboard that ranks players based on their performance. This feature motivates users to improve their skills while increasing overall platform stickiness.",
    },
  ];
  return (
    <>
      <WorkHero
        name="Cool Hack Game"
        subtitle="Cybersecurity Game   •   2024"
        coverImg="/imgs/p4/p4-cover.png"
      />
      <section className="px-20 md:px-15 lg:px-20 mb-50">
        <p className="font-montserrat text-md leading-[200%] mb-[160px]">
          Cool Hack Game is an online multiplayer platform designed to help
          adolescents learn cybersecurity skills in a fun and interactive way.
          The game aims to improve students’ knowledge and awareness of cyber
          threats, preparing them to engage more safely with the digital world.
          Instead of relying on brute-force mechanics, the game leverages AI to
          adapt dynamically to the current digital environment, providing a more
          realistic and engaging learning experience.
        </p>
        <h2 className="font-telugu text-2xl uppercase mb-10">Key Features</h2>
        <div>
          <Carousel slides={slides} />
        </div>
        <div className="mt-20">
          <p className="font-montserrat leading-[200%]">
            This project was built as a web-based application using the React
            framework, enabling the creation of reusable and scalable game
            elements. Since the primary audience was adolescents, the user
            interface was designed with a playful, vibrant theme, featuring
            exaggerated, saturated colours to capture attention and immersive
            background sound effects to enhance engagement.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 font-telugu mt-50">
            Design Challenge
          </h2>
          <p className="font-montserrat leading-[200%]">
            This was my first time designing a game for children, so I conducted
            desk research on popular titles like *Candy Crush* to understand
            what elements attract and engage young players. These insights
            helped shape an appealing and engaging game atmosphere.
          </p>
          <br />
          <p className="font-montserrat leading-[200%]">
            As a game developer, we aimed to maximize player engagement, but our
            tutors highlighted the potential risk of game addiction among
            children. Balancing engagement with responsible design became a key
            challenge. We referenced existing strategies, such as time limits
            and parental monitoring, and adapted our user flow accordingly by
            adding a parental consent policy and in-game time reminders to
            promote healthy play. In the future, this could be evaluated using a
            matrix to measure the effectiveness of these mechanisms and their
            impact on user experience.
          </p>
          <br />
          <p className="font-montserrat leading-[200%]">
            Through this process, I realised that as a designer, creating an
            attractive product is not enough. We also have a responsibility to
            ensure it promotes safe and responsible use. This principle guided
            my design decisions throughout the project.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 font-telugu mt-50">
            Design & Development Flow
          </h2>
          <ol className="font-montserrat leading-[200%] list-decimal list-outside ml-6">
            <li>
              Defined project scope, requirements, and planned game
              presentation.
            </li>
            <li>Conducted desk research on game design and user flow.</li>
            <li>
              Created low-fidelity wireframes and high-fidelity prototypes using
              Figma.
            </li>
            <li>Set up the project environment.</li>
            <li>Developed the frontend with React.</li>
            <li>Deployed the application on UQ Cloud.</li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-50 mb-50">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">My Role</h2>
            <p className="font-montserrat leading-[200%]">
              This was a group project where I contributed as both a UI/UX
              designer and frontend developer. I was responsible for creating an
              engaging UI and ensuring a smooth user flow. Additionally, I
              developed the frontend using the React framework and deployed the
              application on UQcloud.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">Skills</h2>
            <ul className="font-montserrat leading-[200%] list-disc list-inside">
              <li>Hosting: UQ Cloud</li>
              <li>Design: Figma</li>
              <li>Frontend: React, JavaScript</li>
              <li>Database: PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8 font-telugu">Demo Video</h2>
          <div className="flex justify-center">
            <iframe
              width="60%"
              height="500"
              src="https://www.youtube.com/embed/SL23I4rCto8?si=_M5UmwgBqum2q2lr&amp;start=216"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
