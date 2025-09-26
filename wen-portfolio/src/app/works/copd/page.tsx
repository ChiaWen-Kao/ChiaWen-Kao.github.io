import Image from "next/image";

export default function ZenZzz() {
  const images = [
    "/imgs/p4/p4-cover_en.jpg",
    "/imgs/p4/p4-overview_en.jpg",
    "/imgs/p4/p4-problem-statement_en.jpg",
    "/imgs/p4/p4-persona_en.jpg",
    "/imgs/p4/p4-ux-goal_en.jpg",
    "/imgs/p4/p4-prototype-overview_en.jpg",
  ];

  return (
    <>
      {images.map((src, index) => (
        <div key={index} className="relative w-full">
          <img alt={`p4-image-${index}`} src={src} />
        </div>
      ))}
      <div className="md:px-2 md:px-30 py-10 md:py-30 mb-20 bg-[#DDE5DA]">
        <h2 className="text-md md:text-4xl font-bold mb-8 font-rubik font-bold text-[#517345] text-center">Demo Video</h2>
        <div className="flex justify-center">
          <iframe
            width="70%"
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
    </>
  );
}
