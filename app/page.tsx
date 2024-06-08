'use client'

import Hero from "@/components/hero";
import Blogsection from "@/components/blogsection";
import client from "@/lib/client";
import { useEffect } from "react";

async function getData(){

    const MainUrl = 'https://cdn.contentful.com/spaces/yqf5x6omucvn/environments/master/entries/AnK2qvSnHRIROQdUTDE4m?access_token=u5YLhoRiw6rnI_Qt0FMsHLfIcTnpxBQAD3yPSN9M72s'

    const res = await fetch(MainUrl)
    const data = await res.json()

    return data

}
export default function Page() {
    //fetching posts with the contentful client
    
   useEffect(() => {
    getData()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
   }, [])
   
    return (
        <div className="w-screen flex flex-col content-center">
            
            <main className="xl:w-[76%] p-4 w-full xl:my-12 flex-col flex gap-16  self-center">
                <Hero />
                <Blogsection />
            </main>
        </div>
    )
}