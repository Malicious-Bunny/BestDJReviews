import BlogItem from "./blogitem"


export default function Blogsection({BlogsItems}:any){
    
    return (
        <section
        
        style={
            {
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "2rem",
            }
        }
        
        className=" grid w-full">
           {
                BlogsItems.map((item: any) => (
                     <BlogItem key={item.sys.id} title={item.fields.title} date={item.fields.date} image={`https:${item.fields.image.fields.file.url}`} desc={item.fields.description} ImgDes={item.fields.image.fields.description} category={item.fields.category} link={item.sys.id} mainCat={item.fields.mainCategory} />
                ))
           } </section>
    )
}