import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function Newsletter(){

    return (
        <section style={
            {
                border: "1px solid #FF7A00",
            }
        } className="w-full mt-auto bg-[#FFF5EF] border-8 h-[40vh] flex-col  flex justify-center content-center">
        <div className=" flex flex-col gap-8 self-center justify-center content-center">
            <div className=" flex gap-2 justify-center content-center flex-col">
                <h1 className="scroll-m-20 text-3xl  tracking-tight lg:text-5xl">
                        Subscribe to our newsletter
                </h1>
                <p className="text-sm self-center text-muted-foreground">Get frequent updates and coupons</p>
            </div>
            <div className="flex w-full justify-center content-center flex-col gap-4">
                <Input className=" bg-white text-xl border" placeholder="Your e-mail" />
                <Button className="font-bold  rounded-xl w-1/2 self-center p-5 text-lg text-white">Subscribe Now</Button>
            </div>
            </div>
        </section>
    )
}