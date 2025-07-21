import Image from "next/image";
import CardLabel from "../CardLabel";

export default function SpCard() {
  return (
    <div className="w-full h-auto md:hidden">
      <Image
        className="w-full h-full object-cover aspect-square"
        src="/image.JPG"
        alt="SpCard"
        width={375}
        height={500}
        priority
      />
      <h6 className="h6 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h6>
      <div className="flex justify-start items-center gap-2 mt-2">
        <CardLabel />
        <p className="text-sm opacity-50">2025/07/12</p>
      </div>
    </div>
  );
}