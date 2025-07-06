import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 text-amber-50 font-bold">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            Image
          </div>
          <div className="flex items-center gap-12">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}