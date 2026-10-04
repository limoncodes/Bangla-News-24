import Image from "next/image"
import Category from "./Category"


const Navber = () => {
  const date = new Date()
  const localdate = date.toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })
  return (
    <div className="container mx-auto  ">
      <div className="grid grid-cols-2 my-4">
        {/* logo */}
        <div className="col-span-1 flex items-center justify-end gap-2">
          <Image src="/logo.webp" width={40} height={40} alt="Logo image" />
          <div>
            <h2 className="text-xl font-bold text-red-700">Bangla News 24</h2>
            <p className="text-[#737373] text-lg">{localdate}</p>
          </div>


        </div>
        {/* button */}
        <div className="col-span-1 flex items-center  gap-4 justify-end ">
          <button >সাইন ইন</button>
          <button className="btn bg-red-700  text-white">সাইন আপ</button>
        </div>
      </div>
      <Category/>

    </div>
  )
}

export default Navber