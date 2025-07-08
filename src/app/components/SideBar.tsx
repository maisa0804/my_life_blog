import Link from "next/link";

export default function SideBar() {
  return (
    <div className=" fixed pt-28 w-full md:pr-9 md:pl-20 md:max-w-80">
      <div>
        <h1 className=" text-2xl font-bold text-primary-warm-white">
          MY JOURNEY
        </h1>
        <p className="text-primary-warm-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
      <div className="flex gap-4 border-t-2 md:flex-col md:border-t-0">
        <Link href="/" className="text-primary-blue">Home</Link>
        <Link href="/about" className="text-primary-blue">About</Link>
        <Link href="/contact" className="text-primary-blue">Contact</Link>
      </div>
    </div>
  );
}