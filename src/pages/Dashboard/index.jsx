import Cslide from "../../components/Cor2/Cslide";
import Slide from "../../components/Corosal/Slide";
import Mas from "../../components/Master/Mas";
import Rc from "../../components/Reco/Rc";
import Mp from '../../components/Map1/Mp';
import './dashboard.css'

const Dashboard = () => {
  return (
     <div className="dashboard">
       <div className="content">
        <div className="carousel-1">
         <h1 className="carousel-heading">Good morning Charlie!</h1>
        <p className="carousel-desc">
           Below listed are your itineraries, have a look to the timings and
           the location.
          <br/>
        We wish you to enjoy the activities and the weather!</p>
           <Slide />
         </div>
         <Cslide />

       </div>
        <div className="main_reco">
        <div className="recomnd">
        <p>Today recommendations for you, Charlie!</p>
       </div>

        <Rc/>
        </div>
        <div className="main_charli">
          <div className="charlitext">
          <p>Charlie, here is your master journey with us so far</p>
          </div>
          <div className="charli_div">
             <Mas/>
          </div>
        </div>
      <div className='leflet'>
        <div className="leftxt">
            <h1>Find events on map</h1>
        </div>
        <Mp />
        </div>
      
     </div>
  );
};
export default Dashboard;
