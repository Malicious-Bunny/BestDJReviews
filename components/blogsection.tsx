import BlogItem from "./blogitem"


export default function Blogsection(){
    
    return (
        <section
        
        style={
            {
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "2rem",
            }
        }

        className=" grid w-full">
           {/*generate different blog items with different titles, dates, categories and tags*/}
            <BlogItem title="DJ tools becoming extremely pricy and heres why" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
            <BlogItem title="The best DJ tools in the market" date="April 24,2024" category="News" tags={["Music","DJ"]} />
        </section>
    )
}