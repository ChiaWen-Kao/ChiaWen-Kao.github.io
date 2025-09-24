import Image from "next/image";

export default function ZenZzz() {
  const images = [
    "/imgs/p5/p5-cover_en.jpg",
    "/imgs/p5/p5-problem-statement_en.jpg",
    "/imgs/p5/p5-campaign-material-selection_en.jpg",
    "/imgs/p5/p5-design-concept_en.jpg",
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
