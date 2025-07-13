import Image from "next/image";
import CardLabel from "../CardLabel";

export default function HalfPcCard() {
  return <div className="w-full font-cabin text-text-black first:mb-10">
    <div className="relative aspect-[16/12]">
      <Image
        src="/image.JPG"
        alt="pc-card"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="mt-2.5 flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        <CardLabel />
        <p className="opacity-50">2025.07.12</p>
      </div>
      <h6 className="h6 mt-2 text-center line-clamp-2">This is my first trip to AustriaThis is my first trip to Austria</h6>
    </div>
  </div>;
}