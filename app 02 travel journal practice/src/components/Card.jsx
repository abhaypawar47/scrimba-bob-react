import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Column 1 : 40% */}
          <div className="col-md-5 p-0">
            <img
              src={props.img}
              alt="Vertical Image"
              className="img-fluid h-100 w-100 object-fit-cover pimg"
            />
          </div>

          {/* Column 2 : 60% */}
          <div className="col-md-7">
            {/* Row 1 */}
            <div className="row mb-3">
              <div className="col ">
                {" "}
                <span className="country-name">📌 {props.country} </span>
                <span>
                  <a href={props.mapLocation}> view on a Google Map</a>
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row mb-3">
              <div className="col">
                <p className="pname">{props.placeName}</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row mb-3">
              <div className="col">
                <p>
                  {props.startDate} To {props.endDate}
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="row">
              <div className="col">
                <p className="info">{props.info}</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <hr />
      </div>
    </>
  );
}

export default Card;
