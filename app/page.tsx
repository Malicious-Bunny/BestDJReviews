import Hero from "@/components/hero";
import Blogsection from "@/components/blogsection";
import client from "@/lib/client";

export default async function Page() {
    //fetching posts with the contentful client
    client.getEntry('AnK2qvSnHRIROQdUTDE4m')
  .then((entry) => console.log(entry))
  .catch(console.error)

 

    
    return (
        <div className="w-screen flex flex-col content-center">
            
            <main className="xl:w-[76%] p-4 w-full xl:my-12 flex-col flex gap-16  self-center">
                <Hero />
                <Blogsection />
            </main>
        </div>
    )
}