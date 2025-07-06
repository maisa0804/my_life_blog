import Image from "next/image";

export default async function Home() {
  return (
    <div className="font-open-sans">
      <div className=" hero">
        <Image src="/image.JPG" alt="Hero" width={1000} height={1000} className="w-screen h-screen object-cover object-center" />
      </div>
      <div className="container mx-auto px-6 py-4">
        About Me
      </div>
      <div className="container mx-auto px-6 py-4">
        My Work
      </div>
    </div>
  );
}
