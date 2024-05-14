'use client'
import {useState} from "react"
import Link from "next/link"
//import hamburger icon from react-icons
import { FaBars } from "react-icons/fa"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
//import vertical lines hamburger menu from react icons




export default function Header (){
    const linkList  = {
        "Home" : "/",
        "Tips" : "/tips",
        "News" : "/news",
        "Reviews" : "/reviews",
        "About" : "/about",
    }
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className=" bg-primary text-background max-w-full py-4 text-lg flex flex-row justify-between content-center">
            <div className="logo xl:w-2/5 w-2/5 p-4  flex flex-row content-center justify-center text-white bg-black rounded-r-full">
                <h1 className="self-center">Logo</h1>
            </div>

            <nav className="xl:flex hidden flex-row">
                {Object.entries(linkList).map(([key, value]) => (
                    <Link className="p-6 hover:underline-offset-4 hover:underline" href={value} key={key}>
                        {key}
                    </Link>
                ))}
            </nav>
            {/* menu invisible on large screens and visible on mobile screens, shows up when you tap the menu icon*/}
            <div className={` ${menuOpen==false?"hidden":"flex"} flex-col gap-5 p-5 absolute top-[5.8rem] bg-[#FF7A00]  w-screen `}>
                <div className="flex text-center bg-black p-4 w-full rounded-md content-center justify-center">
                        Logo
                </div>
                <div className="flex flex-col text-center bg-black  p-4 w-full rounded-md content-center justify-center">
                {Object.entries(linkList).map(([key, value]) => (
                    <Link className="p-6 text-[#FF7A00] text-3xl hover:underline-offset-4 hover:underline" href={value} key={key}>
                        {key}
                    </Link>
                ))}
                </div>
                <div className="flex bg-black  content-center rounded-md justify-between w-full self-center flex-row p-4">
                   
                   <FaFacebook className="text-white w-5 h-5"/>
                   <FaTwitter className="text-white w-5 h-5"/>
                   <FaInstagram className="text-white w-5 h-5" />
               </div>
               <div onClick={
                ()=>{return setMenuOpen(!menuOpen)}
            }  className="flex cursor-pointer rounded-full p-3 bg-black self-center">
               <div className="flex rounded-full p-1 bg-[#FF7A00] self-center">
                <IoClose className="w-7 h-7 text-black"/>
                </div>
               </div>
            </div>
            <div onClick={
                ()=>{return setMenuOpen(!menuOpen)}
            } className=" cursor-pointer self-center mr-3 xl:hidden ">
                <div className="round hover:cursor-pointer gap-2 p-4 rounded-2xl bg-black flex flex-row content-center justify-center">
                   <span className="self-center">Link</span>
                    <FaBars  style={
                        {
                            color : "#FF7A00",
                        }
                    } className="self-center w-5 h-5" />
                </div>
            </div>

        </header>
    )
}