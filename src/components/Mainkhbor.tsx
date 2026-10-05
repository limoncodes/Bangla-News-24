import Image from "next/image";
interface ItemType {
    category: string;
    description: string;
    id: string;
    imageAlt: string;
    imageUrl: string
    title: string;

}

const Mainkhbor = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
    const data = await res.json()
    const newsdata = data.data;

    const homedata = newsdata[0]
    const slicedata = homedata.articles.slice(0, 1)
    const slicedata2 = homedata.articles.slice(1, 5)
    

    return (
        <div className=" flex justify-between   gap-4 ">
            {/* div1 */}
            <div>
                {
                    slicedata.map((item: ItemType) => <div key={item.id}>
                        <div className="card bg-base-100 w-120 shadow-sm">
                            <figure>

                                <Image
                                    width={600}
                                    height={600}
                                    src={item.imageUrl}
                                    alt={item.imageAlt} />
                            </figure>
                            <div className="card-body">
                                <h3 className="text-red-600 font-bold text-sm">{item.category}</h3>
                                <h2 className="card-title font-bold text-xl">{item.title}</h2>
                                <p className="text-shadow-amber-50 ">{item.description}</p>

                            </div>
                        </div>


                    </div>)
                }


            </div>
            {/* div2 */}
            <div className="w-full max-w-120 overflow-hidden rounded-lg border border-[#E1E1E1] bg-white">
                {slicedata2.map((item: ItemType, index: number) => (
                    <div key={item.id}>
                        <div
                            className={`px-3 py-4 ${index !== slicedata2.length - 1
                                    ? "border-b border-[#E1E1E1]"
                                    : ""
                                }`}
                        >
                            <p className="mb-1 text-[14px] leading-3.5 text-red-600">
                                {item.category}
                            </p>

                            <h2 className="text-[18px] font-medium leading-[1.55] text-black">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>


        </div>

     
    )
}

export default Mainkhbor