import { Button } from "./ui/button"
import Image from "next/image"
//import round bullet point icon from react-icons
import { FaCircle } from "react-icons/fa"
import { Badge } from "./ui/badge"

export default function Hero (){


    return (
        <section className="w-full h-[60vh]  flex flex-col gap-6 xl:gap-8 xl:flex-row">
            <Image className=" rounded-md" src="/djhero.jpg" alt="hero" width={800} height={800} />
            <HeroInfo />
        </section>
    )
}

function HeroInfo(){
    return (
        <div className="flex w-full h-full p-2 flex-col xl:gap-8 gap-6 justify-center content-center">
            <div className="flex flex-row  font-extrabold xl:gap-4 gap-2 self-start justify-center content-center" >
                <div className="date">
                    <p className="xl:text-xl text-lg text-gray-400">April 24,2024</p>
                </div>
                <div className="bullet self-center">
                    <FaCircle  style={
                        {
                            color : "#FF7A00",
                        }
                    } />
                </div>
                <div className="category">
                    <p className="text-xl text-gray-400">News</p>
                </div>
            </div>
            <h1 className="scroll-m-2 xl:text-6xl text-4xl font-bold tracking-tight lg:text-5xl">
                    DJ tools becoming extremely pricy and heres why
            </h1>
            <p className="leading-7 font-thin text-muted-foreground [&:not(:first-child)]:mt-1">
                DJ tools are becoming more and more expensive as the years go by. This is due to the fact that the demand for DJ tools is increasing. DJ tools are becoming more and more popular as the years go by. This is due to the fact that the demand for DJ tools is increasing. DJ tools are becoming more and more popular as the years go by. This is due to the fact that the demand for DJ tools is increasing. DJ tools are becoming more and more popular as the years go by. This is due to the fact that the demand for DJ tools is increasing.
            </p>
            <div className="flex flex-row gap-4">
                <Badge style={
                    {
                        color : "#FF7A00",
                        borderColor : "#FF7A00"
                        
                    }
                } variant={'outline'} className="hover:text-black border-2 cursor-pointer">Music</Badge>
                
                <Badge style={
                    {
                        color : "#FF7A00",
                        borderColor : "#FF7A00"
                        
                    }
                } variant={'outline'} className="hover:text-black border-2 cursor-pointer">DJ</Badge>

                <Badge style={
                    {
                        color : "#FF7A00",
                        borderColor : "#FF7A00"
                        
                    }
                } variant={'outline'} className="hover:text-black border-2 cursor-pointer">Tech</Badge>
            </div>

            <Button className="font-bold  rounded-lg p-4 text-lg text-white">Read More</Button>
        </div>
    )
}