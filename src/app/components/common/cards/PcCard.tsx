import Image from "next/image";
import CardLabel from "../CardLabel";

export default function PcCard() {
  return <div className="w-full font-cabin text-text-black">
    <div className="relative aspect-[16/14]">
      <Image
        src="/image.JPG"
        alt="pc-card"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="mt-5 flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        <CardLabel />
        <p className="opacity-50">2025.07.12</p>
      </div>
      <h3 className="h3 mt-4 text-center line-clamp-2">This is my first trip to AustriaThis is my first trip to Austria</h3>
    </div>
  </div>;
}