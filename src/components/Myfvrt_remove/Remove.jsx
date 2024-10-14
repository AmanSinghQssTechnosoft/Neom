import { SliderCardData } from "../../MockData";
import Rslide from "../Recoslide/Rslide";
import './Remove.css';

const Remove = () => {
  const handleRemove = (index) => {
    
    console.log(`Remove event at index: ${index}`);

  };

  return (
    <div className="Remove_card">
      {SliderCardData.map((event, index) => (
        <div className="Remove_main" key={index}>
          <Rslide event={event} />
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Remove;
