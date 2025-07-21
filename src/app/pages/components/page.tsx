import CardWithDescription from "@/app/components/common/cards/CardWithDescription";
import PcCard from "@/app/components/common/cards/PcCard";
import HalfPcCard from "@/app/components/common/cards/HalfPcCard";
import AboutMe from "@/app/components/pages/top/AboutMe";
import CategoryLink from "@/app/components/pages/top/CategoryLink";

export default function Page() {
  return <div className="mt-20 mb-96">
    <CardWithDescription />
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col">
        <HalfPcCard />
        <HalfPcCard />
      </div>
      <div className="col-span-2">
        < PcCard />
      </div>
      <div className="flex flex-col">
        <HalfPcCard />
        <HalfPcCard />
      </div>
    </div>
    <div className="mt-20">
      <AboutMe />
    </div>
    <div className="mt-20 mx-4 flex gap-4">
      <CategoryLink />
      <CategoryLink />
    </div>
  </div>;
}