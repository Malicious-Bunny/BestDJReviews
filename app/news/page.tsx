import BlogItem from "@/components/blogitem"
import client from "@/lib/client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DJ News - BestDJReviews",
    description: "Stay updated with the latest news in the DJ world. From new music releases to event announcements and industry trends, we bring you all the important updates.",
    keywords: "DJ news, DJ music releases, DJ events, DJ industry trends, DJ blog",
    openGraph: {
      title: "DJ News - BestDJReviews",
      description: "Stay updated with the latest news in the DJ world. From new music releases to event announcements and industry trends, we bring you all the important updates.",
      type: "website",
    },
  };


export default async function Page(){

    const Data = await client.getEntries({content_type: 'post'})

    let NewsData = []

    NewsData = Data.items.filter((item) => item.fields.mainCategory == 'news')


    return (
        <div className="w-screen flex flex-col content-center">
           
            <main className="xl:w-[76%] p-4 w-full xl:my-12 flex-col flex gap-16  self-center">
            <h1 className="scroll-m-20  xl:text-3xl self-start text-3xl font-bold tracking-tight lg:text-5xl">
                        Latest whats happening in the DJ world
                </h1>
            <section
        
        style={
            {
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "2rem",
            }
        }
        
        className=" grid w-full">
           
            {
                NewsData.map((item: any) => (
                    <BlogItem key={item.sys.id} title={item.fields.title} date={item.fields.date} image={`https:${item.fields.image.fields.file.url}`} desc={item.fields.description} ImgDes={item.fields.image.fields.description} category={item.fields.category} link={item.sys.id} mainCat={item.fields.mainCategory} />
               ))
            }
            </section>
            </main>
        </div>
    )
}