import Image from "next/image";

export default function CategoryLink() {
  return (
    <section className="relative">
      <a href="#">
        <div className="relative aspect-[1/1] w-40 lg:w-64 rounded-lg lg:rounded-3xl overflow-hidden">
          <Image
            src="/image.JPG"
            alt="category-link"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-text-white absolute bottom-2 left-2 text-md font-cabin lg:text-2xl lg:bottom-4 lg:left-4 ">Category Link</p>
      </a>
    </section>
  );
}