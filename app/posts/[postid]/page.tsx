import Image from "next/image";
import client from "@/lib/client";
import { Badge } from "@/components/ui/badge";
import { FaCircle, FaFacebook, FaInstagram, FaTwitter, FaLink } from "react-icons/fa";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { format } from "date-fns";
import type { Metadata, ResolvingMetadata } from 'next'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ShareArticle from "@/components/sharearticle";
import Link from "next/link";
 
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const id = params.postid;
  const Data : any = await client.getEntry(id);

  const imgUrl = "https:" + (Data.fields.image?.fields?.file?.url || "");
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  //splice the title plus full title to get the array of keywords
  const keywords = Data.fields.title.split(" ").concat(Data.fields.title)
  
  return {
    title: String(Data.fields.title),
    description: String(Data.fields.description),
    
    keywords:keywords ,
    openGraph: {
      title: String(Data.fields.title),
      description: String(Data.fields.description),
      type: "website",
      url: `https://bestdjguides.com/posts/${id}`,
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
  const Data : any = await client.getEntry(postid);

  const imgUrl  = "https:" + (Data.fields.image?.fields?.file?.url || "");

  return (
    <div className="w-screen flex flex-col content-center">
     
      <main className="xl:w-[78%] p-1 xl:p-4 w-full  justify-center my-2 flex-col gap-8 flex xl:gap-12  self-center">
        <div className="head flex flex-col self-center w-full content-center justify-center gap-10">
          

          
          <Image
            className=" self-center"
            src={imgUrl}
            width={1000}
            height={1000}
            alt={""}
          />
          <h1 className="scroll-m-20 self-center xl:text-3xl text-3xl font-bold tracking-tight lg:text-5xl">
            {String(Data.fields.title)}
          </h1>
        <div className=" flex xl:flex-row flex-col xl:gap-0 gap-4 xl:justify-between justify-center content-center">
        <div className="flex flex-row gap-1 xl:gap-2">
                { Data.fields.category.map((tag:any) => (
                    <Badge key={tag} style={
                        {
                            color : "#FF7A00",
                            backgroundColor: "white",
                            borderColor : "#FF7A00"
                            
                        } }>{tag}</Badge>
                ))}
                
            </div>
                
                

            <Link href={'/about'} className="flex flex-row justify-center gap-2 content-center">
              <Avatar className="self-center">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DN</AvatarFallback>
                        </Avatar>
                <p className="self-center font-bold">DJ Niorich</p>
            </Link>

            <div className="flex flex-row self-end font-extrabold gap-2 xl:self-start justify-center content-center">
              <div className="date">
                <p className="xl:text-lg text-sm text-gray-400">
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
                <p className="xl:text-lg text-sm text-gray-400">
                  {String(Data.fields.mainCategory)}
                </p>
              </div>
            </div>
           
          </div>
        </div>



        <div className="flex  w-full flex-row justify-center gap-12">
          <div className="share sticky flex-col justify-ceneter gap-5">
          <h4 className="scroll-m-20 self-center text-lg text-nowrap text-[#FF7A00] tracking-tight">
     Share article
    </h4>
                  <ShareArticle url={"https://www.bestdjguides.com/posts/"+postid} />
            
          </div>
          <div className="content w-[80%]">
          
            {documentToReactComponents(Data.fields.post)}
          </div>
        </div>
      </main>
    </div>
  );
}
export interface breadcrumProps {
  links: string[];
}
