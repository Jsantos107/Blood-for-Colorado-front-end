import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPoint from './LocationPoint.js'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.8267,
      lng: -105.7821
    },
    zoom: 7
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDMfXFhE7DW1KkdD44LprXEFk5VnNO16Xo"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
