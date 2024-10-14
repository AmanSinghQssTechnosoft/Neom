import { SliderCardData } from "../../MockData";
import Rslide from "../Recoslide/Rslide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Number.css";

const Number = () => {
  return (
    <div className="num_card">
      {SliderCardData.map((event, index) => (
        <div className="num_main" key={index}>
          <div className="main_num">
            <Rslide event={event} />
          </div>
          <div className="numimg">
            <img src={`./img/${index + 1}.svg`} alt="" />
          </div>
          <div className="icon_main">
            <FontAwesomeIcon
              icon={faHeart}
              className="heart-icon"
              style={{
                fontSize: "24px",
                stroke: "white",
                strokeWidth: "40px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Number;
