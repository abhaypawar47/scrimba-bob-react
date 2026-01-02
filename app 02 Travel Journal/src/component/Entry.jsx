import "./Entry.css";

function Entry(props) {
  return (
    <article>
      <div className="container text-center">
        <div className="row">
          {/* Column 1 */}
          <div className="col-4 place-img">
            <img src={props.img} className="img-fluid" alt={props.title} />
          </div>

          {/* Column 2 */}
          <div className="col-8">
            <div className="row location">
              <div className="location-item">
                <img id="pin-img" src="/pin.jpg" alt="Location pin" />
                <span>{props.country}</span>
                <a
                  href={props.mapLocation}
                  className="map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="row place-heading">{props.title}</div>
            <div className="row">{props.dates}</div>
            <div className="row place-info">
              <p>{props.info}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Entry;
