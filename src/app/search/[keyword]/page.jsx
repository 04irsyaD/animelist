import AnimeLIst from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword} `)
    
    return (
        <>
            {/*  anime POPULAR */}
            <section>
                <Header title={`Search ${decodedKeyword}..`} />
                <AnimeLIst api={searchAnime} />
            </section>
        </>
    );
};

export default Page;
