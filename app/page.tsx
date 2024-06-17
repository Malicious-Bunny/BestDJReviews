import Hero from "@/components/hero";
import Blogsection from "@/components/blogsection";
import client from "@/lib/client";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home - BestDJReviews",
    description: "Welcome to My DJ Blog! Your go-to source for the latest news, reviews, tips, and trends in the DJ world. Stay updated with everything related to DJing.",
    keywords: "DJ blog, DJ news, DJ reviews, DJ tips, DJ trends, DJing",
    openGraph: {
      title: "Home -BestDJGuides",
      description: "Welcome to My DJ Blog! Your go-to source for the latest news, reviews, tips, and trends in the DJ world. Stay updated with everything related to DJing.",
      type: "website",
    }
  };
  
 export default async function Page() {
 
   
    //now use the fetch api and nextjs caching to fetch the data

    //const res = await fetch(`https://cdn.contentful.com/spaces/yqf5x6omucvn/environments/master/entries?access_token=${env.CONTENTFUL_ACCESS_TOKEN}&content_type=post`,{ next: { revalidate: 3600 } })

        const Data : any = await client.getEntries({content_type: 'post'})

       

       
        const imgUrl  ="https:" + (Data.items[0].fields.image?.fields?.file?.url || "");
            const ImgDes = (Data.items[0].fields.image?.fields?.description || '');

   
    return (
        <div className="w-screen flex flex-col content-center">
            
            <main className=" 2xl:w-[76%] p-4 w-full xl:my-12 flex-col flex gap-16  self-center">
               { <Hero title={Data.items[0].fields.title} date={Data.items[0].fields.date} description={Data.items[0].fields.description} image={imgUrl} tags={Data.items[0].fields.category} link={Data.items[0].sys.id} ImgDes={ImgDes}/> }
                <Blogsection BlogsItems = {Data.items}/>
            </main>
        </div>
    )
}