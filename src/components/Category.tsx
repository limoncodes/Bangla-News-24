interface CategoryType {

    scrapable: boolean;
    slug: string;
    title: string;
    topicId: string;
    url: string
}
const Category = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const categorydata = data.data
    const filterCategory = categorydata.filter((item:CategoryType) => item.scrapable === true)
    
    return (
        <div className="flex items-center ml-120 gap-4">
            {
                filterCategory.map((category:CategoryType,index:number)=><div key={index}>
                    <p className="text-[##737373] text-lg">{category.title}</p>

                </div> )
            }


        </div>
    )
}

export default Category