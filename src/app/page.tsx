import Label from "@/app/components/pages/top/Label";
import SpCard from "@/app/components/common/cards/SpCard";
import Wrapper from "@/app/components/layouts/Wrapper";
import CategoryLink from "./components/pages/top/CategoryLink";
import CardWithDescription from "./components/common/cards/CardWithDescription";
import AboutMe from "./components/pages/top/AboutMe";
import FeaturedArticles from "./components/pages/top/FeaturedArticles";
import PcCard from "./components/common/cards/PcCard";
import HalfPcCard from "./components/common/cards/HalfPcCard";
export default function Home() {

  return (
    <>
      <Label />
      <Wrapper>
        <SpCard />
        <SpCard />
        <SpCard />
        <div className="grid-cols-4 gap-4 hidden lg:grid ">
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
        <div className="flex gap-4 overflow-hidden overflow-x-auto">
          <CategoryLink />
        </div >
        <CardWithDescription />
        <CardWithDescription />
        <CardWithDescription />
        <AboutMe />
        <FeaturedArticles />
      </Wrapper>
    </>
  );
}
