import Image from "next/image";
import client from "@/lib/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { FaCircle } from "react-icons/fa";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { format } from "date-fns";
import type { Metadata, ResolvingMetadata } from 'next'


 
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.postid
 
  // fetch data
  const Data = await client.getEntry(id);

  const imgUrl = "https:" + (Data.fields.image?.fields?.file?.url || "");
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: String(Data.fields.title),
    description: String(Data.fields.description),
    keywords: "DJ reviews, DJ performances, DJ equipment reviews, DJ events, DJ blog, Dj Tips, BestDjReviews Best DJ reviews, Best Dj tips, Tips as a DJ, DJ blog tips"+ Data.fields.title,
    openGraph: {
      title: String(Data.fields.title),
      description: String(Data.fields.description),
      type: "website",
      images: [
        {
          url: imgUrl,
          width: 1000,
          height: 1000,
          alt: String(Data.fields.title),
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourdjblog",
    },
  }
}

export default async function Page({ params }: any) {
  //get the post id from the params and fetch the data for that particular post
  const { postid } = params;
  const Data = await client.getEntry(postid);

  const imgUrl = "https:" + (Data.fields.image?.fields?.file?.url || "");

  return (
    <div className="w-screen flex flex-col content-center">
     
      <main className="xl:w-[78%] p-1 xl:p-4 w-full  justify-center my-2 flex-col gap-8 flex xl:gap-12  self-center">
        <div className="head flex flex-col self-center w-full content-center justify-center gap-6">
          

          <h1 className="scroll-m-20 self-center xl:text-3xl text-3xl font-bold tracking-tight lg:text-5xl">
            {String(Data.fields.title)}
          </h1>
          <Image
            className=" self-center"
            src={imgUrl}
            width={1000}
            height={1000}
            alt={""}
          />
        <div className=" flex flex-row justify-between content-center">
        <div className="flex flex-row gap-2">
                { Data.fields.category.map((tag:any) => (
                    <Badge key={tag} style={
                        {
                            color : "#FF7A00",
                            backgroundColor: "white",
                            borderColor : "#FF7A00"
                            
                        } }>{tag}</Badge>
                ))}
                
            </div>
                
                



            <div className="flex flex-row font-extrabold gap-4 self-start justify-center content-center">
              <div className="date">
                <p className="xl:text-lg text-md text-gray-400">
                  {format(String(Data.fields.date), "MMMM dd, yyyy")}
                </p>
              </div>
              <div className="bullet self-center">
                <FaCircle
                  style={{
                    color: "#FF7A00",
                  }}
                />
              </div>
              <div className="category">
                <p className="xl:text-lg text-md text-gray-400">
                  {String(Data.fields.mainCategory)}
                </p>
              </div>
            </div>
           
          </div>
        </div>



        <div className="content">
          {documentToReactComponents(Data.fields.post)}
        </div>
      </main>
    </div>
  );
}
export interface breadcrumProps {
  links: string[];
}

export function Linkcrumb(links: breadcrumProps) {
  return (
    <>
      <Breadcrumb className="self-center text-xl">
        <BreadcrumbList className=" text-[#FF7A00] text-lg xl:text-xl">
          {links.links.map((link) => (
            <BreadcrumbItem key={link}>
              <BreadcrumbLink href={`/${link}`}>{link}</BreadcrumbLink>
              {links.links.indexOf(link) === links.links.length - 1 ? null : (
                <BreadcrumbSeparator />
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
