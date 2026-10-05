import Mainkhbor from "@/components/Mainkhbor"



const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* grid 1 */}
      <div className="col-span-2">
        <Mainkhbor/>

      </div>
      {/* grid 2 */}
      <div className="col-span-1">

      </div>

      

    </div>
  )
}

export default Home