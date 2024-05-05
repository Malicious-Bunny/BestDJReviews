import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Page() {

    return (
        <div className="w-screen flex gap-16 flex-col content-center">
            <Header />
            <main className="w-[80%] mt-6 self-center">
                <Hero />
            </main>
        </div>
    )
}