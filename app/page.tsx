import Hero from "@/components/hero";
import Blogsection from "@/components/blogsection";
import client from "@/lib/client";


 export default async function Page() {
 
   
    //now use the fetch api and nextjs caching to fetch the data

    //const res = await fetch(`https://cdn.contentful.com/spaces/yqf5x6omucvn/environments/master/entries?access_token=${env.CONTENTFUL_ACCESS_TOKEN}&content_type=post`,{ next: { revalidate: 3600 } })

        const Data = await client.getEntries({content_type: 'post'})

       

       
            const imgUrl = 'https:' + (Data.items[0].fields.image?.fields?.file?.url || '');
            const ImgDes = (Data.items[0].fields.image?.fields?.description || '');
       
           
     
        
        console.log(Data.items[0].fields)



    
    
   
   
    return (
        <div className="w-screen flex flex-col content-center">
            
            <main className="xl:w-[76%] p-4 w-full xl:my-12 flex-col flex gap-16  self-center">
               { <Hero title={Data.items[0].fields.title} date={Data.items[0].fields.date} description={Data.items[0].fields.description} image={imgUrl} tags={Data.items[0].fields.category} link={Data.items[0].sys.id} ImgDes={ImgDes}/> }
                <Blogsection BlogsItems = {Data.items}/>
            </main>
        </div>
    )
}