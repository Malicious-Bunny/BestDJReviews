//import social media icons facebook, twitter, instagram,  from react-icons/fa

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer(){
    return (
        <footer className="w-full xl:p-0 p-3 mt-auto flex xl:flex-row flex-col content-center justify-center bg-[#0F172A] xl:h-[5vh]">

            <div className=" flex xl:gap-0 gap-4 xl:flex-row flex-col self-center xl:w-2/4 justify-between content-center">
                <div className="flex flex-row gap-1">
                    <p className="text-white">©2024 DJ News</p>
                </div>
                <div className="flex self-center flex-row gap-4">
                   
                   <FaFacebook style={
                       {
                           color : "#FF7A00",
                       }
                   } />
                   <FaTwitter style={
                       {
                           color : "#FF7A00",
                       }
                   } />
                   <FaInstagram style={
                       {
                           color : "#FF7A00",
                       }
                   } />
               </div>
            </div>
           
        </footer>
    )
}