import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import  { getCurrentPosition, getRandomLocationNearby } from './geolocation.service'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  })
  const [markers, setMarkers] = useState([]);
   useEffect(() => {
     getCurrentPosition()
     .then(coords => {
       alert(coords.latitude)
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
      setMarkers( getRandomLocationNearby(coords.longitude, coords.longitude, 1))
    })
  }, [location.latitude, location.longitude]);

  return (
    <View style={styles.container}>
     <MapView style={styles.mapStyle} 
        region={location}
     >
    {markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={{latitude: location.latitude, longitude: location.longitude}}
      title="marker"
      description="opis"/>
     ))} 
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
