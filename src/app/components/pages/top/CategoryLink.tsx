import Image from "next/image";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function CategoryLink() {
  const categories = await client.fetch(CATEGORY_QUERY);
  console.log(categories);

  return (
    <section className="relative w-full h-auto">
      <a href="#" className="block">
        <div className="relative w-40 lg:w-64 aspect-square rounded-lg lg:rounded-3xl overflow-hidden">
          <Image
            src="/image.JPG"
            alt="category-link"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 160px, 256px"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <p className="absolute bottom-2 left-2 text-white text-md font-cabin lg:text-2xl lg:bottom-4 lg:left-4 z-10">
          Category Link
        </p>
      </a>
    </section>
  );
}