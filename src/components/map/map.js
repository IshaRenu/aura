import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapView = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.758685, lng: -73.987698 } }
        defaultZoom = { 15 }
      >
      </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapView
          containerElement={ <div style={{ height: `400px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default Map;