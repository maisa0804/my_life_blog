import Link from "next/link";

export default function Footer() {
  return (
    <footer className='px-5 py-3.5 lg:px-10 bg-text-primary text-text-white'>
      <div className="border border-text-primary border-opacity-50 flex flex-col lg:flex-row items-start gap-4">
        <h3 className="h3">LOGO</h3>
        <div className="flex flex-col gap-2 font-cabin p-4 text-lg">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2 font-cabin p-4 text-lg">
          <Link href="/">
            <p>Instagram</p>
          </Link>
          <Link href="/">
            <p>Twitter</p>
          </Link>
          <Link href="/">
            <p>Facebook</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}