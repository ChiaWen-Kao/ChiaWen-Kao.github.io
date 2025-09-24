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
        <div
          key={index}
          className="relative w-full"
        >
          <img
            alt={`p1-image-${index}`}
            src={src}
          />
        </div>
      ))}
    </>
  );
}
