import Image from "next/image";
import CardLabel from "../CardLabel";

export default function CardWithDescription() {
  return <div className="w-full max-w-4xl font-cabin text-text-black">
    <div className="relative aspect-[16/9]">
      <Image
        src="/image.JPG"
        alt="pc-card"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="mt-3 md:mt-5 flex flex-col px-5 md:px-10 gap-2 md:gap-4">
      <h3 className="h6 md:h3 text-center">This is my first trip to AustriaThis is my first trip to Austria</h3>
      <p className="text-center text-sm md:text-lg opacity-60">Lorem ipsum dolor sit amet consectetur/Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
      <div className="flex gap-2 items-center justify-center">
        <CardLabel />
        <p className="opacity-50">2025.07.12</p>
      </div>
    </div>
  </div>;
}