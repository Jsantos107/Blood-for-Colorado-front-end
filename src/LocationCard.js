import React from "react";

class LocationCard extends React.Component {
  //your bot army code here...

  renderLocations = (locations) => {
    return locations.map(location => {
      return (
        <h2>{location.name}</h2>
        
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
