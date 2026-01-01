import "./Entry.css";

function Entry() {
  return (
    <article>
      <div className="container text-center">
        <div className="row">
          {/* column1 */}
          <div className="col-4 place-img">
            <img src="./japan.jpeg" class="img-fluid" alt="..."></img>
          </div>
          {/* column2 */}
          <div className="col-8">
            <div className="row location">
              <div className="location-item">
                <img id="pin-img" src="pin.jpg" alt="Location pin" />
                <span>JAPAN</span>
                <a href="#" className="map-link">
                  view on Google map
                </a>
              </div>
            </div>

            <div className="row place-heading">Mount Fuji</div>
            <div className="row">12 Jan 2023 - 24 Jan 2023</div>
            <div className="row place-info">
              <p>
                Mount Fuji (Fujisan) is Japan's tallest peak (3,776m), an active
                stratovolcano known for its iconic symmetrical cone, sacred
                status in Shinto and Buddhism, and inspiration for countless
                artworks, located about 100km southwest of Tokyo. A popular
                cultural and spiritual symbol, it's a UNESCO World Heritage
                site, attracting pilgrims and tourists for climbing, especially
                during the summer season, with its last eruption occurring in
                1707-1708.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Entry;
