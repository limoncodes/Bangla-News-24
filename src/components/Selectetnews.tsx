import Image from "next/image";
import Link from "next/link";

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
    const filter = slinewdata.filter((item: categoryTitleType) => item.title !== 'বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!' && item.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!" && item.title !== "সামাজিক মাধ্যমে বিবিসি বাংলা") as categoryTitleType[];







    return (
        <div className="mt-4">
            {/* title */}
            <div  >
                {
                    filter.map((data: categoryTitleType) => <div key={data.title} >
                        <h2 className="font-bold">{data.title}</h2>
                        <hr className="border-b-2 my-4 border-red-600" />
                        {/* catogeri arr prer section */}

                        <div className="grid grid-cols-3 gap-3">
                            {
                                data.articles.map((item) => <div key={item.id}>
                                    <Link href={`/fullarticle/${item.id}`}>
                                        <div className="card bg-base-100 w-78 shadow-sm my-5">
                                            <figure>

                                                <Image
                                                    width={600}
                                                    height={600}
                                                    src={item.imageUrl}
                                                    alt={item.imageUrl} />
                                            </figure>
                                            <div className="card-body">

                                                <h2 className="card-title font-bold text-xl">{item.title}</h2>
                                                <p className="text-shadow-amber-50 ">{item.description}</p>

                                            </div>
                                        </div>

                                    </Link>

                                </div>)



                            }
                        </div>
                    </div>)

                }



            </div>



        </div>
    )
}

export default Selectetnews