import React from 'react'
import styles from '../styles'
import MapView from 'react-native-maps'

class Map extends React.Component {
  render() {

    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
   }}>
        <MapView.Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title='Food-E-Call'
        />
      </MapView>
    )
  }
}

export default Map


// add location real time location data
