import { FaCircle } from "react-icons/fa";
import { Badge } from "./ui/badge";
import Image from "next/image";

interface blogitemprops {
    title : string;
    date : string;
    category : string;
    tags : string[];
}


export default function BlogItem({title,date,category,tags}:blogitemprops){


    function getrandombetween1and4(){
        return Math.floor(Math.random() * 4) + 1;
    
    }
    return (
        <div className=" rounded-sm blogitem cursor-pointer p-2  flex flex-col gap-4">
            <Image className=" rounded-md" alt="placeholder" src={`/placeholder${getrandombetween1and4()}.jpg`} width={550} height={550} />
            <h3 className="text-2xl text-black font-bold">{title}</h3>
            <p className="text-gray-600 font-thin">DJ tools are becoming more and more expensive due to short blaj </p>
            {/*horizontal line that scales from 20% to 100% and changes colo when the blogitem is hovered*/}
            <div className="w-20 line bg-gray-300 h-1 transition-all duration-300  transform  hover:bg-[#FF7A00]"></div>

            <div className="flex flex-row w-[45%] justify-between">
                <div className="date">
                        <p className="text-xl text-gray-400">{date}</p>
                    </div>
                    <div className="bullet self-center">
                        <FaCircle  style={
                            {
                                color : "#FF7A00",
                            }
                        } />
                    </div>
                    <div className="category">
                        <p className="text-xl text-gray-400">{category}</p>
                    </div>
            </div>
            <div style={
                {
                    //hide the scrollbar for overflow-x-scroll
                    scrollbarWidth: "none",
                }
            } className="flex w-full overflow-x-scroll flex-row gap-4">
                {tags.map((tag,index) => {
                    return (
                        <Badge key={index} style={
                            {
                                color : "#FF7A00",
                                borderColor : "#FF7A00"
                                
                            }
                        } variant={'outline'} className="hover:text-black border-2 cursor-pointer">{tag}</Badge>
                    )
                })}
            </div>
            <div className="line2 w-0 bg-gray-300 h-1 transition-all duration-300  transform  hover:bg-[#FF7A00]"></div>

         
        </div>
    )
}