//import social media icons facebook, twitter, instagram,  from react-icons/fa

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer(){
    return (
        <footer className="w-full mt-auto flex flex-row content-center justify-center bg-[#0F172A] h-[5vh]">

            <div className=" flex flex-row self-center w-2/4 justify-between content-center">
                <div className="flex flex-row gap-1">
                    <p className="text-white">©2024 DJ News</p>
                    <p className="text-white">|</p>
                    <p className="text-white">Privacy</p>
                    <p className="text-white">|</p>
                    <p className="text-white">Terms</p>
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