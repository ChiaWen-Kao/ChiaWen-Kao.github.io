import Image from "next/image";

export default function ZenZzz() {
  const images = [
    "/imgs/p1/p1-cover_en.jpg",
    "/imgs/p1/p1-overview_en.jpg",
    "/imgs/p1/p1-desk-research_en.jpg",
    "/imgs/p1/p1-competitive-app-analysis_en.jpg",
    "/imgs/p1/p1-user-research_en.jpg",
    "/imgs/p1/p1-user-research_en-1.jpg",
    "/imgs/p1/p1-persona_en.jpg",
    "/imgs/p1/p1-ux-goal_en.jpg",
    "/imgs/p1/p1-ux-goal_en-1.jpg",
    "/imgs/p1/p1-information-architecture_en.jpg",
    "/imgs/p1/p1-prototype-overview_en.jpg",
    "/imgs/p1/p1-prototype_en.jpg",
    "/imgs/p1/p1-design-system_en.jpg",
  ];

  return (
    <>
      {images.map((src, index) => (
        <div key={index} className="relative w-full">
          <img alt={`p1-image-${index}`} src={src} />
        </div>
      ))}
      <div className="flex justify-center flex-col items-center mb-20">
        <h2 className="text-2xl font-bold mt-20 mb-10 font-telugu">
          Wireframes & Prototype
        </h2>
        <iframe
          className="border: 1px solid rgba(0, 0, 0, 0.1);"
          width="1000"
          height="550"
          src="https://embed.figma.com/design/S8z7V7R1wLz8WDLmjb2cjN/ZenZzz-Sleeping-Tracking-App?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
