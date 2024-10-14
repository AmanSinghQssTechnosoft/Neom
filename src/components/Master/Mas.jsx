import { RecommendationBannerData } from "../../MockData";
import Rcard from "../Rescard/Rcard";
import './Mas.css';

const Mas = () => {
  console.log(RecommendationBannerData);
  return (
    <div className="RecommendationBanner">
      {RecommendationBannerData.slice(0, 5).map((event, index) => {
        return (
          <Rcard key={index} event={event} />
        );
      })}
    </div>
  );
};

export default Mas;
