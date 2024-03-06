import AnimeLIst from "../components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse(`top/anime` , "limit=8")
  // const animek =  await topAnime.json()

  return (
    <>
    {/*  anime POPULAR */}
      <section>
      <Header title="Top Popular" linkTitle="See All" linkHref="/popular/"/>
      <AnimeLIst api={ topAnime } done = {console.log("sasa",topAnime)}/>
      {/* {console.log("sasa",animek)}  */}
      
      </section>
    </>
  );
};

export default Page;
