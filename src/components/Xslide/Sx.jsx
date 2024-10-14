import "./Sx.css";
const Sx = ({ event }) => {
  const {
    url,
    Event_Start_Date,
    Event_Start_Time,
    Event_End_Time,
    Event_Detail_Title,

  } = event;
  console.log(event);

  return (
    <div className="newSlide">
      <div className="img_Sx">
        <img src='./img/holiday_0.png' alt="" />
      </div>
      <div className="txt_Sx">
        <h1>
          {Event_Start_Date} {Event_End_Time}
        </h1>
        <p>{Event_Start_Time}</p>
        <p>{Event_Detail_Title}</p>
      </div>
      <div className="txt_Sx2">
        <i className="fas fa-smile" style={{ color: '#61c27b', marginLeft: '5px', fontSize: '' }}></i>
          <p>Overwhelm</p>
        </div>
    </div>
  );
};

export default Sx;
