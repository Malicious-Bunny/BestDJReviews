import { Button } from "@/components/ui/button";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
//import insta, facebook, twitter icons from react-icons
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Page() {
  return (
    <div className="w-screen   flex flex-col content-center">
      <main className="w-[76%] my-16 flex-col flex gap-20  self-center">
       <div className="flex flex-row gap-9  content-center justify-center">
        
          <Image
            src="/placeholder1.jpg"
            alt="about me"
            className=" rounded-sm "
            width={800}
            height={800}
          />
        <div className="w-2/3 flex flex-col gap-6 content-center ">
          <div className="flex flex-col self-center gap-2">
              <h1 className="text-4xl self-center text-[#FF7A00] font-bold">About Me</h1>
              <div className="links flex flex-row text-gray-400 gap-4 self-center">
                <FaInstagram className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" />
                <FaFacebook className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" />
                <FaTwitter className="text-xl hover:cursor-pointer hover:text-[#FF7A00]" />
              </div>
          </div>
            <div className="name">
                <h2 className="text-4xl">Hi, I am John Doe</h2>
                <h3 className="text-2xl self-center ">Aka Dj tips</h3>
          
            </div>
            <div className="roles flex flex-row content-center  gap-2">
               <Badge variant={"outline"}>Software Engineer</Badge>
               <Badge variant={"outline"}>Web Engineer</Badge>
               <Badge variant={"outline"}>Dj Engineer</Badge>
            </div>

          <p className="text-md font-thin text-muted-foreground">
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
          <div className="flex text-xl flex-row gap-4">
            <Button className=" text-xl">Get in touch</Button>
          </div>
        </div>
       </div>
      </main>
    </div>
  );
}

export function Djtoolsbanner(){
    return (
        <>
        </>
    )
}