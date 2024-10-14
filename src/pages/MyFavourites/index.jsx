import Exs from "../../components/Exploreslide/Exs"
import Number from "../../components/FvrtNumber/number"
import Remove from "../../components/Myfvrt_remove/Remove"
import './my-favourites.css'

const MyFavourites = () => {
  return (
    <div className="main_fvrt">
        <div className="header_fvrt">
          <p className="pfvt">Good morning Charlie!</p>
          <p className="pfvr">You have short listed 8 events to join later.</p>
        </div>
        <div className="remove_fvrt">
          <Remove/>
          <Remove/>
        </div>
       <div className="Exs_swipper">
        <h2>Charlie, we have find some recommendation for you</h2>
        <div className="EXs">
        <Exs/>
        </div>
        <div className="num_hrt">
          <Number/>
        </div>
         
        </div>

    </div>
  )
}
export default MyFavourites