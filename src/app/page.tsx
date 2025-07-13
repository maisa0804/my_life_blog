import Label from "@/app/components/pages/top/Label";
import SpCard from "@/app/components/common/cards/SpCard";
import Wrapper from "@/app/components/layouts/Wrapper";

export default async function Home() {
  return (
    <>
      <Label />
      <Wrapper>
        <SpCard />
      </Wrapper>
    </>
  );
}
