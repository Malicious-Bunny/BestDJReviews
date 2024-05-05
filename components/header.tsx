import Link from "next/link"
//import hamburger icon from react-icons
import { FaBars } from "react-icons/fa"

export default function Header (){
    const linkList  = {
        "Home" : "/",
        "Tips" : "/tips",
        "News" : "/news",
        "Reviews" : "/reviews",
        "About" : "/about",
    }

    return (
        <header style={
            {
                backgroundColor : "#FF7A00",
                color: "white",
            }
        } className=" w-full text-lg flex flex-row justify-between content-center">
            <div className="logo w-2/5 p-6 flex flex-row content-center justify-center text-white bg-black rounded-r-full">
                <h1>Logo</h1>
            </div>

            <nav className="w-1/5 flex flex-row">
                {Object.entries(linkList).map(([key, value]) => (
                    <Link className="p-6 hover:underline-offset-4 hover:underline" href={value} key={key}>
                        {key}
                    </Link>
                ))}
            </nav>

            <div className="p-3 mr-4">
                <div className="round hover:cursor-pointer p-3 rounded-full bg-white flex flex-row content-center justify-center">
                    <FaBars style={
                        {
                            color : "#FF7A00",
                        }
                    } className="" />
                </div>
            </div>

        </header>
    )
}