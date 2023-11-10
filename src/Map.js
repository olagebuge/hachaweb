import React from "react";

const Map = () => {
  return (
    <section className="map">
      <h2 className="h2Title">
        <i class="fa-solid fa-map-location-dot"></i> Google Map導航
      </h2>
      <div className="mapBlock">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7287.062878417906!2d120.58751000000001!3d24.047583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469387e08a943e5%3A0x702d9447ea914710!2z5ZOI6Iy26K6a!5e0!3m2!1szh-TW!2stw!4v1690016306941!5m2!1szh-TW!2stw"
                   
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>
    </section>
  );
};

export default Map;
