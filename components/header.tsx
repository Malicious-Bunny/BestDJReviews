import Link from "next/link"
//import hamburger icon from react-icons
import { FaBars } from "react-icons/fa"
//import vertical menu icon from react-icons



export default function Header (){
    const linkList  = {
        "Home" : "/",
        "Tips" : "/tips",
        "News" : "/news",
        "Reviews" : "/reviews",
        "About" : "/about",
    }

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
            
            <div className="  self-center mr-3 md:hidden ">
                <div className="round hover:cursor-pointer gap-2 p-4 rounded-2xl bg-black flex flex-row content-center justify-center">
                   <span className="self-center">Link</span>
                    <FaBars style={
                        {
                            color : "#FF7A00",
                        }
                    } className="self-center" />
                </div>
            </div>

        </header>
    )
}