import React from "react";

class LocationCard extends React.Component {
  //your bot army code here...

  renderLocations = (locations) => {
    return locations.map(location => {
      return (
        <div className="location-container">
        <div className="locations">
          <h2>{location.name}</h2>
          <p>{location.phone}</p>
          <p>{location.address}</p>
          <p>{location.address2}</p>
          <p className="location-type">Location Type: {location.location_type}</p>
          <a href={location.source} alt={location.name}>{location.source}</a>
        </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="location">
        {this.renderLocations(this.props.locations)}
      </div>
    );
  }

};

export default LocationCard;
