import * as Location from 'expo-location';

const getCurrentPosition = async () => {
      return await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High})
      .then( e => e.coords)
      .catch( e => alert('Błąd przy lokalizacji'))
}

const getRandomLocationNearby = (x0, y0, radius) => {
    // Convert radius from meters to degrees
   let markers = [];

   for( let i = 0; i < 10; i++) {
       var r = 100/111300 // = 100 meters
       , y0 = original_lat
       , x0 = original_lng
       , u = Math.random()
       , v = Math.random()
       , w = r * Math.sqrt(u)
       , t = 2 * Math.PI * v
       , x = w * Math.cos(t)
       , y1 = w * Math.sin(t)
       , x1 = x / Math.cos(y0)

        newY = y0 + y1
        newX = x0 + x1
       console.log(newY,newX);
       markers.push({ latitude: newY, longitude: newX })
    }
    return markers;
}

export { getCurrentPosition, getRandomLocationNearby }


