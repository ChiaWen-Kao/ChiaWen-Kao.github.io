// Import component
import WorkHero from "../../../components/workHero";
import Carousel from "../../../components/carousel";

export default function Copd() {
  const slides = [
    {
      image: "/imgs/p3/p3-home.jpg",
      title: "SMART Form Questionnaire",
      description:
        "Patients can regularly do the questionnaire to monitor their COPD health condition. These data will be stored in FHIR server, which health provider can also track their patient’s management of their disease.",
    },
    {
      image: "/imgs/p3/p3-product-detail.jpg",
      title: "Upload Vital Sign",
      description:
        "Users can upload their vital signs from a smartwatch to the web-based app. The data is packaged as a bundle, securely stored on a FHIR server, and displayed on the website, enabling patients to track their health metrics over time. ",
    },
    {
      image: "/imgs/p3/p3-blog.jpg",
      title: "Data Display Dashboard",
      description:
        "All health data will be displayed on the website, including questionnaire responses and vital signs. The platform also provides standardised reference values, helping users understand whether their health indicators fall within a normal range. This feature promotes awareness and encourages proactive health management.",
    },
  ];
  return (
    <>
      <WorkHero
        name="COPD Management"
        subtitle="A SMART on FHIR App for patient self-monitoring   •   2024"
        coverImg="/imgs/p4/p4-cover.png"
      />
      <section className="px-20 md:px-15 lg:px-20 mb-50">
        <p className="font-montserrat text-md leading-[200%] mb-[160px]">
          COPD Management is a SMART on FHIR application designed to support
          patient self-monitoring. This project was an industry-sponsored
          initiative in collaboration with CISCO, combining healthcare insights
          with user-centred design principles. It allows healthcare providers to
          track patients’ vital signs, including heart rate, step count, and
          blood oxygen levels through a smartwatch, alongside a
          self-administered COPD questionnaire. By enabling remote monitoring,
          the app helps reduce hospital overload and improves patient care.
        </p>
        <h2 className="font-telugu text-2xl uppercase mb-10">Key Features</h2>
        <div>
          <Carousel slides={slides} />
        </div>
        <div className="mt-20">
          <p className="font-montserrat leading-[200%]">
            The project primarily targets elderly users with limited digital
            experience. The app features a clear, intuitive layout and an
            easy-to-navigate interface to simplify complex medical information
            and enhance usability. Technically, it is built with the React
            framework and integrated with a FHIR server. All data is structured
            as FHIR standard bundles, ensuring seamless and secure data
            transmission.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 font-telugu mt-50">
            Design Challenge
          </h2>
          <p className="font-montserrat leading-[200%]">
            As a design student, FHIR was initially unfamiliar to me, and I
            spent considerable time learning the technical aspects, including
            understanding the FHIR standard, connecting with the server, and
            rendering data correctly. This process required significant effort,
            but with guidance from our mentor, who had strong experience in
            developing SMART on FHIR applications, we were able to overcome the
            challenges.
          </p>
          <br />
          <p className="font-montserrat leading-[200%]">
            At the end of the project, we conducted internal testing within our
            team, even though our target audience was elderly users. While this
            limited the user feedback we could gather, it highlighted the
            importance of involving the intended audience in usability testing
            for future iterations.
          </p>
          <br />
          <p className="font-montserrat leading-[200%]">
            Overall, this project was a valuable experience that not only
            deepened my understanding of user-centred design in the medical
            field but also exposed me to technical knowledge beyond my
            background. It strengthened my ability to collaborate across
            disciplines and adapt quickly to new domains.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 font-telugu mt-50">
            Design & Development Flow
          </h2>
          <ol className="font-montserrat leading-[200%] list-decimal list-outside ml-6">
            <li>
              Defined the project scope and requirement and identified key
              features.
            </li>
            <li>Created wireframes and high-fidelity prototypes.</li>
            <li>
              Set up the project environment and connected to the FHIR server.
            </li>
            <li>Developed both frontend and backend components.</li>
            <li>Developed both frontend and backend components.</li>
            <li>Conducted internal testing.</li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-50 mb-50">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">My Role</h2>
            <p className="font-montserrat leading-[200%]">
              This was a group project where I contributed as both a UI/UX
              designer and a frontend developer. My key responsibility was
              rendering data from the FHIR server and ensuring it was presented
              clearly and accessibly in the interface.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">Skills</h2>
            <ul className="font-montserrat leading-[200%] list-disc list-inside">
              <li>Hosting: MELD Server</li>
              <li>Frontend: React</li>
              <li>Backend: FHIR</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8 font-telugu">Demo Video</h2>
          <div className="flex justify-center">
            <iframe
              width="60%"
              height="500"
              src="https://www.youtube.com/embed/7amMwb_7KKs?si=PAcCWnWzNgWzYrDG&amp;start=277"
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
