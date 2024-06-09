import { Button } from "./ui/button"
import Image from "next/image"
//import round bullet point icon from react-icons
import { FaCircle } from "react-icons/fa"
import { Badge } from "./ui/badge"
import Link from "next/link"

export default async function Hero ({title, date, description, image, tags, link, ImgDes}:any){


    return (
        <section className="w-full xl:h-[60vh]  flex flex-col gap-6 xl:gap-8 xl:flex-row">
            <Image className=" rounded-md" src={image} alt={ImgDes} width={800} height={800} />
            <HeroInfo Title={title} Dates={date} Description={description} Tags={tags} Links={link} />
        </section>
    )
}

function HeroInfo({Dates, Title, Description, Tags, Links}:any){
    return (
        <div className="flex w-full xl:h-full p-2 flex-col xl:gap-8 gap-8 justify-center content-center">
            <div className="flex flex-row font-extrabold xl:gap-4 gap-2 self-start justify-center content-center" >
                <div className="date">
                    <p className="xl:text-xl text-lg text-gray-400">{Dates}</p>
                </div>
                <div className="bullet self-center">
                    <FaCircle  style={
                        {
                            color : "#FF7A00",
                        }
                    } />
                </div>
                <div className="category">
                    <p className="text-xl text-gray-400">{Tags[0]}</p>
                </div>
            </div>
            <h1 className="scroll-m-2 xl:text-6xl text-4xl font-bold tracking-tight lg:text-5xl">
                    {Title}
            </h1>
            <p className="leading-7 font-thin text-muted-foreground [&:not(:first-child)]:mt-1">
               {Description}
               </p>
            <div className="flex flex-row gap-4">
                {Tags.map((tag:any) => (
                    <Badge key={tag} style={
                        {
                            color : "#FF7A00",
                            backgroundColor: "white",
                            borderColor : "#FF7A00"
                            
                        } }>{tag}</Badge>
                ))}
                
            </div>

            <Button className="font-bold  rounded-lg p-4 text-lg text-white" asChild>
                <Link href={`/posts/${Links}`}>Read More</Link>
            </Button>
       
        </div>
    )
}