interface categoryTitleType {

    articles: {
        id: string;
        title: string;
        description: string;
        link: string;
        imageUrl: string;
    }[];
    title: string;


}


const Selectetnews = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
    const data = await res.json();
    const newsdata = data.data;
    const slinewdata = newsdata.slice(1);
    const filter = slinewdata.filter((item: categoryTitleType) => item.title !==  'বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!'&& item.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!" && item.title !== "সামাজিক মাধ্যমে বিবিসি বাংলা") as categoryTitleType[];
    console.log(filter)


    console.log(slinewdata)



    return (
        <div className="mt-4">
            {/* title */}
            <div  >
                {
                    filter.map((data: categoryTitleType) => <div key={data.title} >
                        <h2 className="font-bold">{data.title}</h2>
                        <hr className="border-b-2 my-4 border-red-600" />
                        {/* catogeri arr prer section */}

                        {
                            data.articles.filter(category=> !category.title.includes("বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!")).map((aricle) => <h2 key={aricle.id}>{aricle.title}</h2>)


                        }
                    </div>)

                }



            </div>



        </div>
    )
}

export default Selectetnews