import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const API_KEY = process.env.REACT_APP_API_KEY;

const MarkersList = props => {
  const { locations, ...markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat(), lng: location.lng() }}
          />
        );
      })}
    </span>
  );
};
class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);
  };
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    };
    return (
      <div className="map-container">
        <Map
          xs={12}
          style={style}
          google={this.props.google}
          className={"map"}
          zoom={this.props.zoom}   
          onClick={this.handleMapClick}
          initialCenter={{ lat: 39.0903317, lng: -94.57857 }}
        >
          <MarkersList locations={this.state.locations} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
  libraries: []
})(MapContainer);