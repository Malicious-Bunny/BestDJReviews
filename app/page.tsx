import Header from "@/components/header";
import Hero from "@/components/hero";
import Blogsection from "@/components/blogsection";

export default function Page() {

    return (
        <div className="w-screen flex flex-col content-center">
            
            <main className="xl:w-[76%] p-4 w-full xl:my-16 flex-col flex gap-16  self-center">
                <Hero />
                <Blogsection />
            </main>
        </div>
    )
}