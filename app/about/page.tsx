import { Button } from "@/components/ui/button";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
//import insta, facebook, twitter icons from react-icons
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - BestDJReviews",
  description: "Learn more about My DJ Blog, our journey, and our passion for the DJ world. Discover the people behind the blog and our mission to bring you the latest in DJ news and reviews.",
  keywords: "About My DJ Blog, DJ blog team, DJ news, DJ reviews, our mission, DJ world",
  openGraph: {
    title: "About Us - BestDJReviews",
    description: "Learn more about My DJ Blog, our journey, and our passion for the DJ world. Discover the people behind the blog and our mission to bring you the latest in DJ news and reviews.",
    type: "website",
  },
}
export default function Page() {
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
            <div className="name">
                <h2 className="xl:text-4xl text-2xl">Hi, I am John Doe</h2>
                <h3 className="xl:text-2xl text-lg self-center ">Aka Dj tips</h3>
          
            </div>
            <div className="roles flex flex-row content-center  gap-2">
               <Badge variant={"outline"}>Software Engineer</Badge>
               <Badge variant={"outline"}>Web Engineer</Badge>
               <Badge variant={"outline"}>Dj Engineer</Badge>
            </div>

          <p className="xl:text-md text-sm font-thin text-muted-foreground">
          {/*generate about section summary for a dj */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ut purus eget sapien luctus tincidunt. 
            Nullam nec purus nec turpis bibendum ultricies. 
            Nullam auctor, nunc id tincidunt varius, 
            ligula mi fringilla nunc, id ultricies libero eros nec tortor. 
            Donec sit amet nunc ac metus ultricies efficitur. 
            Nullam nec purus nec turpis bibendum ultricies. 
            Nullam auctor, nunc id tincidunt varius, 
            ligula mi fringilla nunc, id ultricies libero eros nec tortor. 
            Donec sit amet nunc ac metus ultricies efficitur.
          </p>
          <div className="flex text-xl w-full flex-row gap-4">
            <Button className=" text-xl">Get in touch</Button>
          </div>
        </div>
        
       </div>
      </main>
    </div>
  );
}
