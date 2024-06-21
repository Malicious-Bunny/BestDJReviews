import { FaCircle } from "react-icons/fa";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { format } from "date-fns"
import Link from "next/link";



export default function BlogItem({title,date,image, desc, ImgDes,category,link, mainCat}:any){
    //join post title with hyphens
    const postTitle = title.split(" ").join("-");

    return (
        <Link href={`/posts/${link}`} className=" rounded-sm blogitem cursor-pointer p-2  flex flex-col gap-4">
        
                <Image className=" rounded-md" alt={ImgDes} src={image} width={550} height={550} />


            <h3 className="text-2xl text-black font-bold">{title}</h3>
            <p className="text-gray-600 font-thin">{desc}</p>
            {/*horizontal line that scales from 20% to 100% and changes colo when the blogitem is hovered*/}
            <div className="w-20 line bg-gray-300 h-1 transition-all duration-300  transform  hover:bg-[#FF7A00]"></div>

            <div className="flex flex-row w-[45%] justify-between">
                <div className="date">
                        <p className="text-md self-center text-gray-400">{format(date,'MMMM dd, yyyy')}</p>
                    </div>
                    <div className="bullet self-center">
                        <FaCircle  style={
                            {
                                color : "#FF7A00",
                            }
                        } />
                    </div>
                    <div className="category">
                        <p className="text-md self-center text-gray-400">{mainCat}</p>
                    </div>
            </div>
            <div style={
                {
                    //hide the scrollbar for overflow-x-scroll
                    scrollbarWidth: "none",
                }
            } className="flex w-full overflow-x-scroll flex-row gap-4">
                {category.map((category: string, index: number) => {
                    return (
                        <Badge key={index} style={
                            {
                                color : "#FF7A00",
                                borderColor : "#FF7A00"
                                
                            }
                        } variant={'outline'} className="hover:text-black border-2 cursor-pointer">{category}</Badge>
                    )
                })}
            </div>
            <div className="line2 w-0 bg-gray-300 h-1 transition-all duration-300  transform  hover:bg-[#FF7A00]"></div>

         
        </Link>
    )
}