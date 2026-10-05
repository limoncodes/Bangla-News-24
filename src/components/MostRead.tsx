interface ItemdataType {
    id: string;
    title: string
}

const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json()
    const mostreaddata = data.data
   
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 w-full max-w-md">
            <h2 className="text-xl font-bold text-black mb-4">
                সর্বাধিক পঠিত
            </h2>

            {mostreaddata.map((item: ItemdataType, index: number) => (
                <div key={item.id} className="flex items-start gap-3 mb-3">
                    <span className="text-red-500 text-xl font-normal leading-7 ">
                        {index + 1}
                    </span>

                    <h2 className="text-[16px] leading-6 text-black font-medium">
                        {item.title}
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default MostRead