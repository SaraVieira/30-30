import axios from 'axios';

const base = 'http://api.wunderground.com/api/6972e27d6b748a1f';
const geoLookup = `${base}/geolookup/q/autoip.json`;


const getWeatherUrl = (lat, long) => `${base}/forecast/geolookup/conditions/q/${lat},${long}.json`;

const getLocation = () =>
  axios.get(geoLookup)
    .then(rsp => rsp.data.location)
    .then(location => ({ lat: location.lat, lon: location.lon }));


const getData = () =>
      getLocation()
      .then(location => axios.get(getWeatherUrl(location.lat, location.lon))
        .then(rsp => rsp.data.current_observation));


export default getData;
