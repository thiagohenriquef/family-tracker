import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -18.930763,
      lng: -48.235862
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAZ5OKaC7rCRJxBvs5639CNIpnNJR0nZFE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap