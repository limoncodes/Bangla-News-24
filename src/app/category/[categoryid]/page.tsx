import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
    category: string;
    description: string;
    id: string;
    imageAlt: string;
    imageUrl: string;
    title: string;




}

const CategoryID = async ({ params }: { params: Promise<{ categoryid: string }> }) => {
    const { categoryid } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`)
    const data = await res.json()
    const categorydata = data.data




    return (
        <div>
            <h2 className="font-bold text-2xl">{data.title}</h2>
            <hr className="text-red-700 border-2 my-4" />

            <div className="grid grid-cols-3 gap-4 my-4">
                {
                    categorydata.map((item: CategoryItem) => <div key={item.id} >
                        <Link href={`/fullarticle/${item.id}`}>
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

                        </Link>

                    </div>)
                }
            </div>



        </div>
    )
}

export default CategoryID