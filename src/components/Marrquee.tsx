import Marquee from "react-fast-marquee";

interface HeadlineType {
  id: string;
  title: string;
}

const Marrquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news");
  const data = await res.json()
  const headline = data.data;
  const hadlineslice = headline.slice(0, 15)
  console.log(hadlineslice)

  return (
    <div className=" bg-red-900 my-4 ">
      <div className="container mx-auto flex   ">
        <div> <h2 className="bg-red-900 text-white px-4 py-2 font-bold">সর্বশেষ</h2>
        </div>
        <div className="flex items-center bg-red-700 text-white  overflow-hidden">
          <Marquee speed={130}>

          {
            hadlineslice.map((hadline: HeadlineType) => <h4 key={hadline.id} className="font-bold "><span className="mr-2 ml-3">●</span >{hadline.title}</h4>)
          }
          </Marquee>

        </div>
      </div>

    </div>
  )
}

export default Marrquee