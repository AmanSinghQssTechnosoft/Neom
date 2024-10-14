import "./Rcard.css";

const Rcard = ({ event }) => {
  if (!event) {
    return <div>No event data available</div>;
  }
  const {
    url,
    Event_Name,
    Seat_Booking_Availability,
    Event_Start_Date,
    Overall_Event_Rating,
  } = event;

  return (
    <div className="reco_card">
      <div className="reco_img">
        <img src={url} alt="Event" />
      </div>
      <div className="reco_info">
        <div>
          <p>{Event_Name}</p>
        </div>
        <p>Number of seat:{Seat_Booking_Availability}</p>
        <p>{Event_Start_Date}</p>
        <p>You rated event: {`+${Overall_Event_Rating}`}</p>
      </div>
    </div>
  );
};

export default Rcard;
