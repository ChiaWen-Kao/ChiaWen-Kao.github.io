import WorkHero from "../../../components/workHero";
import Carousel from "../../../components/carousel";
import Image from "next/image";

export default function Sereno() {
  const slides = [
    {
      image: "/imgs/p3/p3-home.jpg",
      title: "Landing Page",
      description:
        "Activities are organised into different categories to help users find what they are looking for more easily. Additionally, testimonials provide users with references on how the activities work. As mentioned in the user description, low visibility of activities is a major factor limiting community engagement. To address this, Sereno features a highlight section that displays activities near the user, making it easier for them to discover and connect with the community.",
    },
    {
      image: "/imgs/p3/p3-product-detail.jpg",
      title: "Product Page",
      description:
        "The product page presents key details about each activity, giving users a clear understanding of what to expect. To foster community connections, a forum is included where users with shared interests can interact and get to know each other.",
    },
    {
      image: "/imgs/p3/p3-blog.jpg",
      title: "Blog",
      description:
        "To convert users into loyal customers, the platform provides blog content with the latest wellness information, enhancing engagement and encouraging repeat visits. Articles are categorized by theme, and related activities are listed within each article, improving promotion effectiveness for clients.",
    },
  ];
  return (
    <>
      <WorkHero
        name="Sereno"
        subtitle="Activity Booking Website   •   2023"
        coverImg="/imgs/sereno.png"
      />
      <section className="px-10 md:px-30">
        <p className="font-montserrat text-md leading-[200%] mb-[160px]">
          Sereno is an activity booking website designed to foster community
          connections by helping users discover local events and activities. The
          platform recommends activities based on users’ location and personal
          filters, making it easier to find experiences they’ll enjoy. This
          project focused on designing an accessible user experience and
          interface, guided by AI-generated user descriptions and self-conducted
          insights. In addition, APIs were integrated to deliver dynamic
          activity data, ensuring the website remains up to date and engaging.
        </p>
        <h2 className="font-telugu text-2xl uppercase mb-10">Key Features</h2>
        <div>
          <Carousel slides={slides} />
        </div>
        <div className="mt-20">
          <p className="font-montserrat leading-[200%]">
            The platform is being developed as a web-based application using
            HTML, CSS, and JavaScript. APIs are invoked to ensure that the
            content remains up to date. A key focus of this project is adherence
            to the WCAG (Web Content Accessibility Guidelines), particularly
            colour contrast, aligning with our user profile that includes
            individuals with visual impairments. Additionally, a responsive
            layout has been implemented to ensure the platform is accessible
            across multiple devices, accommodating users from diverse
            backgrounds.
          </p>
          <h2 className="text-2xl font-bold mb-8 font-telugu mt-50">
            Design & Development Flow
          </h2>
          <ol className="font-montserrat leading-[200%] list-decimal list-outside ml-6">
            <li>
              Analysed users’ pain points and needs using AI tools.
            </li>
            <li>
              Identified WCAG guidelines to align with user requirements.
            </li>
            <li>
              Designed low-fidelity and high-fidelity prototypes with a responsive layout.
            </li>
            <li>
              Implemented the frontend.
            </li>
            <li>
              Integrated APIs to ensure up-to-date data.
            </li>
            <li>
              Conducted user testing.
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-50 mb-50">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-telugu">My Role</h2>
            <p className="font-montserrat leading-[200%]">
              I worked on this project individually, focusing mainly on frontend
              development while also supporting the backend. I used AI tools to
              conduct user research, designed an accessible UI/UX, implemented
              the frontend, and integrated APIs.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-8 font-telugu">Skills</h2>
            <ul className="font-montserrat leading-[200%] list-disc list-inside">
              <li>Hosting: UQ Cloud</li>
              <li>Frontend: HTML, CSS (Bootstrap), JavaScript</li>
              <li>Accessibility: WCAG 2.2, Colour Contrasting Testing</li>
            </ul>
          </div>
        </div>
        <div className="relative grid grid-cols-2 w-full h-100 gap-10">
          <Image
            src="/imgs/p3/p3-lowfi-home.png"
            alt="Sereno low fidelity prototype"
            width={100}
            height={100}
            className="object-cover w-full h-auto"
          />
          <Image
            src="/imgs/p3/p3-lowfi-blog.png"
            alt="Sereno low fidelity prototype"
            width={100}
            height={100}
            className="object-cover w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
