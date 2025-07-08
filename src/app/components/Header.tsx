import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed bg-amber-100 w-full px-5 py-4 @md:px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">LOGO</div>
      <nav className="flex items-center gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Travel</Link>
        <Link href="/contact">LifeStyle</Link>
        <Link href="/contact">Gadget</Link>
        <Link href="/contact">Culture</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}