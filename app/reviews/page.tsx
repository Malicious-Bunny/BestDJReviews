import BlogItem from "@/components/blogitem"
import client from "@/lib/client";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "DJ Reviews - My DJ Blog",
    description: "Read the latest reviews on DJ performances, events, and equipment. Stay updated with the DJ world.",
    keywords: "DJ reviews, DJ performances, DJ equipment reviews, DJ events, DJ blog, Dj Tips, BestDjReviews Best DJ reviews, Best Dj tips, Tips as a DJ, DJ blog tips",
    openGraph: {
      title: "DJ Reviews - My DJ Blog",
      description: "Read the latest reviews on DJ performances, events, and equipment. Stay updated with the DJ world.",
      type: "website",
      url: "https://www.yourdjblog.com/reviews",
  
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourdjblog"
    }
  };

export default async function Page(){

    const Data = await client.getEntries({content_type: 'post'})

    let NewsData = []

    NewsData = Data.items.filter((item) => item.fields.mainCategory == 'reviews')


    return (
        <div className="w-screen flex flex-col content-center">
           
            <main className="xl:w-[76%] p-4 w-full xl:my-12 flex-col flex gap-16  self-center">
            <h1 className="scroll-m-20  xl:text-5xl self-start text-3xl font-bold tracking-tight lg:text-5xl">
                        Reviews from the Mopao himself
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