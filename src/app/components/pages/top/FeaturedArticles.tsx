import Image from "next/image";

export default function FeaturedArticles() {
  return (
    <div className="flex flex-col gap-6 max-w-[400px]">
      <div className="flex gap-3 items-startt min-h-[6rem] w-full">
        <Image
          src="/image.JPG"
          alt="featured-articles"
          width={100}
          height={100}
          priority
          className="aspect-[3/2] w-1/3 "
        />
        <div className="flex flex-col justify-between h-full w-2/3 min-h-[6rem]">
          <h6 className="text-lg font-cabin font-semibold line-clamp-2">
            How to Stay Stylish While Traveling
          </h6>
          <p className="text-sm opacity-50">2025/07/12</p>
        </div>
      </div>
      <div className="flex gap-3 items-startt min-h-[6rem] w-full">
        <Image
          src="/image.JPG"
          alt="featured-articles"
          width={100}
          height={100}
          priority
          className="aspect-[3/2] w-1/3 "
        />
        <div className="flex flex-col justify-between h-full w-2/3 min-h-[6rem]">
          <h6 className="text-lg font-cabin font-semibold line-clamp-2">
            How to Stay Stylish While Traveling
          </h6>
          <p className="text-sm opacity-50">2025/07/12</p>
        </div>
      </div>
      <div className="flex gap-3 items-startt min-h-[6rem] w-full">
        <Image
          src="/image.JPG"
          alt="featured-articles"
          width={100}
          height={100}
          priority
          className="aspect-[3/2] w-1/3 "
        />
        <div className="flex flex-col justify-between h-full w-2/3 min-h-[6rem]">
          <h6 className="text-lg font-cabin font-semibold line-clamp-2">
            How to Stay Stylish While Traveling
          </h6>
          <p className="text-sm opacity-50">2025/07/12</p>
        </div>
      </div>
    </div>
  );
}