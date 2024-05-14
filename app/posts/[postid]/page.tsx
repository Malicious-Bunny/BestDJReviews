import Image from "next/image"
 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { FaCircle } from "react-icons/fa"
export default function Page() {
    return ( 
        <div className="w-screen flex flex-col content-center">
            
            <main className="xl:w-[78%] p-4 w-full  justify-center my-4 flex-col flex xl:gap-20  self-center">
           
           
            <div className="head flex flex-col self-center content-center justify-center gap-8">
                <Linkcrumb  links={["home","posts","page"]} />

                <h1 className="scroll-m-20 self-center xl:text-6xl text-3xl font-bold tracking-tight lg:text-5xl">
                        DJ tools becoming extremely pricy and heres why
                </h1>
                  <Image className=" self-center" src="/djhero.jpg" width={1000} height={800} alt={""} />
           <div className=" flex flex-row justify-between content-center">
            <div className="badges gap-2 flex flex-row ">

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
            </div>
            <div className="flex flex-row font-extrabold gap-4 self-start justify-center content-center" >
                <div className="date">
                    <p className="xl:text-lg text-md text-gray-400">April 24,2024</p>
                </div>
                <div className="bullet self-center">
                    <FaCircle  style={
                        {
                            color : "#FF7A00",
                        }
                    } />
                </div>
                <div className="category">
                    <p className="xl:text-lg text-md text-gray-400">News</p>
                </div>
            </div>
           </div>
           
            </div>
            </main>
        </div>
    )
}
export interface breadcrumProps {
    links : string[]
}

export function Linkcrumb(links:breadcrumProps){
    return (
        <>
         <Breadcrumb className="self-center text-xl">
      <BreadcrumbList className=" text-[#FF7A00] text-lg xl:text-xl">
        {links.links.map((link) => (
          <BreadcrumbItem key={link}>
            <BreadcrumbLink href={`/${link}`}>{link}</BreadcrumbLink>
        {links.links.indexOf(link) === links.links.length - 1 ? null : <BreadcrumbSeparator/>}
            </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb></>
    )
}