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


    console.log(slinewdata)



    return (
        <div className="mt-4">
            {/* title */}
            <div  >
                {
                    slinewdata.map((data: categoryTitleType) => <div key={data.title} >
                        <h2 className="font-bold">{data.title}</h2>
                        <hr className="border-b-2 my-4 border-red-600" />
                        {/* catogeri arr prer section */}

                        {
                            data.articles.map((aricle) => <h2 key={aricle.id}>{aricle.title}</h2>)


                        }
                    </div>)

                }



            </div>



        </div>
    )
}

export default Selectetnews