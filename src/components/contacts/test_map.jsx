import GoogleMapReact from 'google-map-react';
import {Pin} from './pin';

class Map extends React.PureComponent {

  render() {

    const defaultProps = {
      center: {lat: 50.0685700, lng: 14.4028031}, 
      zoom: 15
    }

    return <GoogleMapReact  
      bootstrapURLKeys={{
        key: `AIzaSyAOyLZ-7ckBmCmqQGwIEPq0jc8dZPKhTc8`, 
        language: 'en'
      }}
      defaultCenter={defaultProps.center}
      center={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Pin
        lat={50.0692801}
        lng={14.4018031}
        text={'KKLingua'}
      />

    </GoogleMapReact>
  }
}

export default Map;

