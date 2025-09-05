import Image from "next/image";

interface ProjectPreviewProps {
  data: {
    title: string;
    duration: string;
    projectType: string;
    description: string;
    tag: string[];
    image: string;
  };
  index: number;
}

export default function ProjectPreview({ data, index }: ProjectPreviewProps) {
  return (
    <div
      className="project-card grid grid-cols-1 md:grid-cols-3 gap-4 my-20 md:my-24 items-center"
      aria-label={data.title}
    >
      {/* Image */}
      <div
        className={`card-image aspect-3/2 relative overflow-hidden md:col-span-2 z-0 ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div
        className={`card-content bg-[rgba(18, 38, 46, 0.5)] backdrop-blur-3xl rounded-md p-9 relative md:ml-[-100px] z-10 ${
          index % 2 === 1 ? "md:order-1 md:ml-[0px] md:mr-[-100px]" : ""
        }`}
      >
        <div className="absolute inset-0 bg-foreground/8 rounded-md pointer-events-none"></div>
        <div className="relative">
          <h3 className="text-xl font-telugu text-foreground leading-[200%]">
            {data.title}
          </h3>
          <p className="text-sm font-montserrat text-caption">
            {data.duration} | {data.projectType}
          </p>
          <p className="text-sm font-montserrat text-foreground leading-[200%] mt-5">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}