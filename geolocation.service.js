import * as Location from 'expo-location';

const getCurrentPosition =  async () => {
    await Location.requestPermissionsAsync()

    const { coords } = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})

    return coords
}

const getRandomLocationNearby = (x0, y0, radius) => {
    // Convert radius from meters to degrees
   let markers = [];

   for( let i = 0; i < 10; i++) {
    // Convert radius from meters to degrees
    let radiusInDegrees = radius / 111000;

    let u = Math.random()
    let v = Math.random()
    let w = radiusInDegrees * Math.sqrt(u);
    let t = 2 * Math.PI * v;
    let x = w * Math.cos(t);
    let y = w * Math.sin(t);

    // Adjust the x-coordinate for the shrinking of the east-west distances
    let new_x = x / Math.cos(y0 * (Math.PI/180));

    let foundLongitude = new_x + x0;
    let foundLatitude = y + y0;
     markers.push({longitude:  foundLongitude, latitude: foundLatitude });
    }
    return markers;
}

export { getCurrentPosition, getRandomLocationNearby }


