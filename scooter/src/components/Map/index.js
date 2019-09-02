// import React from 'react';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

// // const API_KEY = process.env.REACT_APP_API_KEY;

// class GoogleMap extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//     };

//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   };

//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   };

//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     };
//   };

//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     };

//     return (
//       <Map
//         item
//         xs={12}
//         style={style}
//         google={this.props.google}
//         onClick={this.onMapClick}
//         zoom={14}
//         initialCenter={{ lat: 39.0903317, lng: -94.57857 }}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           title={'Marker'}
//           position={{ lat: 39.0903317, lng: -94.57857 }}
//           name={'Marker'}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//         >
//         </InfoWindow>
//       </Map>
//     );
//   };
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDK2WcgF11p0u9xaCEew9Jmzg1yVpUAcIQ'
// })(GoogleMap);


import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

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
  apiKey: 'AIzaSyDK2WcgF11p0u9xaCEew9Jmzg1yVpUAcIQ',
  libraries: []
})(MapContainer);
