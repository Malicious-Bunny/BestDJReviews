import { Button } from "@/components/ui/button";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
//import insta, facebook, twitter icons from react-icons
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Metadata } from "next";
import client from "@/lib/client";

export const metadata: Metadata = {
  title: "About Us - BestDJGuides",
  description: "Learn more about My DJ Blog, our journey, and our passion for the DJ world. Discover the people behind the blog and our mission to bring you the latest in DJ news and reviews.",
  keywords: [
    "About the DJ",
    "DJ Niorich",
    "Davy Niorich",
    "DJ Biography",
    "Meet the DJ",
    "DJ Background",
    "DJ Experience",
    "DJ Story",
    "About Best DJ Guides",
    "DJ Expertise",
    "DJ Profile",
    "DJ Introduction",
    "BestDJGuides",
    "bestdjguides.com",
    "bestdjguides",
    "best dj guides",
    "best dj guides .com",
  ],
  openGraph: {
    title: "About Us - BestDJGuides",
    description: "Learn more about My DJ Blog, our journey, and our passion for the DJ world. Discover the people behind the blog and our mission to bring you the latest in DJ news and reviews.",
    type: "website",
    url: "https://bestdjreviews.com/about",
  },
}
export default async function Page() {

  const Data : any = await client.getEntries({content_type: 'about'})
  console.log(Data.items)

 
  return (
    <div className="w-screen p-4   flex flex-col content-center">
      <main className="xl:w-[76%] w-full my-8 flex-col flex gap-20  self-center">
       <div className="flex xl:flex-row flex-col gap-9  content-center justify-center">
        
          <Image
            src="/placeholder1.jpg"
            alt="about me"
            className=" rounded-sm "
            width={800}
            height={800}
          />
        <div className="xl:w-2/3 w-full flex flex-col gap-6 content-center ">
          <div className="flex flex-col self-center gap-2">
              <h1 className="xl:text-4xl text-2xl self-center text-[#FF7A00] font-bold">About Me</h1>
              <div className="links flex flex-row text-gray-400 gap-4 self-center">
                <FaInstagram className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" />
                <FaFacebook className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" />
                <FaTwitter className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" />
              </div>
          </div>
            <div className="name space-y-3">
                <h2 className="xl:text-3xl font-bold text-2xl">{Data.items[0].fields.name}</h2>
                <h3 className="xl:text-xl italic text-lg self-center ">{"DJ-"+Data.items[0].fields.nickname}</h3>
          
            </div>
            <div className="roles flex flex-row content-center  gap-2">
               <Badge variant={"outline"}>Software Engineer</Badge>
               <Badge variant={"outline"}>Web Engineer</Badge>
               <Badge variant={"outline"}>Dj Engineer</Badge>
            </div>

          <p className="xl:text-md text-sm font-thin text-muted-foreground">
          {/*generate about section summary for a dj */}
          {Data.items[0].fields.selfSummary}
          </p>
         {/*get in touch form */}
         <form action={`mailto:davyniorich@gmail,com`} method="get" encType="text/plain">
                <Button type="submit">Get in Touch</Button>
            </form>
        </div>
        
       </div>
      </main>
    </div>
  );
}
