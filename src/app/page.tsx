import Mainkhbor from "@/components/Mainkhbor"
import MostRead from "@/components/MostRead"
import Selectetnews from "@/components/Selectetnews"



const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-10 ">
      {/* grid 1 */}
      <div className="col-span-2">
        <Mainkhbor/>
        <Selectetnews/>

      </div>
      {/* grid 2 */}
      <div className="col-span-1">
        <MostRead/>

      </div>

      

    </div>
  )
}

export default Home