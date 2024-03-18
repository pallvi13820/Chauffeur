import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const DistanceByRoad = ({origin, destination, apiKey, setDistance}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistance = async () => {
      try {
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'OK') {
          const distanceText = data.routes[0].legs[0].distance.text;
          const distanceValue = parseFloat(distanceText); // Parse the string to a floating-point number
          setDistance(distanceValue);
        } else {
          throw new Error(data.error_message || 'Failed to fetch data');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDistance();
  }, [origin, destination, apiKey]);

  return (
    <></>
    // <View>
    //   {!distance ? (
    //     <Text>Error: {error}</Text>
    //   ) : (
    //     <Text>Distance by road: {distance}</Text>
    //   )}
    // </View>
  );
};

export default DistanceByRoad;
