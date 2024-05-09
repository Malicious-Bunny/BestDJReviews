import Header from "@/components/header";
import Hero from "@/components/hero";
import Blogsection from "@/components/blogsection";

export default function Page() {

    return (
        <div className="w-screen flex flex-col content-center">
            
            <main className="w-[76%] my-16 flex-col flex gap-20  self-center">
                <Hero />
                <Blogsection />
            </main>
        </div>
    )
}